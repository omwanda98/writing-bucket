import React, { useState } from 'react';
import './Faqs.css';
import FaqHeader from './FaqHeader'; // Import the new component

const faqData = [
    {
        question: 'I forgot my password',
        answer: 'In case you forget your password, it is possible to reset it on the login page. A link will be sent to your email in case the email exists in our system and you will be able to set a new password. You will then be redirected to the login page to try out the new password.'
    },
    {
        question: 'I need edits to be made on my paper',
        answer: 'It is possible to request for changes to be made on your paper. The number of changes are unlimited and are free based on the requirements of the paper. However, if there is a change in the requirements, there would be a fee charged for that and you would need to contact support.'
    },
    {
        question: 'Can my paper be plagiarized?',
        answer: 'We make sure that before any paper is submitted to our clients it goes through the plagiarism check step. This ensures that all the papers that are submitted to our clients are original. Experts who also submit plagiarized work knowingly get penalized and risk having their accounts terminated.'
    },
    {
        question: 'Is the information provided confidential?',
        answer: 'We use the latest technology on our system to keep our users information safe and secure.'
    },
    {
        question: 'Is it possible for my to be delivered earlier?',
        answer: 'It is possible to have the paper delivered earlier. If the expert finishes the paper earlier than the due date, it will be delivered to you immediately.'
    },
    {
        question: 'Can I monitor the progress of my paper?',
        answer: 'For long papers such as theses we have a progressive delivery model. Once the expert finishes each part you will receive it immediately.'
    },
    {
        question: 'What format do you use for essays?',
        answer: 'We use standard formats such as APA, MLA, Harvard, and Chicago. If you have a specific requirement, please let us know.'
    },
    {
        question: 'Is it safe to submit payments on your system?',
        answer: 'Yes, we use secure payment gateways to ensure your transactions are safe.'
    },
    {
        question: 'Is it possible to have a PowerPoint presentation with my paper?',
        answer: 'Yes, we offer PowerPoint presentation services. Please specify your requirements when placing the order.'
    },
    {
        question: 'Can I choose the writer I want?',
        answer: 'Yes, you can choose the writer based on their ratings and previous work.'
    },
    {
        question: 'Can I communicate with the expert working on my paper?',
        answer: 'Yes, you can communicate with the expert through our messaging system.'
    },
    {
        question: 'How do I receive my paper?',
        answer: 'Your paper will be delivered to your email and will also be available in your account on our website.'
    },
    {
        question: 'What is my personal account?',
        answer: 'Your personal account is where you can manage your orders, communicate with writers, and download completed papers.'
    },
    {
        question: 'How long does it take to assign me a writer?',
        answer: 'It usually takes a few hours to assign a writer, depending on the availability of experts in your subject area.'
    },
    {
        question: 'What do I do if I have not received my paper by the deadline?',
        answer: 'Please contact our support team immediately for assistance.'
    },
    {
        question: 'Is there money back guarantee?',
        answer: 'Yes, we offer a money-back guarantee if you are not satisfied with the quality of the paper.'
    },
    {
        question: 'Do you have pre-written papers?',
        answer: 'No, all our papers are custom-written based on your requirements.'
    },
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faqs">
            <FaqHeader /> {/* Include the new component */}
            <h1>Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {faq.question}
                            <span className={`faq-arrow ${activeIndex === index ? 'open' : ''}`}>&#9660;</span>
                        </div>
                        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
