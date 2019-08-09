import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/images/logo_2.svg";

const Header = ({ onLogout }) => (
  <div className="header">
    <div className="header-content">
      <div className="header-topbar">
        <div className="header-topbar-left">
          <Link to={"/"}>
            <img src={logo} className="logo" id="logo" alt="logo" />
          </Link>
        </div>
        <div className="header-topbar-right">
          <button className="login-button">로그인</button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
