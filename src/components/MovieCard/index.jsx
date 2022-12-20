import { useContext, useState } from "react";
import Moment from "react-moment";
import { IMAGE_URL } from "../../config";
import notFoundImg from "../../assets/image-not-found-1150x647.png";
import LoadingSpinner from "../LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { MovieContext } from "../../context/MovieContext";
import Modal from "../Modal";
import LazyLoad from "react-lazyload";
const MovieCard = (props) => {
  const { id, title, image, releaseDate, voteAverage } = props;
  const movieContext = useContext(MovieContext);
  const { movies, setMovieDetail } = movieContext;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);
  return (
    <>
      <div
        className="movie-card"
        onClick={async () => {
          await setMovieDetail(id);
          toggleModal();
        }}
      >
        <span className="bookmark">
          <FontAwesomeIcon icon={faBookmark} />
        </span>
        <LazyLoad height={200} placeholder={<LoadingSpinner />}>
          <img
            className="card-image"
            src={image ? `${IMAGE_URL}${image}` : notFoundImg}
            alt={`${title}`}
          />
        </LazyLoad>
        <div className="card-desc">
          <h3 className="title">{title}</h3>
          <div className="details">
            <span className="release-date">
              Release date: {<Moment format="YYYY">{releaseDate}</Moment>}
            </span>
            <span className="rating">Rating: {voteAverage}</span>
          </div>
        </div>
      </div>
      {isOpenModal && <Modal toggleModal={toggleModal} movie={movies.movie} />}
    </>
  );
};

export default MovieCard;
