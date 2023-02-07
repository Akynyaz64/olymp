import React from "react";
import { NavLink } from "react-router-dom";

import "./Contact.css";

const ContactPage = () => {
    return (
        <>
            <div className="main-content">
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
                                <NavLink
                                    to="/"
                                    className="active"
                                    end
                                >
                                    Baş sahypa
                                </NavLink>
                            </li>
                            <li>Habarlaşmak</li>
                        </ul>
                    </div>
                </div>

                <div className="contact-page-section pt-100 pb-100 md-pt-70 md-pb-70">
                    <div className="container">
                        <div className="row rs-contact-box mb-90 md-mb-50">
                            <div className="col-lg-4 col-md-12-4 lg-pl-0 sm-mb-30 md-mb-30">
                                <div className="address-item">
                                    <div className="icon-part">
                                        <img
                                            src="assets/images/contact/icon/1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="address-text">
                                        <span className="label">Salgy</span>
                                        <span className="des">
                                            Türkmenistan, Aşgabat şäheri, Arçabil 10.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
                                <div className="address-item">
                                    <div className="icon-part">
                                        <img
                                            src="assets/images/contact/icon/2.png"
                                            alt=""
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
                                        <img
                                            src="assets/images/contact/icon/3.png"
                                            alt=""
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
                                <div className="contact-map3">
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
                                    <form
                                        id="contact-form"
                                        method="post"
                                        action="https://keenitsolutions.com/products/html/educavo/mailer.php"
                                    >
                                        <fieldset>
                                            <div className="row">
                                                <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Ady"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Elektron poçta"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Telefon belgi"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Tema"
                                                        required=""
                                                    />
                                                </div>

                                                <div className="col-lg-12 mb-50">
                                                    <textarea
                                                        className="from-control"
                                                        id="message"
                                                        name="message"
                                                        placeholder="Hatyňyz"
                                                        required=""
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0">
                                                <input
                                                    className="btn-send"
                                                    type="submit"
                                                    value="Ugrat"
                                                />
                                            </div>
                                        </fieldset>
                                    </form>
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
