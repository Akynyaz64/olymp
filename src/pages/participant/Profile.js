import React from "react";
import {Form, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faFileImage, faFileUpload, faHouseUser, faPen, faTasks, faUpload} from "@fortawesome/free-solid-svg-icons";

import "./Profile.css";

const Profile = () => {
    return (
        <>
            <div className="main-content gray-bg">
                <div className="breadcrumbs breadcrumbs-overlay">
                    <div className="breadcrumbs-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dRDLVoNW3D6AlXgsfjNkC_LqYARCc2q15PbmMGlIfiNvJFWl86sD2GAEqZEnG7XWBdk&usqp=CAU" alt="Breadcrumb" />
                    </div>
                    <div className="breadcrumbs-text white-color">
                        <h1 className="page-title white-color">Şahsy otag</h1>
                        <ul>
                            <li>
                                <NavLink to="/" className="active" end>
                                    Baş sahypa
                                </NavLink>
                            </li>
                            <li>Şahsy otag</li>
                        </ul>
                    </div>
                </div>

                <div className="profile-page">
                    <div className="container">
                        <div className="row contact-box mb-90 md-mb-50">
                            <div className="col-lg-4 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
                                <div className="topper">
                                    <div className="address-item image-wrapper">
                                        <div className="profile-img">
                                            <label className="mx-auto" htmlFor="profile_image">
                                                <FontAwesomeIcon icon={faFileImage} className="me-2" /> Surat ýükle
                                            </label>
                                            <img src="https://avatars.dzeninfra.ru/get-zen_doc/3324118/pub_5eb0753970671122c89d8919_5eb0753e0ab5b766d085835f/scale_1200" alt="Profile" />
                                            <input type="file" id="profile_image" accept="image/*"/>
                                        </div>
                                        <div className="address-text">
                                            <span className="label">Ýazmyradow Akynýaz</span>
                                            <span className="des">Türkmenistan, Aşgabat</span>
                                        </div>
                                        <hr />
                                        <div className="profile-links">
                                            <ul>
                                                <li className="align-items-center">
                                                    <FontAwesomeIcon className="me-3" icon={faHouseUser} />
                                                    <NavLink to="/profile" className="active">
                                                        Şahsy otag
                                                    </NavLink>
                                                </li>
                                                <li className="align-items-center">
                                                    <FontAwesomeIcon className="me-3" icon={faTasks} />
                                                    <NavLink to="projects" className="active">
                                                        Taslamalarym
                                                    </NavLink>
                                                </li>
                                                <li className="align-items-center">
                                                    <FontAwesomeIcon className="me-3" icon={faPen} />
                                                    <NavLink to="projects/new" className="active">
                                                        Täze taslama ugrat
                                                    </NavLink>
                                                </li>
                                                <li className="align-items-center">
                                                    <FontAwesomeIcon className="me-3" icon={faArrowRightFromBracket} />
                                                    <Form action="/logout" method="post">
                                                        <button className="link">Ulgamdan çyk</button>
                                                    </Form>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
                                <div className="topper">
                                    <div className="address-item">
                                        <div className="address-text">
                                            <h2 className="title">Şahsy maglumatlar</h2>
                                            <form id="contact-form">
                                                <fieldset>
                                                    <div className="row">
                                                        <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                            <input className="from-control" type="text" id="name" name="name" placeholder="Ady"  />
                                                        </div>
                                                        <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                            <input className="from-control" type="text" id="email" name="email" placeholder="Elektron poçta"  />
                                                        </div>
                                                        <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                            <input className="from-control" type="text" id="phone" name="phone" placeholder="Telefon belgi"  />
                                                        </div>
                                                        <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                            <input className="from-control" type="text" id="subject" name="subject" placeholder="Tema"  />
                                                        </div>

                                                        <div className="col-lg-12 mb-50">
                                                            <textarea className="from-control" id="message" name="message" placeholder="Hatyňyz" ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-0">
                                                        <input className="btn-send" type="submit" value="Ugrat" />
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
