import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/images/Movie-Icons.png";
const Logo = () => {
  return (
    <Link className="logo-box" to="/">
      <img src={LogoIcon} alt="Logo" />
      <div className="logo-box__text">Moview</div>
    </Link>
  );
};

export default Logo;
