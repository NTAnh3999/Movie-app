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
  searchResult: {
    query: "",
    totalPages: 0,
    totalResults: 0,
  },
  setSearchResult: () => {},
  setMovieData: async () => {},
  setSearchData: async () => {},
  setMovieDetail: async () => {},
});

const getDataByCategory = {
  popular: getPopularMovies,
  top_rated: getTopRatedMovies,
  trending: getTrendingMovies,
};

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResult, setSearchResult] = useState({
    query: "",
    totalPages: 0,
    totalResults: 0,
  });

  const setMovieData = async (type) => {
    const getData = getDataByCategory[type];
    const { results, total_pages: totalPages } = await getData(currentPage);
    setSearchResult((prevState) => ({ ...prevState, totalPages }));
    setMovies((prevState) => ({ ...prevState, [type]: results }));
  };
  const setMovieDetail = async (id) => {
    const data = await getMovieById(id);
    setMovies((prevState) => ({ ...prevState, movie: data }));
  };
  const setSearchData = async function (query) {
    const {
      results,
      total_pages: totalPages,
      total_results: totalResults,
    } = await getSearchResults(query, currentPage);
    setSearchResult((prevState) => ({
      ...prevState,
      totalPages,
      totalResults,
    }));
    setMovies((prevState) => ({ ...prevState, searchResults: results }));
  };

  const value = {
    movies,
    setSearchData,
    searchResult,
    setSearchResult,
    setMovies,
    setMovieData,
    setCurrentPage,
    currentPage,
    setMovieDetail,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
