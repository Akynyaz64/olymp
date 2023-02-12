import React from "react";
import { json, redirect } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return <LoginForm />;
}

export default LoginPage;

export async function action({ request }) {
    const data = await request.formData();
    const loginData = {
        email: data.get("email"),
        password: data.get("password"),
    };
    const response = await fetch("http://172.16.11.179:80/api/login/", {
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
        throw json(
            { message: "Could not login user." },
            { status: 500 }
        );
    }

    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem("token", token);

    return redirect("/");
}
