import React from "react";

const FormInput = ({ inputName, typeName, ...otherProps }) => {
    return (
        <div className="form__group">
            <input
                type={typeName}
                id={inputName}
                className="form__input"
                {...otherProps}
            />
            <label
                htmlFor={inputName}
                className={`form__label ${
                    otherProps?.value?.length ? "shrink" : " "
                }`}
            >
                {inputName.replace("P", " p")}
            </label>
        </div>
    );
};

export default FormInput;
