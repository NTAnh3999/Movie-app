import React from "react";
import FormInput from "../FormInput";
const SignupForm = () => {
    return (
        <form className="form-signup">
            <div className="form__title">
                <h2 className="heading-2">Sign Up</h2>
            </div>
            <FormInput inputName="email" typeName="email" />
            <FormInput inputName="password" typeName="password" />
            <FormInput inputName="confirm-password" typeName="password" />

            <button className="btn btn-full-width">Sign up</button>
        </form>
    );
};

export default SignupForm;
