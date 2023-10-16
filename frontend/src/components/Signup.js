import React from "react";
import "../css/Signup.css";
import { useState } from "react";

import { Navbar } from "./Navbar";

export const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  // const ffstore = db.firestore().collection("users");
  // // console.log(ffstore);


  // print firebase colelction
  


  
  



  return (
    <>
      <Navbar />
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form"></div>
            <h2>Create your Account</h2>
            
            <form className="register-form" id="register-form">
              {/* First Name */}
              <div className="signup-form-group">
                <label htmlFor="firstname"></label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="off"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* Last Name */}
              <div className="signup-form-group">
                <label htmlFor="last-name"></label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="off"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="signup-form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="signup-form-group">
                <label htmlFor="phone"></label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="signup-form-group">
                <label htmlFor="password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Confirm Password */}
              <div className="signup-form-group">
                <label htmlFor="confirm-password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </div>

              {/* Checkbox */}
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="checkbox"
                  onChange={toggle}
                />{" "}
                Show Password
              </div>
              <div>
                <a href="/login">Already have an account?</a>
              </div>
              {/* Submit */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Signup"
                />
              </div>
              <div className="or">
                <span>Or</span>
              </div>
              {/* Google Signup
              <div className="gform-group form-button">
                <input
                  type="gsubmit"
                  name="gsignup"
                  id="gsignup"
                  className="gform-submit"
                  value="Signup with Google"
                  // onClick={handleSignUp}
                />
              </div> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};