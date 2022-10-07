export const API_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const CATEGORY_TOP_RATED = "top_rated";
export const CATEGORY_POPULAR = "popular";
export const CATEGORY_TRENDING = "trending";

export const GET_POPULAR_URL = `${API_URL}/movie/${CATEGORY_POPULAR}?api_key=${process.env.REACT_APP_API_KEY}`;
export const GET_TOP_RATED_URL = `${API_URL}/movie/${CATEGORY_TOP_RATED}?api_key=${process.env.REACT_APP_API_KEY}`;
export const GET_TRENDING_URL = `${API_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`;
export const GET_SEARCH_URL = `${API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`;

export const DEFAULT_ITEMS_PER_PAGE = 20;
