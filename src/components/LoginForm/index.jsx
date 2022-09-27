import React, { useState } from "react";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../FormInput";
import { Link, useNavigate } from "react-router-dom";
import {
    loginWithGooglePopup,
    loginAuthUserWithEmailAndPassword,
} from "../../firebase";
const LoginForm = () => {
    const [formFields, setFormFields] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formFields;
    const navigate = useNavigate();
    const handleInput = (e) => {
        const { id, value } = e.target;
        setFormFields((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    async function handleLoginWithGoogle(e) {
        e.preventDefault();
        try {
            await loginWithGooglePopup();
            navigate("/");
        } catch (error) {
            const errorMessage = error.message;
            console.error(errorMessage);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await loginAuthUserWithEmailAndPassword(email, password);
            setFormFields({ email: "", password: "" });
            navigate("/");
        } catch (err) {
            if (err.code === "auth/wrong-password") {
                alert("Wrong password");
            }
            if (err.code === "auth/user-not-found") {
                alert("User not found");
            }
        }
    }
    return (
        <form className="form-login" onSubmit={handleSubmit}>
            <div className="form__title">
                <h2 className="heading-2">Login</h2>
            </div>
            <FormInput
                inputName="email"
                typeName="text"
                value={email}
                onChange={handleInput}
            />
            <FormInput
                inputName="password"
                typeName="password"
                value={password}
                onChange={handleInput}
            />

            <Link to="/" className="btn--link">
                Forgot password?
            </Link>
            <button className="btn btn-full-width">login</button>
            <div className="divide-login">OR</div>
            <div className="btn-group">
                <button
                    className="btn btn-google"
                    onClick={handleLoginWithGoogle}
                >
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
