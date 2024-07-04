import React, { useState } from 'react';
import './CSS/Programming.css';
import programme from '../Components/Assets/programming2.png';

const Programming = () => {
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
                <h1>Write my Programming Assignment for me</h1>
                <p>
                Is your assignment a programming one? Is it on web application development? Is it on Mobile application development? <br/> Is it a question on algorithms? Is it on data structures? Is it on general problem solving skills? Do not fret! We have the right experts for you.<br/> At writingbucket we have over 500 programmers who are ready to take on your programming assignments. They are top- notch programmers in their respective areas.
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
                            <img src={programme} alt="Formats Supported" />
                        </div>
                        <div className="text-container">
                            <h3>We have experts in all Programming Languages</h3>
                            <p>
We use a rigorous assessment process to select only the best programmers out there in order to ensure that in the end you get a quality paper. Our developers have specialized in various fields such as System Development, Systems Architecture, Systems Deployment, Data Analytics, Artificial Intelligence, Machine Learning and Embedded Coding. With all this wealth of knowledge, you can rest assured that your next programming assignment will be handled by experts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="two-column-section">
                    <div className="section">
                        <h3>Affordable Prices</h3>
                        <p>
                        Affordable Prices: We put the students at the heart of our services and ensure that we provided affordable service and at the same time guarantee that a high quality paper is delivered in the end.
                        </p>
                    </div>
                    <div className="section">
                        <h3>24/7 Support</h3>
                        <p>
                        24/7 Customer Support: Our customer support team is available all around the clock. It does not matter what timezone a client is.
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

export default Programming;
