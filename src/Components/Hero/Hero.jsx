import React from "react";
import './Hero.css';
import hero from '../Assets/hero-image.png'; 
import demand from '../Assets/demand.png'
import time from '../Assets/time.png'
import easy from '../Assets/easy.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-left">
                    <h1>Let writing bucket assist you write your paper</h1>
                    <p>From the beginning to end</p>
                    <div className="search-box">
                        <input type="text" placeholder="Tell us the topic you're stuck with" />
                        <button>Get Started</button>
                    </div>
                    <div className="features">
                        <div className="feature">
                            <img src={easy} alt="Easy Process" />
                            <p>Easy Process</p>
                        </div>
                        <div className="feature">
                            <img src={demand} alt="24/7 on Demand" />
                            <p>24/7 on Demand</p>
                        </div>
                        <div className="feature">
                            <img src={time} alt="On Time" />
                            <p>on Time</p>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={hero} alt="Hero" />
                </div>
                <svg className="hero-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 270">
                <path fill="#fff" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,245.3C672,235,768,181,864,165.3C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            </div>
        </div>
    )
}

export default Hero;
