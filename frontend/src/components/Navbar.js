

import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import profile from "../image/profile.png";
import { getToken } from "../rtkq/services/localStorageService";
import { StudentNav } from "./studentNav";
import { AdminNav } from "./adminNav";
import {TeacherNav} from "./teacherNav";
import { useGetLoggedUserQuery } from '../rtkq/services/userAuthApi'


export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { access_token } = getToken();
  const [token, setToken] = useState({
    tokens: "",
  });


  const {data, isSuccess} = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    role: "",
    email:"",
    full_name:"",
  })
  
  useEffect(()=>{
    if(data && isSuccess){
      setUserData({
        role: data.role,
        full_name: `${data.first_name} ${data.last_name}`,
        email: data.email,
      })
    }
  },[data,isSuccess])


// For token:
  useEffect(() => {
    setToken({
      tokens: access_token,
    });
  }, [access_token]);

  // Get the current route location
  const location = useLocation();

  // Function to toggle StudentNav
  const toggleStudentNav = () => {
    setShowNavbar(!showNavbar);
  };

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
            <ul className="ml-[-9.5rem]">
            {/* <ul className=""> */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              
              {/* <li>
                <Link to="/video-upload">Video Upload</Link>
              </li> */}

              {/* <li>
                <Link to="/video-get">Video Show</Link>
              </li> */}
             

              {
                userData.role.toLowerCase()==='admin' ? "":
                <li>
                <Link to="/apply_student_admission">Apply Admission</Link>
              </li>
              }


              {!token.tokens ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <li>
                  <button
                    onClick={toggleStudentNav}
                    className="cursor-pointer focus:outline-none"
                  >
                    <img src={profile} alt="profile" className="w-7 ml-0" />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Conditionally render the StudentNav component as an overlay */}
      

      {/* For Student: */}
     {
      userData.role.toLowerCase()==='student' ?
      
      (token.tokens ? (showNavbar && (
        <div className="student-nav-overlay">
          <StudentNav />
        </div>
      )): ""):""

     }


     {/* For Teacher: */}
     {
      userData.role.toLowerCase()==='teacher' ?
      
      (token.tokens ? (showNavbar && (
        <div className="student-nav-overlay">
          <TeacherNav />
        </div>
      )): ""):""

     }


     {/* For Admin: */}
     {
      userData.role.toLowerCase()==='admin' ?
      
      (token.tokens ? (showNavbar && (
        <div className="student-nav-overlay">
          <AdminNav />
        </div>
      )): ""):""

     }




      {/* hero section */}
      <Outlet />
    </>
  );
};
