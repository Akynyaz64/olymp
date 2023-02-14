import {faArrowRightFromBracket, faHouseUser, faPen, faTasks} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Form, NavLink} from "react-router-dom";

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
                            <div className="col-lg-4 col-md-4 lg-pl-0 sm-mb-30 md-mb-30">
                                <div className="topper">
                                    <div className="address-item image-wrapper">
                                        <div className="profile-img">
                                            <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" alt="Profile" />
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
                                                    <NavLink to="profile" className="active">
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
                                                <li className="align-items-center"  >
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
                            <div className="col-lg-8 col-md-8 lg-pl-0 sm-mb-30 md-mb-30">
                                <div className="topper">
                                    <div className="address-item">
                                        <div className="icon-part">
                                            <FontAwesomeIcon />
                                        </div>
                                        <div className="address-text">
                                            <span className="label">Elektron poçta</span>
                                            <span className="des">
                                                <a href="mailto:info@rstheme.com">example@mail.com</a>
                                            </span>
                                        </div>
                                    </div>{" "}
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
