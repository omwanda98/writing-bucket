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
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="card">
            <img src={aboutus2} alt="Service 1" />
            <h3>Stay Protective</h3>
            <p>Ensure you are always protected.</p>
          </div>
          <div className="card">
            <img src={aboutus} alt="Service 2" />
            <h3>Stay Smart</h3>
            <p>Stay ahead with smart solutions.</p>
          </div>
          <div className="card">
            <img src={aboutus2} alt="Service 3" />
            <h3>Stay Secure</h3>
            <p>Security is our top priority.</p>
          </div>
        </div>
      </section>
      <section className="statistics-section">
        <h2>Facts</h2>
        <div className="statistics">
          <div className="stat">
            <div className="icon"></div>
            <p>Number of Projects Handled</p>
            <h3>1498</h3>
          </div>
          <div className="stat">
            <div className="icon"></div>
            <p>Experience in Years</p>
            <h3>5</h3>
          </div>
          <div className="stat">
            <div className="icon"></div>
            <p>Average Rating from Clients</p>
            <h3>9.8</h3>
          </div>
          <div className="stat">
            <div className="icon"></div>
            <p>Global Reach</p>
            <h3>50+</h3>
          </div>
          <div className="stat">
            <div className="icon"></div>
            <p>Team Members</p>
            <h3>300+</h3>
          </div>
        </div>
      </section>
      <section className="disciplines-section">
        <h2>Frequently Ordered Disciplines</h2>
        <div className="discipline-cards">
          <div className="discipline-card">
            <h3>Calculations</h3>
            <ul>
              <li>Statistics</li>
              <li>Mathematics</li>
              <li>Chemistry</li>
              <li>Physics</li>
              <li>Accounting</li>
              <li>Engineering</li>
              <li>Statistics</li>
            </ul>
          </div>
          <div className="discipline-card">
            <h3>Writing</h3>
            <ul>
              <li>History</li>
              <li>Item 2</li>
              <li>Nursing</li>
              <li>Business Studies</li>
              <li>Management</li>
              <li>Reflective Essays</li>
            </ul>
          </div>
          <div className="discipline-card">
            <h3>Information Technology</h3>
            <ul>
              <li>Database Design</li>
              <li>Machine Learning</li>
              <li>Networking</li>
              <li>Algorithms</li>
              <li>Computer Science Theory</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
