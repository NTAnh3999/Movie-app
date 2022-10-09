import React, { useState, useContext } from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const AccountForm = () => {
    const { setMessage } = useContext(UserContext);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const handleToggleForm = function () {
        setIsLoginForm(!isLoginForm);
        setMessage({
            general: "",
            usernameInput: "",
            passwordInput: "",
            confirmPassInput: "",
        });
    };
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
                        onClick={() => handleToggleForm()}
                    >
                        Login
                    </button>
                    <button
                        className={`btn btn--underline ${
                            isLoginForm ? "" : "active"
                        }`}
                        onClick={() => handleToggleForm()}
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
