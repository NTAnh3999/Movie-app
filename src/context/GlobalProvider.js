import { createContext, useEffect, useReducer } from "react";
import appReducer, { initialState } from "./AppReducer";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispath] = useReducer(appReducer, initialState);

    useEffect(() => {
        const { filter } = state;
        async function getMovies() {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${filter}?api_key=${process.env.REACT_APP_API_KEY}`
            );
            const data = await response.json();

            return data.results;
        }
        getMovies().then((data) => {
            if (filter === "popular") {
                getPopularMovies(data);
            }
            if (filter === "top_rated") {
                getTopRatedMovies(data);
            }
        });
    }, [state.filter]);

    function getPopularMovies(data = [...state.movieLists]) {
        dispath({ type: "GET_POPULAR", payload: data });
    }
    function getTopRatedMovies(data = [...state.movieLists]) {
        dispath({ type: "GET_TOP_RATED", payload: data });
    }

    return (
        <GlobalContext.Provider
            value={{
                state,
                getPopularMovies,
                getTopRatedMovies,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
