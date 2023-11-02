import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Outlet, Link } from "react-router-dom";


export const StudentNav = () => {


  return (
    <>
      <nav>
        
          {/* Menu Part */}
          <div className="float-right bg-cyan-700 mr-9 p-6 rounded-md">
            <ul className="text-slate-50 text-xl">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
        
              <li>
        
                <Link to="/leaverequest">Leave-Request</Link>

              </li>

              <li>
                <Link to="/apply_student_admission">Logout</Link>
              </li>
              
              
            </ul>
          </div>
     
      </nav>
      {/* hero section */}
      <Outlet />

    </>
  );
};
