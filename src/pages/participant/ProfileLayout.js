import React, { useCallback, useEffect, useState } from "react";
import { Form, json, NavLink, Outlet, useRouteLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faFileImage, faHouseUser, faPen, faTasks } from "@fortawesome/free-solid-svg-icons";

import "./Profile.css";

const ProfileLayout = (props) => {
    const token = useRouteLoaderData("root");

    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUserData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://it.net.tm/yarys/api/me/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 422 || response.status === 401) {
                return response;
            }
            if (!response.ok) {
                throw json({ message: "Could fetch user data." }, { status: 500 });
            }
            const userFetchedData = await response.json();
            setUserData(userFetchedData);
        } catch (error) {
            console.log(error.message);
        }
        setIsLoading(false);
    }, [token]);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    useEffect(() => {
        if (!token) {
            return;
        }
    }, [token]);

    console.log(userData);

    let profileImage = <img src={"https://it.net.tm"} alt="Profile" />;

    if (isLoading) {
        profileImage = <p>Loading...</p>;
        console.log("loading");
    } else {
        profileImage = <img src={`https://it.net.tm/ ${userData.image}`} alt="Profile" />;
        console.log("loaded");
    }

    return (
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
                        <div className="col-lg-3 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
                            <div className="topper">
                                <div className="address-item image-wrapper">
                                    <div className="profile-img">
                                        <label className="mx-auto" htmlFor="profile_image">
                                            <FontAwesomeIcon icon={faFileImage} className="me-2" /> Surat ýükle
                                        </label>
                                        {profileImage}
                                        <input type="file" id="profile_image" accept="image/*" />
                                    </div>

                                    <div className="address-text">
                                        <span className="label">.</span>
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
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
