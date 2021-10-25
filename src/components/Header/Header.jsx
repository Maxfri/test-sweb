import React from "react";

import bell from "../../assets/images/bell.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-count">100.00 ₽</div>
      <div className="header-notification">
        <img src={bell} alt="" />
        <div className="header-name">vikavishny</div>
      </div>
      <div className="header-exit">Выйти</div>
    </header>
  );
};

export default Header;
