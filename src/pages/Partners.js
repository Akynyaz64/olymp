import React from "react";
import {NavLink} from "react-router-dom";

import "./Partners.css";

const Partners = () => {
    return (
        <div className="main-content gray-bg">
            <div className="breadcrumbs breadcrumbs-overlay">
                <div className="breadcrumbs-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dRDLVoNW3D6AlXgsfjNkC_LqYARCc2q15PbmMGlIfiNvJFWl86sD2GAEqZEnG7XWBdk&usqp=CAU" alt="Breadcrumb" />
                </div>
                <div className="breadcrumbs-text white-color">
                    <h1 className="page-title white-color">Hyzmatdaşlarymyz</h1>
                    <ul>
                        <li>
                            <NavLink to="/" className="active" end>
                                Baş sahypa
                            </NavLink>
                        </li>
                        <li>Hyzmatdaşlarymyz</li>
                    </ul>
                </div>
            </div>

            <div className="partners">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="partner">
                                <div className="img-part">
                                    <img src="https://education.gov.tm/img/tm_gerb.svg" alt="" />
                                </div>
                                <div className="content-part">
                                    <h3 className="title">
                                        <a href="https://education.gov.tm" target="_blank" rel="noreferrer">
                                            Türkmenistanyň Bilim ministrligi
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-2 col-12">
                            <div className="partner">
                                <div className="img-part">
                                    <img src="https://www.mfa.gov.tm/img/dim_logo.png" alt="" />
                                </div>
                                <div className="content-part">
                                    <h3 className="title">
                                        <a href="https://mfa.gov.tm" target="_blank" rel="noreferrer">
                                            Türkmenistanyň Daşary Işler ministrligi
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-2 col-12">
                            <div className="partner">
                                <div className="img-part">
                                    <img src="https://yashlar.gov.tm/source/img/png/logo.png" alt="" />
                                </div>
                                <div className="content-part">
                                    <h3 className="title">
                                        <a href="https://yashlar.gov.tm" target="_blank" rel="noreferrer">
                                            Türkmenistanyň Magtymguly adyndaky Ýaşlar guramasy
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="partner">
                                <div className="img-part">
                                    <img src="https://education.gov.tm/img/tm_gerb.svg" alt="" />
                                </div>
                                <div className="content-part">
                                    <h3 className="title">
                                        <a href="https://education.gov.tm" target="_blank" rel="noreferrer">
                                            Türkmenistanyň Bilim ministrligi
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-2 col-12">
                            <div className="partner">
                                <div className="img-part">
                                    <img src="https://www.mfa.gov.tm/img/dim_logo.png" alt="" />
                                </div>
                                <div className="content-part">
                                    <h3 className="title">
                                        <a href="https://mfa.gov.tm" target="_blank" rel="noreferrer">
                                            Türkmenistanyň Daşary Işler ministrligi
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-2 col-12">
                            <div className="partner">
                                <div className="img-part">
                                    <img src="https://yashlar.gov.tm/source/img/png/logo.png" alt="" />
                                </div>
                                <div className="content-part">
                                    <h3 className="title">
                                        <a href="https://yashlar.gov.tm" target="_blank" rel="noreferrer">
                                            Türkmenistanyň Magtymguly adyndaky Ýaşlar guramasy
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
