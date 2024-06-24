import React from 'react';
import './Aboutus.css'
import aboutus from '../Assets/Rectangle74.jpg'
import aboutus2 from '../Assets/Rectangle73.jpg'

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <section className="hero-section">
        <div className="hero-text">
          <h2>About Us</h2>
          <p>Writing Bucket is a go-to website for all your assignments, be it writing, calculations, or programming.</p>
        </div>
        <div className="hero-image">
          <img src={aboutus2} alt="Hero Image" />
        </div>
      </section>
      <section className="story-section">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>Having gone through the university education level, the founders of writing-bucket found that there was great need for mentorship to the students there. Some of the materials was too tough to comprehend for some students, some students did not have much time due to being overburdened by other educational activities. And writing-bucket was born. 
Writing-bucket is located in Kolkata India and has over 300 experts worldwide. They work on different disciplines and are rigorously vetted to ensure that they are the best out there. Our experts have worked on thousands of projects with 99% satisfaction rate from our clients. 
        </p>
        </div>
        <div className="story-image">
          <img src={aboutus} alt="Story Image" />
        </div>
      </section>
    </div>
  );
};

export default Aboutus;