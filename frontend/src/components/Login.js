
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from "../rtkq/services/userAuthApi";
import "../css/Login.css";
import { Navbar } from "./Navbar";
import { StudentApplyAdmission } from "./StudentApplyAdmission";
import { storeToken } from '../rtkq/services/localStorageService';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false); // Clear previous error messages

    try {
      const res = await loginUser({ email, password });

      if (res.error) {
        console.log("Login error:", res.error);
        setError(true); // Show an error message
      }

      if (res.data) {
        console.log("Login successful:", res.data);
        storeToken(res.data.token);
        navigate('/profile');
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <section className="Login">
        <div className="container mt-7">
          <div className="Login-content">
            <div className="Login-h"></div>
            <h2 className="pb-7">Login</h2>
            <form className="Login-form" onSubmit={handleLogin}>
              <div className="login-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <span>Wrong Email or Password</span>}

              <div className="checkbox">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={toggle}
                />
                <label htmlFor="showPassword">Show Password</label>
              </div>

              {/* <div>
                <a href="/signup" className="hover:text-blue-700 hover:text-sm">Don't have an account? Sign Up</a>
              </div> */}

              <div className="form-group form-button">
                <button
                  type="submit"
                  className="form-submit bg-blue-400"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
