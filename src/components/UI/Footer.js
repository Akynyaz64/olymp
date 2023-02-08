import React from "react";
import {
    faEnvelope,
    faMapLocationDot,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import "./Footer.css";

function Navbar() {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 md-mb-50">
                                <NavLink to="/">
                                    <img
                                        src="https://education.gov.tm/img/tm_gerb.svg"
                                        alt="Logo"
                                    />
                                </NavLink>
                                <h2 className="title">
                                    Ýaşlaryň arasynda ylmy işler boýunça Halkara
                                    bäsleşigi
                                </h2>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-50">
                                <div className="title-rel">
                                    <h4 className="title">Salgylar</h4>
                                </div>
                                <ul className="footer-list">
                                    <li>
                                        <NavLink to="/">
                                            Baş sahypa
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="about/rules">
                                            Düzgünnama
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="products">Ugurlar</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="products">
                                            Taslamalar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="products">
                                            Hyzmatdaşlar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="products">Media</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="contact">
                                            Habarlaşmak
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-4">
                                <div className="title-rel">
                                    <h4 className="title">Habarlaşmak üçin</h4>
                                </div>
                                <ul className="address">
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faMapLocationDot}
                                        />
                                        <div className="desc">
                                            Türkmenistan, Aşgabat şäheri,
                                            Arçabil 10.
                                        </div>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                        <div className="desc">
                                            <a href="tel:+993-12-00-00-00">
                                                +993-12-00-00-00
                                            </a>
                                            <br />
                                            <a href="tel:+993-12-00-00-00">
                                                +993-12-00-00-00
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <div className="desc">
                                            <a href="mailto:example@mail.com">
                                                example@mail.com
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row y-middle">
                            <div className="col-lg-12 md-mb-20">
                                <div className="copyright md-text-left">
                                    <p>
                                        Ähli hukuklary goralan © 2023. Powered
                                        by{" "}
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://it.net.tm/"
                                        >
                                            "Sanly Çözgüt IT meýdança" HJ.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Navbar;
