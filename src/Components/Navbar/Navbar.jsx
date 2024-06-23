import React from "react";
import './Navbar.css'
import logo from '../Assets/logo.PNG'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src= {logo} alt="" />
                {/* <p>WRITING BUCKET</p> */}
            </div>
            <ul className="nav-menu">
                <li>Home <hr/></li>
                <li>Writing Center</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>How it Works</li>
                <li>FAQ</li>
                <li>Plagiarism Checker</li>
            </ul>
            <div className="nav-login">
                <button>Login</button>
            </div>
            <div className="new-order">
                <button>New Order</button>
            </div>
        </div>
    )
}

export default Navbar