import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                console.log(user);
                console.log("User signed in");
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
