import React from "react";
import "./Working.css";

const Working = () => {
    return (
        <div className="working-container">
            <section className="how-it-works">
                <div className="content">
                    <h1>How it works</h1>
                    <p>Everything that you need to know on placing orders and getting the final paper.</p>
                    <button>Order now</button>
                </div>
            </section>
            <section className="start-here">
                <h2>Start here</h2>
                <p>Follow these steps to place your order</p>
                <div className="steps">
                    <div className="step">
                        <h3>01</h3>
                        <h4>Provide Detailed Instructions</h4>
                        <p>Fill in the form. The form guides you through required information like number of pages, formatting style, font-type and font size.<br /> Use the files tab to upload materials that are required to make it possible to work on the order. You can provide the courses power point presentations, lecture notes, a PDF book used in class, videos and audio files. 
                        Make sure to review all the details provided and once you are okay with it you can click on submit.</p>
                    </div>
                    <div className="step">
                        <h3>02</h3>
                        <h4>Our Support Team Contacts You</h4>
                        <p>Provide your account details if you already have one with us or create one if you do not when placing the order. The account provides the contact details such as username, email and phone number. You will use this account to communicate with your writer and also the customer support.</p>
                    </div>
                    <div className="step">
                        <h3>03</h3>
                        <h4>Pay for Your Order</h4>
                        <p>After providing the contact details you will be taken to the checkout page, where you will provide credit card details. You will be given instructions on how to make the payment. With the payment done, work on the order will begin. 
                        Our payments are quick and secure and offer multiple payment options such as Visa, Mastercard, American Express and PayPal. The money is held in escrow and not released immediately.</p>
                    </div>
                    <div className="step">
                        <h3>04</h3>
                        <h4>Receive Your Paper</h4>
                        <p>The experts work on your order and complete it. Upon completion, the paper is checked for plagiarism and submitted to the client for approval. Once approved, the money is released.</p>
                    </div>
                </div>
            </section>
            <section className="what-happens">
                <h2>What happens after placing the order</h2>
                <div className="steps">
                    <div className="step">
                        <h3>01</h3>
                        <h4>An Expert is Assigned</h4>
                        <p>Once an order has been paid the best expert matching your order is assigned. The experts have different qualifications ranging from Bachelor's Degree to PhD level.</p>
                    </div>
                    <div className="step">
                        <h3>02</h3>
                        <h4>Expert Works on the Order</h4>
                        <p>Upon accepting the order, the expert immediately starts working on it according to the instructions. At this stage you can engage the expert and get status updates on the order's progress.</p>
                    </div>
                    <div className="step">
                        <h3>03</h3>
                        <h4>First Draft is Completed</h4>
                        <p>Once the expert feels confident enough that they have completed the work, they send the paper to us.</p>
                    </div>
                    <div className="step">
                        <h3>04</h3>
                        <h4>Plagiarism Check</h4>
                        <p>At this stage we take the paper through a plagiarism check.</p>
                    </div>
                </div>
                <div className="steps">
                    <div className="step">
                        <h3>05</h3>
                        <h4>Paper is Submitted</h4>
                        <p>The paper is sent to your account if ascertained that it is plagiarism-free.</p>
                    </div>
                    <div className="step">
                        <h3>06</h3>
                        <h4>Confirm Whether Draft is Okay</h4>
                        <p>Here you confirm that the paper meets your instructions to the letter. You are free to ask for revisions if something is off.</p>
                    </div>
                    <div className="step">
                        <h3>07</h3>
                        <h4>Order is Approved</h4>
                        <p>If you are pleased with the paper, you approve it by clicking approved.</p>
                    </div>
                    <div className="step">
                        <h3>08</h3>
                        <h4>Download Paper</h4>
                        <p>You can now download the paper anytime from the order download page.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Working;
