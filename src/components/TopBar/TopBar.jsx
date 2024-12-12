import React from "react";
import "./TopBar.scss";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoil/recoil.js"; // Đảm bảo export đúng từ recoil.js

const TopBar = () => {
  const { isLoggedIn, user } = useRecoilValue(authState); // Lấy trạng thái đăng nhập và user

  return (
    <div className="top-bar">
      <div className="left-links">
        <Link to="/about-us">About Us</Link>
        <Link to="/my-account">My Account</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/order-tracking">Order Tracking</Link>
      </div>
      <div className="top-content">
        <Link to="" className="secure-delivery ">
          <i className="fas fa-shield-alt"></i> seller channel
        </Link>
      </div>
      <div className="right-links">
        <a href="#" className="contact-info">
          Need help? Call Us: +0020 500
        </a>
        <div className="dropdown">
          <a href="#">
            English <i className="fas fa-caret-down"></i>
          </a>
          <div className="dropdown-content">
            <a href="#">English</a>
            <a href="#">Spanish</a>
            <a href="#">French</a>
          </div>
        </div>
        {isLoggedIn ? (
          <>
            <span className="user-name">Welcome, {user?.name || "User"}</span>
            <Link to="/logout" className="logout-button">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="login-button">
              Login
            </Link>
            <Link to="/signup" className="signup-button">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
