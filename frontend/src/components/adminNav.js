import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Outlet, Link } from "react-router-dom";
import {removeToken} from "../rtkq/services/localStorageService"
import { useNavigate } from "react-router-dom";


export const AdminNav = () => {

  const nanigate = useNavigate()

  const handelLogout = ()=>{
        removeToken()
        nanigate('/login')

  }

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
        
                <Link to="/signup">Signup</Link>

              </li>

              <li>
                <Link to="/classroutine">Make Routine</Link>
              </li>
              {/* <li>
                <Link to="/classroutine-get">RoutineShow</Link>
              </li> */}

              <li>
                <Link to="/video-upload">Video Upload</Link>
              </li>

              <li>
                <Link to="/video-get">Video Show</Link>
              </li>

              <li>
                <Link to="/student-get">Admission Details</Link>
              </li>

              <li>
               
                <button onClick={handelLogout}>Logout</button>
              </li>
              
              
            </ul>
          </div>
     
      </nav>
      {/* hero section */}
      <Outlet />

    </>
  );
};
