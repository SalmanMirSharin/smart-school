import React from "react";
import "../css/Signup.css";
import { useState } from "react";
import {useRegisterUserMutation} from '../rtkq/services/userAuthApi'
import { storeToken } from '../rtkq/services/localStorageService';



export const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [registerUser,{isLoading}] = useRegisterUserMutation()

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   const actualData = {
  //     first_name: data.get('first_name'),
  //     last_name: data.get('last_name'),
  //     email: data.get('email'),
  //     // phone: data.get('phone'),
  //     role: data.get('role'),
  //     password: data.get('password'),
  //     password2: data.get('password2'),
    
  //   }

  //   const res = await registerUser(actualData)
    
  //   if (res.data){
  //     storeToken(res.data.token)
  //     // navigate('/dashboard')
  //   }
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      email: data.get('email'),
      role: data.get('role'),
      password: data.get('password'),
      password2: data.get('password2'),
    }
  
    try {
      const res = await registerUser(actualData);
      
      if (res.data) {
        storeToken(res.data.token);
        console.log(res.data);
      }
    } catch (error) {
      console.error('API Request Error:', error);
      // Handle the error, e.g., display an error message to the user.
    }
  }
  


  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form"></div>
            <h2>Create your Account</h2>
            
            <form className="register-form" id="register-form" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="signup-form-group">
                <label htmlFor="firstname"></label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
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
                  name="last_name"
                  id="last_name"
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

              <div className='signup-form-group '>
                <label htmlFor="role"></label>
                <select className="select-option"
                  name="role"
                  // value={formData.studentGender}
                  placeholder="Student/Teacher"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  >
                  <option disabled value="admin">Select</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="office_staff">Office_staff</option>
                </select>
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
                  name="password2"
                  id="password2"
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
                  className="form-submit bg-blue-400"
                  value="Signup"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};