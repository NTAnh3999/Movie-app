import React, { useState } from "react";
import FormInput from "../FormInput";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  return (
    <form className="form-forgot-password">
      <FormInput
        inputName="email"
        labelName="Email"
        typeName="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="submit" className="btn btn--submit">
        Submit
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
