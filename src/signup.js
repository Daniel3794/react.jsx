import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./App.css";
export const signup = () => {
  return (
    <div>
      <div class="login-block">
        <h1>Sign Up</h1>
        <input type="text" value="" placeholder="Username" id="username" />
        <input type="password" value="" placeholder="Password" id="password" />
        <button>Sign Up</button>
        <h4>
          Are you ready, <Link to="/signin">Sign In</Link>
        </h4>
      </div>
    </div>
  );
}
export default signup;