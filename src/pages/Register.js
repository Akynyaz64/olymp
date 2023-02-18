import React from "react";
import { json, redirect } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <RegisterForm />
    );
};

export default RegisterPage;

export async function action({request}) {
    const data = await request.formData();
    const loginData = {
        name: data.get("name"),
        surname: data.get("surname"),
        fathername: data.get("fathername"),
        birth_date: data.get("birth_date"),
        phone: data.get("phone"),
        email: data.get("email"),
        country_id: data.get("country_id"),
        status: data.get("status"),
        password: data.get("password"),
    };
    const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({message: "Could not register user."}, {status: 500});
    }

    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem("token", token);

    return redirect("/profile");
}
