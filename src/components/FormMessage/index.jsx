import React from "react";

const FormMessage = ({ type, message }) => {
    return <span className={type}>{message}</span>;
};

export default FormMessage;
