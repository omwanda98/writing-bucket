import React from 'react';
import './FaqHeader.css';
import headerImage from '../Assets/Rectangle72.png'; 

const FaqHeader = () => {
    return (
        <div className="faq-header">
            <div className="faq-header-text">
                <h1>FAQs</h1>
                <h2>Got Questions? we have answers</h2>
            </div>
            <div className="faq-header-image">
                <img src={headerImage} alt="FAQ Header" />
            </div>
        </div>
    );
};

export default FaqHeader;
