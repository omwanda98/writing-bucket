import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.PNG';
import { Link } from "react-router-dom";

const Navbar = () =>{ 
    const [menu, setMenu] = useState("home");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <div className="navbar-container">  
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu-icon" onClick={() => setMenuVisible(!menuVisible)}>
                    &#9776;
                </div>
                <ul className={`nav-menu ${menuVisible ? 'show' : ''}`}>
                    <li onClick={() => setMenu("home")}>
                        <Link style={{ textDecoration: 'none', color: 'white'}} to='/'>Home</Link> {menu === "home" && <hr />}
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
                                        <li><Link to='/book-review'><p>Review writing service</p></Link></li>
                                        <li><Link to='/essay'><p>Essay writing service</p></Link></li>
                                        <li><Link to='/dissertation'><p>Dissertation writing service</p></Link></li>
                                        <li><Link to='/custom-review'><p>Custom writing service</p></Link></li>
                                        <li><p>Speech writing service</p></li>
                                        <li><p>Assignment writing service</p></li>
                                        <li><p>Resume writing service</p></li>
                                        <li><p>Thesis writing service</p></li>
                                        <li><p>Lab report writing service</p></li>
                                        <li><p>Term paper writing service</p></li>
                                        <li><p>Capstone writing service</p></li>
                                        <li><p>Personal statement writing</p></li>
                                        <li><p>Annotated bibliography writing</p></li>
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
                    <li onClick={() => setMenu("about")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About Us</Link> {menu === "about" && <hr />}</li>
                    {/* <li onClick={() => setMenu("services")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/services'>Our Services</Link> {menu === "services" && <hr />}</li> */}
                    <li onClick={() => setMenu("howitworks")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/howitworks'>How it Works</Link> {menu === "howitworks" && <hr />}</li>
                    <li onClick={() => setMenu("faq")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/faq'>FAQ</Link> {menu === "faq" && <hr />}</li>
                    <li onClick={() => setMenu("plagiarism")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/plagiarism'>Plagiarism Checker</Link> {menu === "plagiarism" && <hr />}</li>
                    <div className="nav-login"><Link to='/login'><button>Login</button></Link></div>
                    <div className="new-order"><Link to='/login'><button>New Order</button></Link></div>
                </ul>
                {/* <div className="nav-login">
                    <Link to='/login'><button>Login</button></Link>
                </div> */}
                {/* <div className="new-order">
                       <Link to='/order'><button>New Order</button></Link>     
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;
