import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Category.css";

const CategoryPage = () => {
    return (
        <div className="main-content">
            <div className="breadcrumbs breadcrumbs-overlay">
                <div className="breadcrumbs-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dRDLVoNW3D6AlXgsfjNkC_LqYARCc2q15PbmMGlIfiNvJFWl86sD2GAEqZEnG7XWBdk&usqp=CAU" alt="Breadcrumb" />
                </div>
                <div className="breadcrumbs-text white-color">
                    <h1 className="page-title white-color">Kategoriýanyň ady</h1>
                    <ul>
                        <li>
                            <NavLink to="/" className="active" end>
                                Baş sahypa
                            </NavLink>
                        </li>
                        <li>Kategoriýanyň ady</li>
                    </ul>
                </div>
            </div>

            <div className="inner-blog">
                <div className="container">
                    <div className="blog-deatails">
                        {/* <div className="bs-img">
                    <a href="blog-single.html#">
                        <img
                            src="assets/images/blog/inner/1.jpg"
                            alt=""
                        />
                    </a>
                </div> */}
                        <div className="blog-full">
                            <h2 className="title text-center mt-4 mb-40">Kategoriýanyň ady</h2>
                            <ul className="unorder-list mb-20">
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> New Construction Benefit of Service
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Renovations Benefit of Service
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Historic Renovations and Restorations
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Additions Benefit of Service
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight} /> Rebuilding from fire or water damage
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
