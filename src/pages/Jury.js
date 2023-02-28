import React from "react";
import { NavLink } from "react-router-dom";

import "./Jury.css";

const JuryPage = () => {
    return (
        <div className="main-content">
            <div className="breadcrumbs breadcrumbs-overlay">
                <div className="breadcrumbs-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dRDLVoNW3D6AlXgsfjNkC_LqYARCc2q15PbmMGlIfiNvJFWl86sD2GAEqZEnG7XWBdk&usqp=CAU" alt="Breadcrumb" />
                </div>
                <div className="breadcrumbs-text white-color">
                    <h1 className="page-title white-color">Eminler</h1>
                    <ul>
                        <li>
                            <NavLink to="/" className="active" end>
                                Baş sahypa
                            </NavLink>
                        </li>
                        <li>Eminler</li>
                    </ul>
                </div>
            </div>
            <div id="rs-team" className="rs-team style1 inner-style orange-color pt-94 pb-100 md-pt-64 md-pb-70 gray-bg">
                <div className="container">
                    <div className="sec-title mb-50 md-mb-30 text-center">
                        <div className="sub-title orange">EMINLER</div>
                        <h2 className="title mb-0">BÄSLEŞIGIŇ EMINLERI</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="team-item">
                                <img src="https://www.focasscore.com/wp-content/uploads/2018/03/team-member-2.jpg" alt="" />
                                <div className="content-part">
                                    <h4 className="name">
                                        Jhon Pedrocas
                                    </h4>
                                    <span className="designation">Professor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="team-item">
                                <img src="https://www.focasscore.com/wp-content/uploads/2018/03/team-member-2.jpg" alt="" />
                                <div className="content-part">
                                    <h4 className="name">
                                        Jhon Pedrocas
                                    </h4>
                                    <span className="designation">Professor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="team-item">
                                <img src="https://www.focasscore.com/wp-content/uploads/2018/03/team-member-2.jpg" alt="" />
                                <div className="content-part">
                                    <h4 className="name">
                                        Jhon Pedrocas
                                    </h4>
                                    <span className="designation">Professor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="team-item">
                                <img src="https://www.focasscore.com/wp-content/uploads/2018/03/team-member-2.jpg" alt="" />
                                <div className="content-part">
                                    <h4 className="name">
                                        Jhon Pedrocas
                                    </h4>
                                    <span className="designation">Professor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="team-item">
                                <img src="https://www.focasscore.com/wp-content/uploads/2018/03/team-member-2.jpg" alt="" />
                                <div className="content-part">
                                    <h4 className="name">
                                        Jhon Pedrocas
                                    </h4>
                                    <span className="designation">Professor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-4">
                            <div className="team-item">
                                <img src="https://www.focasscore.com/wp-content/uploads/2018/03/team-member-2.jpg" alt="" />
                                <div className="content-part">
                                    <h4 className="name">
                                        Jhon Pedrocas
                                    </h4>
                                    <span className="designation">Professor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JuryPage;
