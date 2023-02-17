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
                        <div class="table-responsive">
                            <table class="table table-striped custom-table">
                                <thead>
                                    <tr class="active">
                                        {/* <th scope="col">
                                            <label class="control control--checkbox">
                                                <input type="checkbox" class="js-check-all" />
                                                <div class="control__indicator"></div>
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
                                    <tr scope="row" class="">
                                        {/* <td>
                                            <label class="control control--checkbox">
                                                <input type="checkbox" />
                                                <div class="control__indicator"></div>
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
                                    <tr scope="row" class="">
                                        {/* <td>
                                            <label class="control control--checkbox">
                                                <input type="checkbox" />
                                                <div class="control__indicator"></div>
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
                                    <tr scope="row" class="">
                                        {/* <td>
                                            <label class="control control--checkbox">
                                                <input type="checkbox" />
                                                <div class="control__indicator"></div>
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
