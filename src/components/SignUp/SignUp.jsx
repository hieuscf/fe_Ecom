import React, { useState } from "react";
import "./SignUp.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  notifySuccess,
  notifyError,
  notifyWarning,
} from "../../utils/toastUtils.js";
import { signup } from "../../services/authServices.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validateCount = (user, email) =>
    user.trim().length > 0 && email.trim().length > 0;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateCount(data.username, data.email)) {
      notifyError("Tên người dùng hoặc email không được để trống");
      return;
    }
    if (!validateEmail(data.email)) {
      notifyError("Email không hợp lệ");
      return;
    }
    if (!validatePassword(data.password)) {
      notifyError(
        "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt."
      );
      return;
    }

    setIsLoading(true);
    try {
      const response = await signup(data.username, data.email, data.password);
      setIsLoading(false);
      if (response.success) {
        notifySuccess("Đăng ký tài khoản thành công");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        notifyError(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      notifyWarning(error.message);
      notifyWarning(
        error.response?.message || "Đã xảy ra lỗi trong quá trình đăng ký"
      );
    }
  };

  return (
    <div className="signup" id="signup">
      <div className="form-wrapper">
        <div className="form-signup-container">
          <form className="form-sign-up" onSubmit={handleSignup}>
            <h1 className="sign-in-title">Đăng ký</h1>
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
              hoặc sử dụng email của bạn để đăng ký
            </span>
            <input
              className="input-sign-up"
              type="text"
              name="username"
              placeholder="User Name"
              value={data.username}
              onChange={onChangeHandler}
              required
            />
            <input
              className="input-sign-up"
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={onChangeHandler}
              required
            />
            <input
              className="input-sign-up"
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={onChangeHandler}
              required
            />
            <button
              className="button-sign-up"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Đang xử lý..." : "Đăng ký"}
            </button>
          </form>
        </div>
        <ToastContainer />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <Link to="/">
                <h1 className="sign-in-title sign-up-navigation">
                  Chào mừng !
                </h1>
              </Link>
              <p>
                để giữ kết nối với chúng tôi vui lòng đăng nhập với thông tin cá
                nhân của bạn
              </p>
              <Link to="/login">
                <button className="ghost button-sign-up" id="signin">
                  Đăng nhập
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
