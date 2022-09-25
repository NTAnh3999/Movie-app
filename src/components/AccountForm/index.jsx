import React, { useState } from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import { Link } from "react-router-dom";
const AccountForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    return (
        <section className="form-container">
            <Link className="btn--link" to="/">
                Back to home page
            </Link>
            <div className="form">
                <div className="btn-group">
                    <button
                        className={`btn btn--underline ${
                            isLoginForm ? "active" : ""
                        }`}
                        onClick={() => setIsLoginForm(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`btn btn--underline ${
                            isLoginForm ? "" : "active"
                        }`}
                        onClick={() => setIsLoginForm(false)}
                    >
                        Sign Up
                    </button>
                </div>
                {isLoginForm ? <LoginForm /> : <SignupForm />}
            </div>
        </section>
    );
};

export default AccountForm;
