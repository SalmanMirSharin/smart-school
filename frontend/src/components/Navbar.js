import React, { useState } from "react";
import "../css/Navbar.css";


export const Navbar = () => {
  const [showLinks, setShowLinks] = React.useState(false);

  return (
    <>
      <nav>
        <div className="main-nav">
          {/* Logo Part */}
          <div className="logo">
            {/* <img src={h1logo} alt="Code Compass" /> */}
          </div>
          {/* Menu Part */}
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutUs">About Us</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* hero section */}
    </>
  );
};