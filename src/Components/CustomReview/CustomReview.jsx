import React, { useState } from 'react';
import './CustomReview.css';
import essaywrite from '../Assets/expert3.jpg';

const CustomReview = () => {
    const [projectType, setProjectType] = useState('Essay');
    const [educationLevel, setEducationLevel] = useState('College');
    const [deadline, setDeadline] = useState('7 days');
    const [pages, setPages] = useState(1);
    const [price, setPrice] = useState(44);
    const [faq, setFaq] = useState([
        { question: "Do You Deliver Book Reviews on Time?", answer: "Yes, we ensure timely delivery of all book reviews.", open: false },
        { question: "What's the Qualification of the Expert Who Works on My Review?", answer: "Our experts are highly qualified with extensive experience in writing book reviews.", open: false },
        { question: "What is the Cost of the Book Review?", answer: "The cost of the book review depends on various factors such as length, deadline, and education level.", open: false },
        { question: "Is There Money Back Guarantee?", answer: "Yes, we offer a money-back guarantee if you are not satisfied with the quality of the review.", open: false },
        { question: "What Are Some of Books That You Have Reviews On?", answer: "We have reviews on a wide range of books across various genres and subjects.", open: false }
    ]);

    const handlePageChange = (event) => {
        const newPages = parseInt(event.target.value);
        setPages(newPages);
        setPrice(newPages * 44);
    };

    const toggleFAQ = index => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
            return item;
        }));
    };

    return (
        <div className="book-review-container">
            <div className="header-section">
                <h1>Write my Custome Review for me</h1>
                <p>
                ﻿

There are times when the student is asked to write a review on a particular area such as: Article Review: This is a review on another researcher's work. It usually offers constructive criticism on the researcher's point of view or agrees with it.
Book Review: These kinds of reviews entail reviewing books and can take a substantial amount of time as one has to read the book first and understand it in order to submit quality work. Literature Review: This type of review deals with many sources of information on a particular issue. It is a lot of work and sometimes it is overwhelming to the students hence most of the students make the request to us for this.
                </p>
                <div className="header-buttons">
                    <button>Get help</button>
                    <button>How it works</button>
                </div>
            </div>
            <div className="price-calculator-section">
                <h2>Calculate the price</h2>
                <form className="price-form">
                    <div className="form-group">
                        <label>Project type</label>
                        <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                            <option>Essay</option>
                            {/* Add other options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Education level</label>
                        <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}>
                            <option>College</option>
                            {/* Add other options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Deadline</label>
                        <select value={deadline} onChange={(e) => setDeadline(e.target.value)}>
                            <option>7 days</option>
                            {/* Add other options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Pages/word</label>
                        <input 
                            type="number" 
                            value={pages} 
                            onChange={handlePageChange} 
                            min="1"
                        />
                    </div>
                    <div className="price-display">
                        <p>Price: <span>${price}</span></p>
                    </div>
                    <button type="button" className="place-order-button">Place order</button>
                </form>
            </div>
            <div className="additional-sections">
                <div className="section">
                    <div className="section-content">
                        <div className="image-container">
                            <img src={essaywrite} alt="Formats Supported" />
                        </div>
                        <div className="text-container">
                            <h3>Our Literature Review Comes with advantages</h3>
                            <p>
                            It is affordable yet quality: Despite the prices not being too high we seek to ensure that the student work is quality.<br/>
Fast delivery: We endeavor to meet the deadline set by the client for the paper. Where possible to deliver the paper earlier to the client so that they can be reviewing and have the revisions done earlier where necessary.<br/>
Reliable 24/7 Customer service support: Our customer service team is available throughout the day may it be daytime or during the night. The timezone does not matter too since our staff and experts are distributed all over the code.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="two-column-section">
                    <div className="section">
                        <h3>Plagiarism Free Paper</h3>
                        <p>
                            We take pride in providing 100% original work. We have put in place an plagiarism detection internally that deters our experts from uploading any plagiarized work. Our team consists of highly qualified and experienced writers who have written numerous book reviews over the years. They are familiar with various genres and writing styles, ensuring that your book review is insightful and well-crafted.
                        </p>
                    </div>
                    <div className="section">
                        <h3>Multiple Formats Supported</h3>
                        <p>
                            Our writers are well versed with the various formatting styles such as APA, MLA, Harvard, Turabian, among others. All you have to do is indicate that the format required in the instructions for the order and we will make sure to follow it. We understand the importance of meeting deadlines. Our writers work efficiently to ensure that your book review is delivered on time, without compromising on quality.
                        </p>
                    </div>
                </div>
            </div>
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faq.map((item, index) => (
                        <div key={index} className={`faq ${item.open ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">
                                {item.question}
                                <span>{item.open ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer" style={{ display: item.open ? 'block' : 'none' }}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomReview;
