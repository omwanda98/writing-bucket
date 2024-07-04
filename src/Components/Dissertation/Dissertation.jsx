import React, { useState } from 'react';
import './Dissertation.css';
import essaywrite from '../Assets/Rectangle 68.png';

const Dissertation = () => {
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
                <h1>Write my Dissertation for me</h1>
                <p>
                It is not every company that claims to offer dissertation service can deliver. Dissertation writing requires a great deal of experience, knowledge and skill. You can trust that our writers go beyond that capability. Dissertations are very important in the academic discipline and ideally you would need the very best on your side. 
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
                            <h3>Here is why writing-bucket.com is the best for you. </h3>
                            <p>
                            1. Affordability: Dissertations are huge documents and tend to be expensive. However, they charge a fair amount and at the same time ensure that quality is not compromised. It is highly uncertain that you may be able to find such a match elsewhere. <br/>
2. No plagiarism guarantee: Our papers are 100% original and before any paper is submitted it is checked through our plagiarism checking software. This software checks both internally and on the internet resources that the paper has not been copy pasted. <br/>
3. Skilled writers in their area of specialization: Our writers are taken through a rigorous process to ensure that they are qualified. We ensure that they have relevant qualifications such as ensuring that they have valid Masters and Doctorate certificates. Besides that, most of our writers are native English speakers from countries such as the United Kingdom, United States, Canada and Australia. <br/>
4. Free Features. We offer services such as formatting, title page, bibliography for free together with the dissertation service. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="two-column-section">
                    <div className="section">
                        <h3>Why Order Dissertation Writing From us</h3>
                        <p>
                        Customer Support is available 24/7. No matter what your time zone is, there will always be a member from our customer support team who will be able to address any concerns that you may have. We deliver on time. When a writer is assigned an order, they commit that they would be able to deliver that order on the indicated time. According to our data, 95% of the orders handled on our platform have been delivered on time. We also try to finish the work earlier to give our clients sufficient time for them to go through the work and provide feedback before the deadline. 
                        </p>
                    </div>
                    <div className="section">
                        <h3>The experts at our service</h3>
                        <p>
                        It is our belief that our writers can handle any dissertation topic that is assigned to them and to be true to that they have ratings of between 8 and 10 from our customers. Therefore, despite how difficult you think your dissertation is, please do not cease to talk to us and we will be able to handle that for you. 

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

export default Dissertation;
