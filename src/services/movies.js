import {
    API_URL,
    GET_POPULAR_URL,
    GET_TOP_RATED_URL,
    GET_TRENDING_URL,
    GET_SEARCH_URL,
} from "../config";

export const getPopularMovies = async function (page = 1) {
    try {
        const res = await fetch(`${GET_POPULAR_URL}&page=${page}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export const getMovieById = async function (id) {
    try {
        const res = await fetch(
            `${API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
export const getTopRatedMovies = async function (page = 1) {
    try {
        const res = await fetch(`${GET_TOP_RATED_URL}&page=${page}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
export const getSearchResults = async function (query, page = 1) {
    try {
        const res = await fetch(
            `${GET_SEARCH_URL}&query=${query}&page=${page}`
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
export const getTrendingMovies = async function (page = 1) {
    try {
        const res = await fetch(`${GET_TRENDING_URL}&page=${page}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
