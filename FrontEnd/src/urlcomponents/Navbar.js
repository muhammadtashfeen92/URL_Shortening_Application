import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div id="imgdiv">
          <img
            src="https://cdn6.aptoide.com/imgs/b/9/c/b9cac9b36d84fbb1c2159b14c3175e72_icon.png"
            alt="logo"
          ></img>
        </div>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/history" className="history ">
          History
        </Link>
        <div className="imgspan">URL Shortener</div>
      </nav>
    </div>
  );
}

export default Navbar;
