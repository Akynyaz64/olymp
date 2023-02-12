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
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.8131508459296!2d58.41060571565484!3d37.90849791222686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd0288bf8b01%3A0xe8368ffd1d264518!2zU2FubHkgw6fDtnpnw7x0IElUIG1lw71kYW7Dp2E!5e1!3m2!1sru!2s!4v1676198431224!5m2!1sru!2s"
                                        loading="lazy"
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
