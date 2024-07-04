import React, { useState } from 'react';
import './CSS/Asssignment.css';
import programme from '../Components/Assets/Rectangle 70.jpg';

const Asssignment = () => {
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
                <h1>Write my Assignment for me</h1>
                <p>
                Availability of high speed internet the world over has led to the mushrooming of many academic writing services in and out of the United States. <br/>This has led to a little confusion on the client's side on how to go about making the choice of a service. There are different charges by the various companies due to the competitive nature of the industry. Clients do not know whether to go for the cheaper or the more expensive companies. 
It is important to note that the cheaper services do not necessarily mean that the services are of poor quality and vice versa. The best shot would be for you to pick those companies which have average prices. Also go for those companies with a very narrow niche. They would have highly specialized services which are most likely to be of quality instead of the broad services which would likely be half baked.
You also check out the customer reviews on the site and from there you can determine if the services that were offered were of quality or they were of poor quality. Pay attention in particular to the testimonials section of a website.
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
                            <h3>Is it  ok to delegate my assignment</h3>
                            <p>
                            Besides providing the assignment paper, the student can also request for the sources of the information that the expert has used in their paper. This ensures that the student does not only get the assignment done but also gets access to the knowledge base that was used by the writer to work on the paper.<br/>
In the course of a student's studies there are some supporting subjects and there are the core subjects. It would be good if the student focused on the core subjects and delegated the theoretical subjects to a professional in that area.<br/>
In addition, there is so much that one can do in a day. If the deadlines are tight then one can always delegate what they may not be able to achieve within the set time.                            </p>
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

export default Asssignment;
