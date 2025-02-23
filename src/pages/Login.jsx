import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import CSS for styling

function Login() {
  return (
    <div className="login-container">
      <div className="overlay"></div> {/* Dark overlay */}
      <div className="content">
        {/* Headline & Subtext - Positioned Above the Login Form */}
        <div className="header-text">
          <h1 className="headline">Welcome to the Personal Finance Manager App</h1>
          <p className="subtext">Track your income, expenses, and manage your finances easily.</p>
        </div>

        {/* Login Form */}
        <div className="login-box">
          <h3>Login</h3>
          <form>
            <input type="email" className="form-control mb-2" placeholder="Email" required />
            <input type="password" className="form-control mb-2" placeholder="Password" required />
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
