import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style["header-content"]}>
      <div>Delicious</div>
      <div>
        <ul className="li">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
