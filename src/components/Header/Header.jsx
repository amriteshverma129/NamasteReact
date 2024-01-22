import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style["header-content"]}>
      <div>Delicious</div>
      <div>
        <ul className="li">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
