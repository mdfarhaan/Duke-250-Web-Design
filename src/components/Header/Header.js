import React from "react";
import "./Header.css";
import Logo from "../assets/KTM Logo.png";

function Header() {
  return (
    <div className="header_container">
      <img src={Logo} alt="Logo"></img>
    </div>
  );
}

export default Header;
