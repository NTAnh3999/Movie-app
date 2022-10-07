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
    currentPage: 1,
    setCurrentPage: () => {},
    pageCount: 0,
    setPageCount: () => {},
    searchQuery: "",
    setSearchQuery: () => {},
    getMovieData: async () => {},
    getSearchData: async () => {},
});

const getDataByType = {
    popular: getPopularMovies,
    top_rated: getTopRatedMovies,
    trending: getTrendingMovies,
};

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const getMovieData = async (type) => {
        const getData = getDataByType[type];
        const { results, total_pages: totalPages } = await getData(currentPage);
        setPageCount(totalPages);
        setMovies((prevState) => ({
            ...prevState,
            [type]: results,
        }));
    };
    const getDataById = async (id) => {
        const data = await getMovieById(id);
        setMovies((prevState) => ({
            ...prevState,
            movie: data,
        }));
    };
    const getSearchData = async function (query) {
        const {
            results,
            total_pages: totalPages,
            total_results: totalResults,
        } = await getSearchResults(query, currentPage);
        setPageCount(totalPages);
        setMovies((prevState) => ({
            ...prevState,
            totalResults: totalResults,
            searchResults: results,
        }));
    };

    const value = {
        movies,
        getSearchData,
        searchQuery,
        setSearchQuery,
        setMovies,
        getMovieData,
        pageCount,
        setCurrentPage,
        currentPage,
        getDataById,
    };
    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
};
