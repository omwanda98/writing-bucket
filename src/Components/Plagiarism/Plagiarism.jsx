import React from 'react';
import './Plagiarism.css';

function Plagiarism() {
  return (
    <div className="plagiarism-checker">
      <header>
        <h1>Plagiarism Checker</h1>
        <p>Upload your project and check for plagiarism. It is easy, simple and free. Try now.</p>
      </header>
      <div className="checker-box">
        <textarea placeholder="Enter text or upload file to check for plagiarism"></textarea>
        <div className="actions">
          <button className="scan-button">Scan for plagiarism</button>
          <button className="upload-button">Upload a file</button>
        </div>
      </div>
      <section className="how-it-works">
        <h2>How does it work?</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <p>Paper is checked on all the accessible websites for plagiarism</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Internally, we also check through our database</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>A similarity index is generated</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <p>A plagiarism report is sent to your email with the areas to fix pin-pointed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Plagiarism;
