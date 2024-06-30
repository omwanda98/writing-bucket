import React from "react";
import { Link } from "react-router-dom";
import './CSS/Loginsignup.css';

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1 className="signup-title">Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Country"/>
                    <input type="text" placeholder="Phone Number"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button className="signup-button">Continue</button>
                <p className="loginsignup-login">Already have an account? <Link to='/login' className="login-link">Login here</Link></p>
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing I agree to the terms of use and policy</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
