import React, {useRef} from "react";
import {json, redirect, useRouteLoaderData} from "react-router-dom";

const ProfileInfoForm = () => {
    const token = useRouteLoaderData("root");

    const name = useRef("");
    const surname = useRef("");
    const fathername = useRef("");
    const birth_date = useRef("");
    const country_id = useRef("");
    const job = useRef("");
    const phone = useRef("");
    const email = useRef("");

    async function submitHandler(event) {
        event.preventDefault();

        const formData = {
            name: name.current.value || null,
            surname: surname.current.value || null,
            fathername: fathername.current.value || null,
            birth_date: birth_date.current.value || null,
            country_id: country_id.current.value || null,
            job: job.current.value || null,
            phone: phone.current.value || null,
            email: email.current.value || null,
        };

        console.log(formData);

        const response = await fetch("http://172.16.11.179:80/api/me/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.status === 422 || response.status === 401) {
            return response;
        }

        if (!response.ok) {
            throw json({message: "Could not login user."}, {status: 500});
        }

        const resData = await response.json();
        const token = resData.token;

        return redirect("/profile");
    }

    return (
        <div className="col-lg-9 col-md-12 lg-pl-0 sm-mb-30 md-mb-30">
            <div className="topper">
                <div className="address-item">
                    <div className="address-text">
                        <h2 className="title">Şahsy maglumatlar</h2>
                        <div className="profile-about">
                            <div className="container">
                                <div className="full-grid">
                                    <div className="billing-fields">
                                        <div className="form-content-box">
                                            <form onSubmit={submitHandler}>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label>Familiýasy</label>
                                                            <input id="name" name="name" ref={name} className="form-control-mod margin-bottom" type="text" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label>Ady</label>
                                                            <input id="surname" name="surname" ref={surname} className="form-control-mod margin-bottom" type="text" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label>Atasynyň ady</label>
                                                            <input id="fathername" name="fathername" ref={fathername} className="form-control-mod margin-bottom" type="text" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label>Doglan ýyly</label>
                                                            <input id="birth_date" name="birth_date" ref={birth_date} className="form-control-mod margin-bottom" type="text" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label>Ýurdy</label>
                                                            <select name="country_id" ref={country_id} className="d-block form-control-mod margin-bottom" required="">
                                                                <option value="">Select a country</option>
                                                                <option value="1">Afghanistan</option>
                                                                <option value="2">Albania</option>
                                                                <option value="3">Algeria</option>
                                                                <option value="4">American Samoa</option>
                                                                <option value="5">Andorra</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-6 col-sm-12 col-xs-12">
                                                                            <div className="form-group">
                                                                                <label>Şäheri</label>
                                                                                <select name="city_id" className="d-block form-control-mod margin-bottom" required="">
                                                                                    <option value="">Select a country</option>
                                                                                    <option value="1">Afghanistan</option>
                                                                                    <option value="2">Albania</option>
                                                                                    <option value="3">Algeria</option>
                                                                                    <option value="4">American Samoa</option>
                                                                                    <option value="5">Andorra</option>
                                                                                </select>
                                                                            </div>
                                                                        </div> */}
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label>Wezipesi</label>
                                                            <input id="fname" name="fname" ref={job} className="form-control-mod margin-bottom" type="text" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label>Telefon belgisi</label>
                                                            <input id="phone" name="phone" ref={phone} className="form-control-mod margin-bottom" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input id="email" name="email" ref={email} className="form-control-mod" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="btn-submit h-0">
                                                            <button type="submit">Üýtget</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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

export default ProfileInfoForm;
