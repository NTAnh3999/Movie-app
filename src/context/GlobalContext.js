import { createContext, useReducer } from "react";
import appReducer, { initialState } from "./AppReducer";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispath] = useReducer(appReducer, initialState);

    return (
        <GlobalContext.Provider
            value={{
                state,
                dispath,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
