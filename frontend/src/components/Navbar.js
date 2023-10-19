import React, { useState } from "react";
import "../css/Navbar.css";
import { Outlet, Link } from "react-router-dom";

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
               
                <Link to="/">Home</Link>
              </li>
              <li>
            
                <Link to="/about">About Us</Link>

              </li>
              <li>
        
                <Link to="/leaverequest">Leave-Request</Link>

              </li>
              <li>

                <Link to="/login">Login</Link>


                <a href="/apply_student_addmission">Apply Admission</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      {/* hero section */}
      <Outlet />
    </>
  );
};