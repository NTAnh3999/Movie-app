import React, { useState, useContext } from "react";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
  SignOutUser,
} from "../../../../services/firebase";
import FormInput from "../../../../components/FormInput";
import { generateRandomNumber } from "../../../../common";
import { UserContext } from "../../../../context/UserContext";
import FormMessage from "../../../../components/FormMessage";
const SignupForm = () => {
  const { message, setMessage } = useContext(UserContext);
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
    if (!email || !password || !confirmPassword) {
      const errorMessage = "Field is required";
      !email &&
        setMessage((prevState) => ({
          ...prevState,
          usernameInput: errorMessage,
        }));

      !password &&
        setMessage((prevState) => ({
          ...prevState,
          passwordInput: errorMessage,
        }));
      !confirmPassword &&
        setMessage((prevState) => ({
          ...prevState,
          confirmPassInput: errorMessage,
        }));
    } else if (password !== confirmPassword) {
      setMessage({
        confirmPassInput: "Password does not match",
      });
    } else {
      try {
        const { user } = await createAuthUserFromEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, {
          displayName: `Anonymous ${generateRandomNumber()}`,
          photoURL: "",
          wishList: [],
        });

        //reset form fields
        setFormFields(defaultFormFields);
        alert("Sign Up success!");
        await SignOutUser();
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setMessage({
            usernameInput: "Email already in use",
          });
        }
        if (err.code === "auth/weak-password") {
          setMessage({
            passwordInput: "Password should be at least 6 characters",
          });
        } else {
          console.error(err);
        }
      }
    }
  };
  return (
    <form className="form-signup" onSubmit={handleSubmitForm}>
      <FormInput
        inputName="email"
        labelName="Email"
        typeName="text"
        value={email}
        onChange={handleInput}
      />
      {message.usernameInput && (
        <FormMessage type="error" message={message.usernameInput} />
      )}
      <FormInput
        inputName="password"
        labelName="Password"
        typeName="password"
        value={password}
        onChange={handleInput}
      />
      {message.passwordInput && (
        <FormMessage type="error" message={message.passwordInput} />
      )}
      <FormInput
        inputName="confirmPassword"
        labelName="Confirm Password"
        typeName="password"
        value={confirmPassword}
        onChange={handleInput}
      />
      {message.confirmPassInput && (
        <FormMessage type="error" message={message.confirmPassInput} />
      )}
      <div className="btn-wrapper">
        <button type="submit" className="btn btn--submit">
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
