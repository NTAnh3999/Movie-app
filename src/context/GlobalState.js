import { createContext, useReducer } from "react";
import appReducer, { initialState } from "./AppReducer";
export const GlobalContext = createContext();
export function GlobalProvider({ children }) {
    const [state, dispath] = useReducer(appReducer, initialState);

    return (
        <GlobalContext.Provider value={[state, dispath]}>
            {children}
        </GlobalContext.Provider>
    );
}
