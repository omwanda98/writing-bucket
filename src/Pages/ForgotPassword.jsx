import React from "react";
import './CSS/ForgotPassword.css';

const ForgotPassword = () => {
    return (
        <div className='forgot-password'>
            <div className="forgot-password-container">
                <h1 className="forgot-password-title">Forgot Password</h1>
                <div className="forgot-password-fields">
                    <input type="text" placeholder="Email address" />
                </div>
                <button className="forgot-password-button">Submit</button>
            </div>
        </div>
    );
};

export default ForgotPassword;
