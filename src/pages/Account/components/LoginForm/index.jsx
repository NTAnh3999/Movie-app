import React, { useState, useContext } from "react";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../../../../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import {
  loginWithGooglePopup,
  loginAuthUserWithEmailAndPassword,
} from "../../../../services/firebase";
import FormMessage from "../../../../components/FormMessage";
import { UserContext } from "../../../../context/UserContext";
import Button from "../../../../components/Button";

const LoginForm = () => {
  const { message, setMessage } = useContext(UserContext);
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
  async function handleLoginWithGoogle() {
    try {
      await loginWithGooglePopup();
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      setMessage({ ...message, general: errorMessage });
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
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
    } else {
      try {
        await loginAuthUserWithEmailAndPassword(email, password);
        setFormFields({ email: "", password: "" });
        navigate("/");
      } catch (err) {
        if (err.code === "auth/wrong-password") {
          setMessage({
            passwordInput: "Wrong password",
          });
        }
        if (err.code === "auth/user-not-found") {
          setMessage({
            usernameInput: "User not found",
          });
        }
      }
    }
  }
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <FormInput
        inputName="email"
        labelName="Email or Username"
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
      <div>
        <Link to="/forgot-password" className="btn--link">
          Forgot password?
        </Link>
      </div>
      <div className="btn-wrapper">
        <Button className="btn--submit">login</Button>
      </div>
      {message.general && (
        <FormMessage type="error" message={message.general} />
      )}
      <div className="divide-login">OR</div>
      <div className="btn-group">
        <Button className="btn--google" onClick={handleLoginWithGoogle}>
          <FontAwesomeIcon icon={faGoogle} />
          Google
        </Button>
        <Button className="btn--facebook">
          <FontAwesomeIcon icon={faFacebook} />
          Facebook
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
