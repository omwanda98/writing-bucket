import React from "react";
import './Homeservice.css';

const Homeservice = () => {
    return (
        <div className="container">
            <div className="service-steps">
                <h1>How our paper writing service works</h1>
                <div className="steps">
                    <div className="step">
                        <div className="dot-line"></div>
                        <h2>01</h2>
                        <h3>Place an order</h3>
                        <p>In the first step, the client provides the details and instructions how they would expect their paper to be written.</p>
                    </div>
                    <div className="step">
                        <div className="dot-line"></div>
                        <h2>02</h2>
                        <h3>We contact you</h3>
                        <p>Our dedicated support team contacts the client on clarifications and writer selection for the client.</p>
                    </div>
                    <div className="step">
                        <div className="dot-line"></div>
                        <h2>03</h2>
                        <h3>Make payment</h3>
                        <p>Once the client has been informed on the availability of a writer, they make payment through our credit or debit card. Several payment options are supported such as Master Card and Visa. The money is held in escrow and not released immediately.</p>
                    </div>
                    <div className="step">
                        <div className="dot-line"></div>
                        <h2>04</h2>
                        <h3>Receive a paper</h3>
                        <p>Our writer works on the order and delivers the paper to the client. Once the client approves the paper, the money is released and the paper is available for download.</p>
                    </div>
                </div>
                <button className="order-button">New order</button>
            </div>
            <div className="service-benefits">
                <h1>Discover the benefits of our service</h1>
                <div className="benefits">
                    <div className="benefit">
                        <h3>24/7 Customer Support</h3>
                        <p>Our dedicated client support team is available 24/7 all across the globe.</p>
                    </div>
                    <div className="benefit">
                        <h3>Affordable Prices</h3>
                        <p>Our prices are very affordable and at the same time guarantee that you get a quality paper.</p>
                    </div>
                    <div className="benefit">
                        <h3>Formatting is Free</h3>
                        <p>We format the paper according to your instructions free of charge.</p>
                    </div>
                    <div className="benefit">
                        <h3>Confidentiality</h3>
                        <p>We use the most up to date and proven technology to ensure that any information that you share with us is kept private and confidential.</p>
                    </div>
                    <div className="benefit">
                        <h3>Urgent Assignments</h3>
                        <p>Our service can help you on assignments with tight deadlines.</p>
                    </div>
                    <div className="benefit">
                        <h3>Wide Range of Subjects</h3>
                        <p>We have experts in many disciplines who can help you out.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeservice;
