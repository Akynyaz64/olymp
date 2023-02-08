import React, { useState } from "react";

const ContactForm = () => {
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userSubject, setUserSubject] = useState("");
    const [userText, setUserText] = useState("");

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    };

    const userMailChangeHandler = (event) => {
        setUserMail(event.target.value);
    };
    const userPhoneChangeHandler = (event) => {
        setUserPhone(event.target.value);
    };
    const userSubjectChangeHandler = (event) => {
        setUserSubject(event.target.value);
    };
    const userTextChangeHandler = (event) => {
        setUserText(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        console.log(userName, userMail, userPhone, userSubject, userText);
        setUserName("");
        setUserMail("");
        setUserPhone("");
        setUserSubject("");
        setUserText("");
    };

    return (
        <form id="contact-form" onSubmit={formSubmitHandler}>
            <fieldset>
                <div className="row">
                    <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                        <input
                            className="from-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ady"
                            value={userName}
                            onChange={userNameChangeHandler}
                        />
                    </div>
                    <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                        <input
                            className="from-control"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Elektron poçta"
                            value={userMail}
                            onChange={userMailChangeHandler}
                        />
                    </div>
                    <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                        <input
                            className="from-control"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Telefon belgi"
                            value={userPhone}
                            onChange={userPhoneChangeHandler}
                        />
                    </div>
                    <div className="col-lg-6 mb-35 col-md-6 col-sm-6">
                        <input
                            className="from-control"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Tema"
                            value={userSubject}
                            onChange={userSubjectChangeHandler}
                        />
                    </div>

                    <div className="col-lg-12 mb-50">
                        <textarea
                            className="from-control"
                            id="message"
                            name="message"
                            placeholder="Hatyňyz"
                            onChange={userTextChangeHandler}
                            value={userText}
                        ></textarea>
                    </div>
                </div>
                <div className="form-group mb-0">
                    <input className="btn-send" type="submit" value="Ugrat" />
                </div>
            </fieldset>
        </form>
    );
};

export default ContactForm;
