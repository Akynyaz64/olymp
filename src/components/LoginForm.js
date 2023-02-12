import React from "react";
import {
    Form,
    Link,
    useActionData,
    useNavigation,
} from "react-router-dom";

const LoginForm = () => {
    const data = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <>
            <Form method="post">
                <h1>Login</h1>
                {data && data.errors && (
                    <ul>
                        {Object.values(data.errors).map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                )}
                {data && data.message && <p>{data.message}</p>}
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="image">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        required
                    />
                </p>
                <div>
                    <Link to="/register">Register</Link>
                    <button disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Save"}
                    </button>
                </div>
            </Form>
        </>
    );
};

export default LoginForm;