import React from "react";
import logoSpotikunay from "../assets/logo/spotikunay-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotikunay} alt="Logo do Spotify" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Spotikunay</h1>
      </Link>
    </div>
  );
};

export default Header;
