import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./App.css";
export const signin = () => {
  return (
    <div>
      <div class="login-block">
        <h1>Sign In</h1>
        <input type="text" value="" placeholder="Username" id="username" />
        <input type="password" value="" placeholder="Password" id="password" />
        <button>Sign In</button>
        <h4>
          Don't have an account, <Link to="/signup">Sign Up</Link>
        </h4>
      </div>
    </div>
  );
}
export default signin;