import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CastList from "./components/CastList";
import VideoList from "./components/VideoList";
import { NORMAL_IMG_URL } from "../../common";
import CardList from "../../components/CardList";
import { MovieContext } from "../../context/MovieContext";
import Layout from "../../components/Layout";

const Detail = () => {
  const { category, id } = useParams();
  const { movies, getMovieDetail, getSimilarMovies } = useContext(MovieContext);
  useEffect(() => {
    const getDetail = async () => {
      await getSimilarMovies(category, id);
      await getMovieDetail(category, id);
    };
    getDetail();
    console.log(movies);
  }, [category, id]);
  return (
    <Layout>
      {movies?.detail && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${NORMAL_IMG_URL.concat(
                movies?.detail.backdrop_path || movies?.detail.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${NORMAL_IMG_URL.concat(
                    movies?.detail.poster_path || movies?.detail.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">
                {movies?.detail.title || movies?.detail.name}
              </h1>

              <div className="genres">
                {movies?.detail.genres &&
                  movies?.detail.genres?.slice(0, 5)?.map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{movies?.detail.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-3">
                <h2>Similar</h2>
              </div>
              <CardList
                items={movies?.similar}
                category={category}
                type="similar"
                id={id}
              />
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Detail;
