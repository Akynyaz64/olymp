import React from "react";
import {
    Form,
    Link,
    NavLink,
    useActionData,
    useNavigation,
} from "react-router-dom";

import "./LoginForm.css";

const LoginForm = () => {
    const data = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <>
            <div className="main-content">
                <div className="login">
                    <div className="container">
                        <div className="noticed">
                            <div className="main-part">
                                <div className="method-account">
                                    <Form method="post">
                                        <h2 className="login-text">Ulgama gir</h2>
                                        {data && data.errors && (
                                            <ul>
                                                {Object.values(data.errors).map(
                                                    (err) => (
                                                        <li key={err}>{err}</li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                        {data && data.message && (
                                            <p>{data.message}</p>
                                        )}
                                        <div>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="E-mail"
                                                required
                                            />
                                            <input
                                                id="password"
                                                type="password"
                                                name="password"
                                                placeholder="Açar söziňiz"
                                                required
                                            />
                                            <div>
                                                <button
                                                    className="readon submit-btn"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting
                                                        ? "Tassyklanýar..."
                                                        : "Tassykla"}
                                                </button>
                                            </div>
                                            <div className="last-password">
                                                <p>
                                                    Hasabyňyz ýokmy?
                                                    <Link to="/register">
                                                        Hasap döret
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
