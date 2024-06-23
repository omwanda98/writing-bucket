import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.PNG';

const Navbar = () =>{ 
    const [menu, setMenu] = useState("home");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav-menu">
                    <li onClick={() => setMenu("home")}>
                        Home {menu === "home" && <hr />}
                    </li>
                    <li 
                        onMouseEnter={() => setDropdownVisible(true)}
                        onMouseLeave={() => setDropdownVisible(false)}
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                        className="dropdown"
                    >
                        Writing Center
                        {dropdownVisible && (
                            <div className="dropdown-content">
                                <div className="dropdown-column">
                                    <h3>Project Types</h3>
                                    <ul>
                                        <li><a href="#">Essay writing service</a></li>
                                        <li><a href="#">Dissertation writing service</a></li>
                                        <li><a href="#">Custom writing service</a></li>
                                        <li><a href="#">Speech writing service</a></li>
                                        <li><a href="#">Assignment writing service</a></li>
                                        <li><a href="#">Resume writing service</a></li>
                                        <li><a href="#">Thesis writing service</a></li>
                                        <li><a href="#">Lab report writing service</a></li>
                                        <li><a href="#">Review writing service</a></li>
                                        <li><a href="#">Term paper writing service</a></li>
                                        <li><a href="#">Capstone writing service</a></li>
                                        <li><a href="#">Personal statement writing service</a></li>
                                        <li><a href="#">Annotated bibliography writing service</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown-column">
                                    <h3>Academic Fields & Subjects</h3>
                                    <ul>
                                        <li><a href="#">Management</a></li>
                                        <li><a href="#">Finance</a></li>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Accounting</a></li>
                                        <li><a href="#">Literature</a></li>
                                        <li><a href="#">Statistics</a></li>
                                        <li><a href="#">Physics</a></li>
                                        <li><a href="#">Philosophy</a></li>
                                        <li><a href="#">Psychology</a></li>
                                        <li><a href="#">Sociology</a></li>
                                        <li><a href="#">Nursing</a></li>
                                        <li><a href="#">Biology</a></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                    <li onClick={() => setMenu("about")}>About Us {menu === "about" && <hr />}</li>
                    <li onClick={() => setMenu("services")}>Our Services {menu === "services" && <hr />}</li>
                    <li onClick={() => setMenu("working")}>How it Works {menu === "working" && <hr />}</li>
                    <li onClick={() => setMenu("faq")}>FAQ {menu === "faq" && <hr />}</li>
                    <li onClick={() => setMenu("plagiarism")}>Plagiarism Checker {menu === "plagiarism" && <hr />}</li>
                </ul>
                <div className="nav-login">
                    <button>Login</button>
                </div>
                <div className="new-order">
                    <button>New Order</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
