import React from "react";
import {
    Form,
    Link,
    useActionData,
    useNavigation,
    useSearchParams,
} from "react-router-dom";

const AuthForm = () => {
    const data = useActionData();
    const navigation = useNavigation();

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";
    const isSubmitting = navigation.state === "submitting";

    return (
        <>
            <Form method="post">
                <h1>{isLogin ? "Login" : "Register"}</h1>
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
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        required
                    />
                </p>
                <div>
                    <Link to={`?mode=${isLogin ? "register" : "login"}`}>
                        {isLogin ? "Register" : "Login"}
                    </Link>
                    <button disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Save"}
                    </button>
                </div>
            </Form>
        </>
    );
};

export default AuthForm;
