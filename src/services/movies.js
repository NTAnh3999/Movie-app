import { API_URL, CATEGORY, MOVIE_TYPE } from "../common";
export const getListMovies = async function (type, param = {}) {
  try {
    const url = API_URL.concat(CATEGORY.movie)
      .concat(`/${MOVIE_TYPE[type]}?`)
      .concat(
        new URLSearchParams({
          api_key: process.env.REACT_APP_API_KEY,
          ...param,
        })
      );
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
export const getVideos = async function (cate, id) {
  const url = API_URL.concat(CATEGORY[cate])
    .concat(`/${id}/videos?`)
    .concat(new URLSearchParams({ api_key: process.env.REACT_APP_API_KEY }));
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
export const getDataById = async function (category, id) {
  try {
    const url = API_URL.concat(`/${CATEGORY[category]}/${id}?`).concat(
      new URLSearchParams({ api_key: process.env.REACT_APP_API_KEY })
    );
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
export const getCredits = async function (category, id) {
  try {
    const url = API_URL.concat(`/${CATEGORY[category]}/${id}/credits?`).concat(
      new URLSearchParams({ api_key: process.env.REACT_APP_API_KEY })
    );
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
export const getSimilar = async function (categoryName, id) {
  try {
    const url = API_URL.concat(
      `/${CATEGORY[categoryName]}/${id}/similar?`
    ).concat(new URLSearchParams({ api_key: process.env.REACT_APP_API_KEY }));
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
export const getSearchResults = async function (categoryName, params = {}) {
  try {
    const url = API_URL.concat(`/search/${CATEGORY[categoryName]}?`).concat(
      new URLSearchParams({ api_key: process.env.REACT_APP_API_KEY, ...params })
    );
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
