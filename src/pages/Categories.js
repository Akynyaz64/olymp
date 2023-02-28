import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Categories.css";

const CategoriesPage = () => {
    return (
        <div className="main-content">
            <div className="breadcrumbs breadcrumbs-overlay">
                <div className="breadcrumbs-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dRDLVoNW3D6AlXgsfjNkC_LqYARCc2q15PbmMGlIfiNvJFWl86sD2GAEqZEnG7XWBdk&usqp=CAU" alt="Breadcrumb" />
                </div>
                <div className="breadcrumbs-text white-color">
                    <h1 className="page-title white-color">Bäsleşigiň ugurlary</h1>
                    <ul>
                        <li>
                            <NavLink to="/" className="active" end>
                                Baş sahypa
                            </NavLink>
                        </li>
                        <li>Bäsleşigiň ugurlary</li>
                    </ul>
                </div>
            </div>
            <div className="rs-categories main-home pt-90 pb-100 md-pt-60 md-pb-40">
                <div className="container">
                    <div className="sec-title3 text-center mb-45">
                        <div className="sub-title"> Bäsleşigiň ugurlary</div>
                        <h2 className="title black-color">Ugurlar</h2>
                    </div>
                    <div className="row mb-35">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categories-items">
                                <div className="cate-images">
                                    <Link to={"/category/1"}>
                                        <img src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/07/Nanotechnology-Medicine-Technology-July.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="contents">
                                    <div className="img-part">
                                        <img src="assets/images/categories/main-home/icon/1.png" alt="" />
                                    </div>
                                    <div className="content-wrap">
                                        <h2 className="title">
                                            <Link to={"/category/1"}>General Education</Link>
                                        </h2>
                                        <span className="course-qnty">02 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categories-items">
                                <div className="cate-images">
                                    <Link to={"/category/1"}>
                                        <img src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/07/Nanotechnology-Medicine-Technology-July.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="contents">
                                    <div className="img-part">
                                        <img src="assets/images/categories/main-home/icon/2.png" alt="" />
                                    </div>
                                    <div className="content-wrap">
                                        <h2 className="title">
                                            <Link to={"/category/1"}>Computer Science</Link>
                                        </h2>
                                        <span className="course-qnty">02 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categories-items">
                                <div className="cate-images">
                                    <Link to={"/category/1"}>
                                        <img src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/07/Nanotechnology-Medicine-Technology-July.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="contents">
                                    <div className="img-part">
                                        <img src="assets/images/categories/main-home/icon/3.png" alt="" />
                                    </div>
                                    <div className="content-wrap">
                                        <h2 className="title">
                                            <Link to={"/category/1"}>Civil Engineering</Link>
                                        </h2>
                                        <span className="course-qnty">02 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categories-items">
                                <div className="cate-images">
                                    <Link to={"/category/1"}>
                                        <img src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/07/Nanotechnology-Medicine-Technology-July.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="contents">
                                    <div className="img-part">
                                        <img src="assets/images/categories/main-home/icon/4.png" alt="" />
                                    </div>
                                    <div className="content-wrap">
                                        <h2 className="title">
                                            <Link to={"/category/1"}>Artificial Intelligence</Link>
                                        </h2>
                                        <span className="course-qnty">02 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categories-items">
                                <div className="cate-images">
                                    <Link to={"/category/1"}>
                                        <img src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/07/Nanotechnology-Medicine-Technology-July.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="contents">
                                    <div className="img-part">
                                        <img src="assets/images/categories/main-home/icon/5.png" alt="" />
                                    </div>
                                    <div className="content-wrap">
                                        <h2 className="title">
                                            <Link to={"/category/1"}>Business Studies</Link>
                                        </h2>
                                        <span className="course-qnty">02 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="categories-items">
                                <div className="cate-images">
                                    <Link to={"/category/1"}>
                                        <img src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2020/07/Nanotechnology-Medicine-Technology-July.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="contents">
                                    <div className="img-part">
                                        <img src="assets/images/categories/main-home/icon/6.png" alt="" />
                                    </div>
                                    <div className="content-wrap">
                                        <h2 className="title">
                                            <Link to={"/category/1"}>Computer Engineering</Link>
                                        </h2>
                                        <span className="course-qnty">02 Courses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
