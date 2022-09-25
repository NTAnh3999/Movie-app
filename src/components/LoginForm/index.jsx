import React from "react";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../FormInput";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <form className="form-login">
            <div className="form__title">
                <h2 className="heading-2">Login</h2>
            </div>
            <FormInput inputName="username" typeName="text" />
            <FormInput inputName="password" typeName="password" />

            <Link to="/" className="btn--link">
                Forgot password?
            </Link>
            <button className="btn btn-full-width">login</button>
            <div className="divide-login">OR</div>
            <div className="btn-group">
                <button className="btn btn-google">
                    <FontAwesomeIcon icon={faGoogle} /> Google
                </button>
                <button className="btn btn-facebook">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
