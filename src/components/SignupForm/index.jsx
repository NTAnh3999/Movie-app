import React, { useState } from "react";
import {
    createAuthUserFromEmailAndPassword,
    createUserDocumentFromAuth,
    SignOutUser,
} from "../../firebase";
import FormInput from "../FormInput";
import { generateRandomNumber } from "../../helpers";
const SignupForm = () => {
    const defaultFormFields = {
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, confirmPassword } = formFields;
    const handleInput = function (e) {
        const { id, value } = e.target;
        setFormFields((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    const handleSubmitForm = async function (e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password does not match");
        }
        try {
            const { user } = await createAuthUserFromEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, {
                displayName: `Anonymous ${generateRandomNumber()}`,
            });

            //reset form fields
            setFormFields(defaultFormFields);
            alert("Sign Up success!");
            await SignOutUser();
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                alert("Email already exists");
            }
        }
    };
    return (
        <form className="form-signup" onSubmit={handleSubmitForm}>
            <div className="form__title">
                <h2 className="heading-2">Sign Up</h2>
            </div>
            <FormInput
                inputName="email"
                typeName="email"
                value={email}
                onChange={handleInput}
            />
            <FormInput
                inputName="password"
                typeName="password"
                value={password}
                onChange={handleInput}
            />
            <FormInput
                inputName="confirmPassword"
                typeName="password"
                value={confirmPassword}
                onChange={handleInput}
            />

            <button type="submit" className="btn btn-full-width">
                Sign up
            </button>
        </form>
    );
};

export default SignupForm;
