import React from "react";
import { Link } from "react-router-dom";
import './CSS/Login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button className="login-button">Login</button>
                <p className="login-signup"><Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link></p>
                <p className="login-signup">Don't have an account? <Link to="/signup" className="signup-link">Sign up here</Link></p>
            </div>
        </div>
    );
};

export default Login;
