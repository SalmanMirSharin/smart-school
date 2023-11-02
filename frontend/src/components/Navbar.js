// import React, { useEffect, useState } from "react";
// import "../css/Navbar.css";
// import { Outlet, Link } from "react-router-dom";
// import profile from "../image/profile.png"
// import { getToken } from "../rtkq/services/localStorageService";
// import { StudentNav } from "./studentNav";

// export const Navbar = () => {
//   const [showLinks, setShowLinks] = React.useState(false);

//   const {access_token} = getToken()

//   const [token, setToken] = useState({

//     tokens : ""

//   })

//   useEffect(()=>{
//       setToken({
//         tokens : access_token
//       })
//   },[access_token])


//   return (
//     <>
//       <nav>
//         <div className="main-nav">
//           {/* Logo Part */}
//           <div className="logo">
//             {/* <img src={h1logo} alt="Code Compass" /> */}
//           </div>
//           {/* Menu Part */}
//           <div className="menu ">
//             <ul className="ml-[-9.5rem]">
//             {/* <ul className=""> */}
//               <li>
               
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
            
//                 <Link to="/about">About Us</Link>

//               </li>
//               <li>
        
//                 <Link to="/leaverequest">Leave-Request</Link>

//               </li>

//               <li>
//                 <Link to="/apply_student_admission">Apply Admission</Link>
//               </li>

//               {!token.tokens ?
//                 <li>
//                 <Link to="/login">Login</Link>
//               </li> :
            
//               <li>
//                 <Link to="/profile"><img src={profile} alt="profile" className="w-7 ml-0" /></Link>
                
//               </li>
//           } 
        
              
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* hero section */}
//       <Outlet />
//     </>
//   );
// };



// import React, { useEffect, useState } from "react";
// import { Outlet, Link, useLocation } from "react-router-dom";
// import profile from "../image/profile.png";
// import { getToken } from "../rtkq/services/localStorageService";
// import { StudentNav } from "./studentNav";

// export const Navbar = () => {
//   const [showLinks, setShowLinks] = React.useState(false);
//   const { access_token } = getToken();
//   const [token, setToken] = useState({
//     tokens: "",
//   });

//   useEffect(() => {
//     setToken({
//       tokens: access_token,
//     });
//   }, [access_token]);

//   // Get the current route location
//   const location = useLocation();

//   return (
//     <>
//       <nav>
//         <div className="main-nav">
//           {/* Logo Part */}
//           <div className="logo">
//             {/* <img src={h1logo} alt="Code Compass" /> */}
//           </div>
//           {/* Menu Part */}
//           <div className="menu">
//             <ul className="ml-[-9.5rem]">
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/leaverequest">Leave-Request</Link>
//               </li>
//               <li>
//                 <Link to="/apply_student_admission">Apply Admission</Link>
//               </li>
//               {!token.tokens ? (
//                 <li>
//                   <Link to="/login">Login</Link>
//                 </li>
//               ) : (
//                 <li>
//                   <Link to="/profile">
//                     <img src={profile} alt="profile" className="w-7 ml-0" />
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Conditionally render the StudentNav component in the /profile route */}
//       {location.pathname === "/profile" && <StudentNav />}

//       {/* hero section */}
//       <Outlet />
//     </>
//   );
// };


// import React, { useEffect, useState } from "react";
// import { Outlet, Link, useLocation } from "react-router-dom";
// import profile from "../image/profile.png";
// import { getToken } from "../rtkq/services/localStorageService";
// import { StudentNav } from "./studentNav";

// export const Navbar = () => {
//   const [showStudentNav, setShowStudentNav] = useState(false);
//   const { access_token } = getToken();
//   const [token, setToken] = useState({
//     tokens: "",
//   });

//   useEffect(() => {
//     setToken({
//       tokens: access_token,
//     });
//   }, [access_token]);

//   // Get the current route location
//   const location = useLocation();

//   // Function to show StudentNav
//   const showStudentNavOnClick = () => {
//     setShowStudentNav(true);
//   };

//   return (
//     <>
//       <nav>
//         <div className="main-nav">
//           {/* Logo Part */}
//           <div className="logo">
//             {/* <img src={h1logo} alt="Code Compass" /> */}
//           </div>
//           {/* Menu Part */}
//           <div className="menu">
//             <ul className="ml-[-9.5rem]">
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/leaverequest">Leave-Request</Link>
//               </li>
//               <li>
//                 <Link to="/apply_student_admission">Apply Admission</Link>
//               </li>
//               {!token.tokens ? (
//                 <li>
//                   <Link to="/login">Login</Link>
//                 </li>
//               ) : (
//                 <li>
//                   <Link to="/profile" onClick={showStudentNavOnClick}>
//                     <img src={profile} alt="profile" className="w-7 ml-0" />
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Conditionally render the StudentNav component when showStudentNav is true */}
//       {showStudentNav && <StudentNav />}

//       {/* hero section */}
//       <Outlet />
//     </>
//   );
// };





import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import profile from "../image/profile.png";
import { getToken } from "../rtkq/services/localStorageService";
import { StudentNav } from "./studentNav";

export const Navbar = () => {
  const [showStudentNav, setShowStudentNav] = useState(false);
  const { access_token } = getToken();
  const [token, setToken] = useState({
    tokens: "",
  });

  useEffect(() => {
    setToken({
      tokens: access_token,
    });
  }, [access_token]);

  // Get the current route location
  const location = useLocation();

  // Function to toggle StudentNav
  const toggleStudentNav = () => {
    setShowStudentNav(!showStudentNav);
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
            {/* <ul className="ml-[-9.5rem]"> */}
            <ul className="">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/apply_student_admission">Apply Admission</Link>
              </li>
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
      {showStudentNav && (
        <div className="student-nav-overlay">
          <StudentNav />
        </div>
      )}

      {/* hero section */}
      <Outlet />
    </>
  );
};
