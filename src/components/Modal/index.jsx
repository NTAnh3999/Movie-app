import React from "react";
import Moment from "react-moment";
import { IMAGE_URL } from "../../config";
const Modal = ({ toggleModal, movie }) => {
    const {
        genres,
        runtime,
        overview,
        title,
        poster_path: poster,
        vote_average: voteAverage,
        release_date: releaseDate,
        production_countries: productionCountries,
    } = movie;
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__left">
                    <img
                        src={`${IMAGE_URL}${poster}`}
                        alt="Poster path"
                        className="modal__poster"
                    />
                </div>
                <div className="modal__right">
                    <button
                        className="modal__close"
                        onClick={() => toggleModal()}
                    >
                        &times;
                    </button>
                    <h1 className="modal__heading">{title}</h1>
                    <div className="modal__movie-info">
                        <span className="movie-info__details">
                            <span className="movie-info__details--title">
                                Genres:
                            </span>
                            <span className="movie-info__details--desc">
                                {genres
                                    .map((genre) => {
                                        return genre.name;
                                    })
                                    .join(", ")}
                            </span>
                        </span>
                        <span className="movie-info__details">
                            <span className="movie-info__details--title">
                                Release date:
                            </span>
                            <span className="movie-info__details--desc">
                                {<Moment format="YYYY">{releaseDate}</Moment>}
                            </span>
                        </span>
                        <span className="movie-info__details">
                            <span className="movie-info__details--title">
                                Runtime:
                            </span>
                            <span className="movie-info__details--desc">
                                {runtime} minutes
                            </span>
                        </span>
                        <span className="movie-info__details">
                            <span className="movie-info__details--title">
                                Production country:
                            </span>
                            <span className="movie-info__details--desc">
                                {productionCountries
                                    .map((productionCountry) => {
                                        return productionCountry.name;
                                    })
                                    .join(", ")}
                            </span>
                        </span>
                        <span className="movie-info__details">
                            <span className="movie-info__details--title">
                                Vote average:
                            </span>
                            <span className="movie-info__details--vote-average">
                                {voteAverage}
                            </span>
                        </span>
                    </div>
                    <div className="modal__overview">
                        <b className="modal__overview--title">Movie content</b>
                        <p className="modal__overview--paragraph">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
