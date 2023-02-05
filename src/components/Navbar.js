import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className="navbar sticky-top navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink
                        to="/"
                        className="navbar-brand text-white fw-bold logo"
                    >
                        <img
                            src="/img/logo.svg"
                            alt="logo"
                            style={{ width: "50px" }}
                        />
                        LOGO
                    </NavLink>
                    <button
                        className="navbar-toggler bg-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarSupportedContent"
                    >
                        <div className="navbar-nav ms-auto ">
                            <span>
                                <NavLink
                                    to="/"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Baş sahypa
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Barada
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Products
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    galereýa
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    habarlaşmak
                                </NavLink>
                            </span>
                            <span>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        to={"/"}
                                        className="nav-link dropdown-toggle text-uppercase me-3"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ letterSpacing: "1px" }}
                                    >
                                        Email
                                    </NavLink>
                                    <ul className="dropdown-menu rounded-0">
                                        <li>
                                            <NavLink
                                                to="/"
                                                className="dropdown-item bg-white text-black"
                                            >
                                                Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/"
                                                className="dropdown-item bg-white text-black"
                                            >
                                                Profile
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </span>
                            <NavLink
                                to="/login"
                                className="btn btn-outline-green rounded-0 fw-bold"
                            >
                                <button type="button" class="btn btn-success">
                                    Ýüz tutma
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
