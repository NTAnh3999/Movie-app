import { createContext, useEffect, useState } from "react";
import {
  addNewWishlist,
  deleteBookmarkItem,
  getUserRef,
  onAuthStateChangedListener,
  uploadImageToStorage,
} from "../services/firebase";
import { updatePassword, updateProfile } from "firebase/auth";
import { getDownloadURL } from "firebase/storage";

export const UserContext = createContext({
  currentUser: null,
  wishList: [],
  getBookmark: () => {},
  setBookmark: () => {},
  setWishList: () => {},
  setCurrentUser: () => null,
  message: {
    general: "",
    emailInput: "",
    passwordInput: "",
    confirmPasswordInput: "",
  },
  setMessage: () => {},
  deleteBookmark: () => {},
  updateUser: () => {},
  updateImage: () => {},
  updateUserPassword: () => {},
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [wishList, setWishList] = useState([]);
  const [message, setMessage] = useState({
    general: "",
    emailInput: "",
    passwordInput: "",
    confirmPassInput: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      setCurrentUser(user);
      if (user) await getBookmark();
    });
    return unsubscribe;
  }, []);
  async function getBookmark() {
    if (!currentUser) return;
    const userData = await getUserRef(currentUser);
    setWishList(userData.wishList);
  }
  const setBookmark = async (movie) => {
    try {
      const data = await addNewWishlist(currentUser, movie);
      if (data) setWishList((prevState) => [...prevState, data]);
      window.alert(
        "Bạn vừa thêm phim" + movie?.title + " vào danh sách yêu thích!"
      );
    } catch (err) {
      window.alert("Lỗi xảy ra: ", err);
    }
  };
  const deleteBookmark = async (movie) => {
    try {
      const data = await deleteBookmarkItem(currentUser, movie);
      if (data) setWishList(data);
      window.alert("Bạn vừa xóa phim" + movie?.title + " khỏi danh sách");
    } catch (err) {
      window.alert("Lỗi xảy ra: ", err);
    }
  };

  const updateUser = async (data = {}) => {
    if (!currentUser) return;
    console.log(data);
    try {
      await updateProfile(currentUser, data);
      window.alert(
        "Cập nhật thông tin của " + currentUser.email + " thành công"
      );
      setCurrentUser((currentUser) => ({ ...currentUser, ...data }));
    } catch (err) {
      console.error(err.message);
    }
  };
  const updateImage = async (selectedImage) => {
    if (!currentUser) return;
    const uploadTask = await uploadImageToStorage(selectedImage);
    if (uploadTask.state === "success") {
      getDownloadURL(uploadTask.ref).then(async (downloadURL) => {
        updateUser({ photoURL: downloadURL });
      });
    }
  };
  const updateUserPassword = async (newPassword) => {
    if (!currentUser) return;
    let error;
    try {
      await updatePassword(currentUser, newPassword);
      window.alert("Cập nhật mật khẩu thành công!");
    } catch (err) {
      error = err.code;
      return error;
    }
  };
  const value = {
    currentUser,
    setCurrentUser,
    message,
    setMessage,
    getBookmark,
    wishList,
    setWishList,
    setBookmark,
    deleteBookmark,
    updateImage,
    updateUser,
    updateUserPassword,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
