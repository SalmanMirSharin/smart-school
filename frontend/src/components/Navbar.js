import React, { useState } from "react";
import "../css/Navbar.css";
import { Outlet, Link } from "react-router-dom";
import profile from "../image/profile.png"

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
          <div className="menu ">
            <ul className="ml-[-9.5rem]">
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

               
              </li>
              <li>
                <Link to="/apply_student_admission">Apply Admission</Link>
              </li>
              <li>
                <Link to="/profle"><img src={profile} alt="profile" className="w-7 ml-0" /></Link>
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