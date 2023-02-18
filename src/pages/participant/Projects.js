import React from "react";
import { NavLink } from "react-router-dom";

import "./Projects.css";

const Projects = () => {
    return (
        <div className="col-lg-9 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
            <div className="topper">
                <div className="address-item">
                    <div className="address-text">
                        <h2 className="title">Taslamalarym</h2>
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr className="active">
                                        {/* <th scope="col">
                                            <label className="control control--checkbox">
                                                <input type="checkbox" className="js-check-all" />
                                                <div className="control__indicator"></div>
                                            </label>
                                        </th> */}
                                        <th scope="col">T/b</th>
                                        <th scope="col">Ylmy işiň ady</th>
                                        <th scope="col">Ylmy işiň ugry</th>
                                        <th scope="col">Ylmy ýolbaşçysynyň familiýasy</th>
                                        <th scope="col">Ylmy ýolbaşçysynyň ady</th>
                                        <th scope="col">Ylmy ýolbaşçysynyň atasynyň ady</th>
                                        <th scope="col">Amallar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr scope="row" className="">
                                        {/* <td>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" />
                                                <div className="control__indicator"></div>
                                            </label>
                                        </td> */}
                                        <td>1</td>
                                        <td>Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady</td>
                                        <td>Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry</td>
                                        <td>Amanow</td>
                                        <td>Aman</td>
                                        <td>Amanowiç</td>
                                        <td>
                                            {/* <NavLink to={`/events/${event.id}`}>Giňişleýin</NavLink> */}
                                            <a href="">Giňişleýin</a>
                                        </td>
                                    </tr>
                                    <tr scope="row" className="">
                                        {/* <td>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" />
                                                <div className="control__indicator"></div>
                                            </label>
                                        </td> */}
                                        <td>2</td>
                                        <td>Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady</td>
                                        <td>Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry</td>
                                        <td>Amanow</td>
                                        <td>Aman</td>
                                        <td>Amanowiç</td>
                                        <td>
                                            {/* <NavLink to={`/events/${event.id}`}>Giňişleýin</NavLink> */}
                                            <a href="">Giňişleýin</a>
                                        </td>
                                    </tr>
                                    <tr scope="row" className="">
                                        {/* <td>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" />
                                                <div className="control__indicator"></div>
                                            </label>
                                        </td> */}
                                        <td>3</td>
                                        <td>Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady Ylmy işiň ady</td>
                                        <td>Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry Ylmy işiň ugry</td>
                                        <td>Amanow</td>
                                        <td>Aman</td>
                                        <td>Amanowiç</td>
                                        <td>
                                            {/* <NavLink to={`/events/${event.id}`}>Giňişleýin</NavLink> */}
                                            <a href="">Giňişleýin</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
