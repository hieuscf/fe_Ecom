import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/shopify_logo_black.png";
import Dropdown from "../Dropdown/Dropdown";
import SearchBox from "../SearchBox/SearchBox";
import { MdOutlineShoppingCart, MdNotificationsNone } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [location, setLocation] = useState("default");
  const [name, setName] = useState("");
  const [notification, setNotification] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
      <div className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="header-logo">
            <Link to="/">
              <img src={Logo} alt="Logo ecommerce" className="logo" />
            </Link>
          </div>

          {/* Dropdown chọn địa điểm */}
          <div className="header-location">
            <Dropdown location={location} setLocation={setLocation} />
          </div>

          {/* Thanh tìm kiếm */}
          <SearchBox />

          {/* Các hành động bên phải */}
          <div className="right-action">
            {/* Thông báo */}
            <div className="notification-action">
              <Button className="notification-button">
                <MdNotificationsNone />
              </Button>
              {notification > 0 && (
                  <span className="notification-count">{notification}</span>
              )}
            </div>

            {/* Nút bán hàng */}
            <div className="sell-action">
              <Button className="sell-button">
                <AiFillAppstore />
              </Button>
              <span className="sell-text">Sell</span>
            </div>

            {/* Giỏ hàng */}
            <div className="cart-action">
              <Button className="cart-button">
                <MdOutlineShoppingCart />
              </Button>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>

            {/* Tài khoản người dùng */}
            <div className="user-action">
              <Button className="user-button">
                <FaRegUserCircle />
              </Button>
              <span className="user-name">{name || "Guest"}</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
