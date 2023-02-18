import React from "react";
import {Form, Link, useActionData, useNavigation} from "react-router-dom";

const RegisterForm = () => {
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
                                <div className="method-account text-center">
                                    <Form method="post">
                                        <h2 className="login-text">Hasap döret</h2>
                                        {data && data.errors && (
                                            <ul>
                                                {Object.values(data.errors).map((err) => (
                                                    <li key={err}>{err}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {data && data.message && <p>{data.message}</p>}
                                        <div>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <input type="text" id="name" name="name" placeholder="Ady" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <input type="text" id="surname" name="surname" placeholder="Familiýasy" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <input type="text" id="fathername" name="fathername" placeholder="Atasynyň ady" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <input type="date" id="birth_date" name="birth_date" placeholder="Doglan güni" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <input type="text" id="phone" name="phone" placeholder="Telefon belgiňiz" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <input type="email" id="email" name="email" placeholder="Elektron poçta" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <select name="country_id" id="country_id">
                                                            <option value="" disabled>
                                                                Ýurdy saýlaň
                                                            </option>
                                                            <option value="1">Ýurt 1</option>
                                                            <option value="2">Ýurt 2</option>
                                                            <option value="3">Ýurt 3</option>
                                                            <option value="4">Ýurt 4</option>
                                                            <option value="5">Ýurt 5</option>
                                                            <option value="6">Ýurt 6</option>
                                                            <option value="7">Ýurt 7</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <input type="text" id="status" name="status" placeholder="Wezipesi" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <input type="password" id="password" name="password" placeholder="Açar sözi" required />
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="readon submit-btn" disabled={isSubmitting}>
                                                        {isSubmitting ? "Tassyklanýar..." : "Tassykla"}
                                                    </button>
                                                </div>
                                                <div className="last-password">
                                                    <p>
                                                        Hasabyňyz barmy? <Link to="/login">Ulgama gir</Link>
                                                    </p>
                                                </div>
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

export default RegisterForm;
