import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <nav className="navbar">
            <h3 className="logo">Logo</h3>
            <ul className="nav-links">
                <Link to="/" className="home">
                    <li>Baş sahypa</li>
                </Link>
                <Link to="/about" className="about">
                    <li>Barada</li>
                </Link>
                <Link to="/projects" className="projects">
                    <li>Taslamalar</li>
                </Link>
                <Link to="/media" className="media">
                    <li>Media</li>
                </Link>
                <Link to="/faq" className="faq">
                    <li>FAQ</li>
                </Link>
                <Link to="/contact" className="contact">
                    <li>Habarlaşmak</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Header;
