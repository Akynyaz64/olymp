import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelopeOpenText,
    faMapLocationDot,
    faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

import ContactForm from "../components/ContactForm";
import "./Contact.css";

const ContactPage = () => {
    return (
        <>
            <div className="main-content gray-bg">
                <div className="breadcrumbs breadcrumbs-overlay">
                    <div className="breadcrumbs-img">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dRDLVoNW3D6AlXgsfjNkC_LqYARCc2q15PbmMGlIfiNvJFWl86sD2GAEqZEnG7XWBdk&usqp=CAU"
                            alt="Breadcrumb"
                        />
                    </div>
                    <div className="breadcrumbs-text white-color">
                        <h1 className="page-title white-color">Habarlaşmak</h1>
                        <ul>
                            <li>
                                <NavLink to="/" className="active" end>
                                    Baş sahypa
                                </NavLink>
                            </li>
                            <li>Habarlaşmak</li>
                        </ul>
                    </div>
                </div>

                <div className="contact-page-section pt-100 pb-100 md-pt-70 md-pb-70">
                    <div className="container">
                        <div className="row contact-box mb-90 md-mb-50">
                            <div className="col-lg-4 col-md-12-4 lg-pl-0 sm-mb-30 md-mb-30">
                                <div className="address-item">
                                    <div className="icon-part">
                                        <FontAwesomeIcon
                                            icon={faMapLocationDot}
                                        />
                                    </div>
                                    <div className="address-text">
                                        <span className="label">Salgy</span>
                                        <span className="des">
                                            Türkmenistan, Aşgabat şäheri,
                                            Arçabil 10.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
                                <div className="address-item">
                                    <div className="icon-part">
                                        <FontAwesomeIcon
                                            icon={faEnvelopeOpenText}
                                        />
                                    </div>
                                    <div className="address-text">
                                        <span className="label">
                                            Elektron poçta
                                        </span>
                                        <span className="des">
                                            <a href="mailto:info@rstheme.com">
                                                example@mail.com
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 lg-pl-0 sm-mb-30">
                                <div className="address-item">
                                    <div className="icon-part">
                                        <FontAwesomeIcon
                                            icon={faMobileScreenButton}
                                        />
                                    </div>
                                    <div className="address-text">
                                        <span className="label">
                                            Telefon belgi
                                        </span>
                                        <span className="des">
                                            <a href="https://keenitsolutions.com/products/html/educavo/tel+0885898745">
                                                +993 12 00 00 00
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 md-mb-30">
                                <div className="contact-map">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Fort%20Miley&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        title="map"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 pl-60 md-pl-15">
                                <div className="contact-comment-box">
                                    <div className="inner-part">
                                        <h2 className="title mb-mb-15">
                                            Biz bilen habarlaşyň
                                        </h2>
                                    </div>
                                    <div id="form-messages"></div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
