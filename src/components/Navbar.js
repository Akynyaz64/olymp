import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
                            src="https://img.freepik.com/free-vector/flat-design-mc-logo-design_23-2149482035.jpg?w=2000"
                            alt="logo"
                        />
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
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarSupportedContent"
                    >
                        <div className="navbar-nav ms-auto ">
                            <span>
                                <NavLink
                                    to="/"
                                    className={`"nav-item nav-link text-uppercase me-3" ${({
                                        isActive,
                                    }) => (isActive ? "active" : undefined)}`}
                                >
                                    Baş sahypa
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/test"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Barada
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/test"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Products
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/test"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Galereýa
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/test"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Habarlaşmak
                                </NavLink>
                            </span>
                            <span>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        to="/test"
                                        className="nav-link dropdown-toggle text-uppercase me-3"
                                        role="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Email
                                    </NavLink>
                                    <ul
                                        className="dropdown-menu rounded-0"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <li>
                                            <NavLink
                                                to="/test"
                                                className="dropdown-item bg-white text-black"
                                            >
                                                Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/test"
                                                className="dropdown-item bg-white text-black"
                                            >
                                                Profile
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </span>
                            <div className="btn-part p-0">
                                <NavLink
                                    to="/login"
                                    className="rounded-0 fw-bold"
                                >
                                    Ýüz tutmak
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
