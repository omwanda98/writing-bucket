import React, { useState } from 'react';
import './BookReview.css';
import reviewbook from '../Assets/Rectangle 66.jpg';

const BookReview = () => {
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
                <h1>Write my Book Review for me</h1>
                <p>
                    Many readers read an average of 10 books every year and before they read a book, they check 
                    out book reviews to determine whether it is worth it to read a book. Book reviews are basis for 
                    students in colleges and high school for many assignments.
                </p>
                <p>
                    It is often challenging to write book reviews and at writingbucket we take the load from your 
                    hands. We also have the ability to tailor the book review to a specific number of pages.
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
                            <img src={reviewbook} alt="Formats Supported" />
                        </div>
                        <div className="text-container">
                            <h3>About Book Review</h3>
                            <p>
                                Through writing a book review students are able to understand the books better. However, it is not all students that can write book reviews and get an A+ due to time factor and also nature of some books being complex. 
                                It often takes a student a couple of reads to able to get the main concepts of a book and write a good draft. They then iterate over the drafts to come up with the final review. 
                                Our experts are by nature fast readers as often they need to go through materials real quick and get the main points. They have also written tonnes of reviews and have in mind the expectations of your instructor and they set you up on the path to get high grade results. All our work is proofread to ensure that the source of the information are credible and quality.
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

export default BookReview;
