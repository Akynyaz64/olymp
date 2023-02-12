import React from "react";
import { NavLink } from "react-router-dom";

import "./Error.css";

function ErrorPage() {
    return (
        <>
            <div className="main-content">
                <div className="page-error">
                    <div className="error-text">
                        <h1 className="error-code">404</h1>
                        <h3 className="error-message">
                            Gözleýän sahypaňyz tapylmady!
                        </h3>
                        <div className="btn-part p-0">
                            <NavLink to="/" className="rounded-0 fw-bold">
                                Baş sahypa
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
