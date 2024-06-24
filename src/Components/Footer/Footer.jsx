import React from "react";
import './Footer.css';
import logo from '../Assets/logo.PNG';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-content">
                    <h2>Get professional help with your paper</h2>
                    <button className="order-now">Order now →</button>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-section">
                    <h3>Info</h3>
                    <p><a href="mailto:support@writingbucket.com">support@writingbucket.com</a></p>
                    <p>2-955-866-5646</p>
                </div>
                <div className="footer-section">
                    <h3>Legal & Policies</h3>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Terms & Conditions</a></p>
                    <p><a href="#">Cookie Policy</a></p>
                    <p><a href="#">Data Security</a></p>
                </div>
                <div className="footer-section">
                    <h3>Company</h3>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Become An Expert</a></p>
                    <p><a href="#">Honor Code</a></p>
                </div>
                <div className="footer-section">
                    <h3>Customer Services</h3>
                    <p><a href="#">FAQ</a></p>
                    <p><a href="#">Reviews</a></p>
                    <p><a href="#">Expert Ratings</a></p>
                    <p><a href="#">Writing Examples</a></p>
                    <p><a href="#">Project Types</a></p>
                </div>
            </div>
            <div className="footer-credits">
                <div className="footer-logo">
                    <img src={logo} alt="Writing Bucket Logo" />
                    <p>© 2024 Writing Bucket All Rights Reserved</p>
                </div>
                <div className="payment-methods">
                    <img src="/path-to-applepay.png" alt="Apple Pay" />
                    <img src="/path-to-gpay.png" alt="Google Pay" />
                    <img src="/path-to-visa.png" alt="Visa" />
                    <img src="/path-to-mastercard.png" alt="MasterCard" />
                    <img src="/path-to-paypal.png" alt="PayPal" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
