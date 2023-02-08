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
                            src="https://education.gov.tm/img/tm_gerb.svg"
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
                                    end
                                >
                                    Baş sahypa
                                </NavLink>
                            </span>
                            <span>
                                <li className="nav-item dropdown">
                                    <a
                                        href="#/"
                                        className="nav-link dropdown-toggle text-uppercase me-3"
                                        role="button"
                                        id="dropdownMenuButton"
                                    >
                                        Barada
                                    </a>
                                    <ul
                                        className="dropdown-menu rounded-0"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <li>
                                            <NavLink
                                                to="about"
                                                className="dropdown-item bg-white text-black"
                                            >
                                                Barada
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="about/rules"
                                                className="dropdown-item bg-white text-black"
                                            >
                                                Düzgünnama
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
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
                                    to="contact"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Habarlaşmak
                                </NavLink>
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
