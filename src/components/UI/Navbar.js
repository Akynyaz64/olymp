import React from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import user_icon from "../../assets/img/user_icon.png";
import "./Navbar.css";

function Navbar() {
    const token = useRouteLoaderData("root");

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
                                    to="/category"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Ugurlar
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="/jury"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Eminler
                                </NavLink>
                            </span>
                            <span>
                                <NavLink
                                    to="partners"
                                    className="nav-item nav-link text-uppercase me-3"
                                >
                                    Hyzmatdaşlar
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
                            {!token && (
                                <div className="btn-part p-0">
                                    <NavLink
                                        to="/login"
                                        className="rounded-0 fw-bold"
                                    >
                                        Ulgama gir
                                    </NavLink>
                                </div>
                            )}
                            {token && (
                                <span className=" p-0">
                                    <li className="nav-item dropdown">
                                        <a
                                            href="#/"
                                            className="nav-link dropdown-toggle text-uppercase me-3"
                                            role="button"
                                            id="dropdownMenuButton"
                                        >
                                            <img
                                                src={user_icon}
                                                alt="User icon"
                                                className="user-icon"
                                            />{" "}
                                            Şahsy otag
                                        </a>
                                        <ul
                                            className="dropdown-menu my-dropdown rounded-0"
                                            aria-labelledby="dropdownMenuButton"
                                        >
                                            <li>
                                                <NavLink
                                                    to="profile"
                                                    className="dropdown-item bg-white text-black"
                                                >
                                                    Şahsy otag
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="profile/projects"
                                                    className="dropdown-item bg-white text-black"
                                                >
                                                    Taslamalarym
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="profile/projects/new"
                                                    className="dropdown-item bg-white text-black"
                                                >
                                                    Täze taslama ugrat
                                                </NavLink>
                                            </li>
                                            <div className="hr"></div>
                                            <li>
                                                <Form
                                                    action="/logout"
                                                    method="post"
                                                    className="dropdown-item bg-white text-black"
                                                >
                                                    <button className="">
                                                        Ulgamdan çyk
                                                        <FontAwesomeIcon
                                                            className="ms-2"
                                                            icon={
                                                                faArrowRightFromBracket
                                                            }
                                                        />
                                                    </button>
                                                </Form>
                                            </li>
                                        </ul>
                                    </li>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
