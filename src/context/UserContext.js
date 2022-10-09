import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    message: {
        general: "",
        usernameInput: "",
        passwordInput: "",
        confirmPassInput: "",
    },
    setMessage: () => {},
});

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [message, setMessage] = useState({
        general: "",
        usernameInput: "",
        passwordInput: "",
        confirmPassInput: "",
    });
    const value = { currentUser, setCurrentUser, message, setMessage };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
