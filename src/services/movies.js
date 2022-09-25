import { API_URL, FEATURE_POPULAR, FEATURE_TOP_RATED } from "../config";

export const getPopularMovies = async function () {
    try {
        const res = await fetch(
            `${API_URL}/movie/${FEATURE_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}`
        );
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
export const getTopRatedMovies = async function () {
    try {
        const res = await fetch(
            `${API_URL}/movie/${FEATURE_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
export const getSearchResults = async function (query) {
    try {
        const res = await fetch(
            `${API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
export const getTrendingMovies = async function () {
    try {
        const res = await fetch(
            `${API_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
