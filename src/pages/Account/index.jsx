import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
const Account = () => {
  const { setMessage } = useContext(UserContext);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const handleToggleForm = function () {
    setIsLoginForm(!isLoginForm);
    setMessage({
      general: "",
      usernameInput: "",
      passwordInput: "",
      confirmPassInput: "",
    });
  };
  return (
    <section className="form-container">
      <Link className="btn--link" to="/">
        Back to home page
      </Link>
      <div className="form">
        <div className="btn-group">
          <Button
            className={`btn--underline ${isLoginForm ? "active" : ""}`}
            onClick={() => handleToggleForm()}
          >
            Login
          </Button>
          <Button
            className={`btn--underline ${isLoginForm ? "" : "active"}`}
            onClick={() => handleToggleForm()}
          >
            Sign Up
          </Button>
        </div>
        {isLoginForm ? <LoginForm /> : <SignupForm />}
      </div>
    </section>
  );
};

export default Account;
