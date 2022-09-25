import { createContext, useState } from "react";
import {
    getPopularMovies,
    getTopRatedMovies,
    getTrendingMovies,
    getSearchResults,
    getMovieById,
} from "../services/movies";
export const MovieContext = createContext({
    movies: {},
    setMovies: () => {},
    searchQuery: "",
    setSearchQuery: () => {},
    getData: async () => {},
    getSearchData: async () => {},
});

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    const getData = async (typeId) => {
        if (typeof typeId === "string") {
            if (typeId === "popular") {
                const { results } = await getPopularMovies();
                setMovies((prevState) => ({
                    ...prevState,
                    popular: results,
                }));
            } else if (typeId === "top_rated") {
                const { results } = await getTopRatedMovies();
                setMovies((prevState) => ({
                    ...prevState,
                    top_rated: results,
                }));
            } else if (typeId === "trending") {
                const { results } = await getTrendingMovies();
                setMovies((prevState) => ({
                    ...prevState,
                    trending: results,
                }));
            }
        }
        if (typeof typeId === "number") {
            const data = await getMovieById(typeId);
            setMovies((prevState) => ({
                ...prevState,
                movie: data,
            }));
        }
    };
    const getSearchData = async function (query) {
        const { results, page, total_results, total_pages } =
            await getSearchResults(query);
        console.log(page, total_results, total_pages);
        setMovies((prevState) => ({
            ...prevState,
            searchResults: results,
        }));
    };

    const value = {
        movies,
        getSearchData,
        searchQuery,
        setSearchQuery,
        setMovies,
        getData,
    };
    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
};
