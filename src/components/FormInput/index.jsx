import React from "react";

const FormInput = ({ inputName, typeName }) => {
    return (
        <div className="form__group">
            <input type={typeName} id={inputName} className="form__input" />
            <label htmlFor={inputName} className="form__label">
                {inputName.replace("-", " ")}
            </label>
        </div>
    );
};

export default FormInput;
