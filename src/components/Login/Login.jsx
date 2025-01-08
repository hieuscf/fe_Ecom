import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { notifySuccess, notifyError } from "../../utils/toastUtils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useRecoilState } from "recoil";
import { authState } from "../../recoil/recoil";
import { login } from "../../services/authServices.js";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [auth, setAuth] = useRecoilState(authState);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { token, response } = await login(data.email, data.password); // Nhận token và response

      if (response.data.success) {
        if (token) {
          // Lưu token vào cookie
          /*Cookies.set("token", token);*/
          localStorage.setItem('token', token);
          notifySuccess(response.data.message);
          console.log("cookie");
          // Cập nhật state Recoil
          setAuth({
            isLoggedIn: true,
            user: token, // Truyền token vào state
          });


          // Điều hướng về trang home
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          notifyError("Không tìm thấy token trong header.");
        }
      } else {
        notifyError(response.data.message);
      }
    } catch (error) {
      console.error("Lỗi trong quá trình đăng nhập:", error);
      notifyError("Đã xảy ra lỗi trong quá trình đăng nhập.");
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="signup" id="signup">
      <div className="form-wrapper">
        <div className="form-signup-container form-signin-container">
          <form action="POST" className="form-sign-up" onSubmit={handleLogin}>
            <h1 className="sign-in-title">Đăng nhập</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <span className="span-sign-up">
              hoặc sử dụng email của bạn để đăng nhập
            </span>
            <input
              name="email"
              className="input-sign-up"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={onChangeHandler}
              required
            />
            <input
              name="password"
              className="input-sign-up"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={onChangeHandler}
              required
            />
            <Link to="/client/login/repass" className="span-sign-up repass">
              Quên mật khẩu ?
            </Link>
            <button className="button-sign-up">Đăng nhập</button>
          </form>
          <ToastContainer draggablePercent={60} limit={2} />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <Link to="/">
                <h1 className="sign-in-title sign-in-navigation">Xin chào !</h1>
              </Link>
              <p>
                Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng
                tôi
              </p>
              <Link to="/signup">
                <button className="ghost button-sign-up" id="signin">
                  Đăng ký
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
