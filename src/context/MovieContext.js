import { createContext, useState } from "react";
import {
  getSearchResults,
  getListMovies,
  getSimilar,
  getDataById,
} from "../services/movies";
import { useEffect } from "react";
import { CATEGORY, MOVIE_TYPE } from "../common";
export const MovieContext = createContext({
  movies: {},
  setMovies: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  search: {
    results: [],
    query: "",
    totalPages: 0,
    totalResults: 0,
  },
  setSearch: () => {},
  setMovieData: async () => {},
  setSearchData: async () => {},
  setMovieDetail: async () => {},
});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState({
    results: [],
    query: "",
    totalPages: 0,
    totalResults: 0,
  });
  useEffect(() => {
    Promise.all([
      getListMovies(MOVIE_TYPE.popular),
      getListMovies(MOVIE_TYPE.top_rated),
      getListMovies(MOVIE_TYPE.now_playing),
    ]).then((data) =>
      setMovies({
        popular: data[0].results,
        top_rated: data[1].results,
        now_playing: data[2].results,
      })
    );
  }, []);
  const getSimilarMovies = async (categoryName, id) => {
    const res = await getSimilar(categoryName, id);
    setMovies((prevState) => ({ ...prevState, similar: res.results }));
  };
  const getMovieDetail = async (categoryName, id) => {
    const res = await getDataById(categoryName, id);
    setMovies((prevState) => ({ ...prevState, detail: res }));
  };
  const setSearchData = async function (query) {
    const {
      results,
      total_pages: totalPages,
      total_results: totalResults,
    } = await getSearchResults(CATEGORY.movie, { query, page: currentPage });
    setSearch((prevState) => ({
      ...prevState,
      totalPages,
      totalResults,
      results,
    }));
  };
  const value = {
    movies,
    setSearchData,
    search,
    setSearch,
    setMovies,
    setCurrentPage,
    getSimilarMovies,
    getMovieDetail,
    currentPage,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
