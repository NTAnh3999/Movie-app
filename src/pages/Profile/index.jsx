import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import FormInput from "../../components/FormInput";
import { AVATAR_DEFAULT_URL } from "../../common";
import {
  SignOutUser,
  onAuthStateChangedListener,
} from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {
    currentUser,
    updateImage,
    setCurrentUser,
    updateUser,
    updateUserPassword,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [formField, setFormField] = useState({
    displayName: "",
    newPassword: "",
  });
  const inputFileRef = useRef(null);
  const handleFile = () => {
    inputFileRef.current.click();
  };
  const handleChangeAvatar = async (e) => {
    await updateImage(e.target.files[0]);
  };
  const handleSubmitChangePassword = async (e) => {
    e.preventDefault();
    const hasError = await updateUserPassword(formField.newPassword);
    if (hasError === "auth/requires-recent-login") {
      window.alert("Requires recent login");
      SignOutUser();
      navigate("/account");
    }
  };
  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    await updateUser({ displayName: formField.displayName });
  };
  const handleChangeForm = (e) => {
    setFormField((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <Layout>
      <section className="profile__section">
        <h3 className="profile__title">{currentUser?.displayName} Profile</h3>
        <div className="profile__content">
          <div className="profile__avatar">
            <img
              src={currentUser?.photoURL ?? AVATAR_DEFAULT_URL}
              alt="Avatar"
            />
            <input
              type="file"
              id="uploadFile"
              ref={inputFileRef}
              style={{ display: "none" }}
              onChange={handleChangeAvatar}
            />
            <Button className="btn--primary" onClick={handleFile}>
              Change Avatar
            </Button>
          </div>
          <form className="profile__form" onSubmit={handleSubmitInfo}>
            <h4>1. Profile Detail</h4>
            <FormInput
              type="email"
              labelName="Email"
              readOnly
              disabled
              value={currentUser?.email}
            />
            <FormInput
              type="text"
              labelName="Display Name"
              name="displayName"
              value={currentUser?.displayName ?? formField.displayName}
              onChange={handleChangeForm}
            />
            <Button className="btn--primary">Update Info</Button>
          </form>
          <form className="profile__form" onSubmit={handleSubmitChangePassword}>
            <h4>2. Change Password</h4>

            <FormInput
              type="password"
              labelName="New Password"
              name="newPassword"
              value={formField.newPassword}
              onChange={handleChangeForm}
            />
            <Button className="btn--primary">Change Password</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
