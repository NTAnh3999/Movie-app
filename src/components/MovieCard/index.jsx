import Moment from "react-moment";
import { NORMAL_IMG_URL } from "../../common";
import notFoundImg from "../../assets/images/image-not-found-1150x647.png";
import LoadingSpinner from "../LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkFilled } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const MovieCard = (props) => {
  const { currentUser, wishList, setBookmark, deleteBookmark } =
    useContext(UserContext);
  const navigate = useNavigate();
  const { id, title, image, releaseDate, voteAverage } = props;
  const isBookmarked =
    wishList &&
    wishList.length > 0 &&
    wishList.some((movie) => movie.id === id);
  const handleBookmark = async () => {
    if (!currentUser) navigate("/account");
    if (isBookmarked) {
      await deleteBookmark(props);
      return;
    }
    await setBookmark(props);
  };
  return (
    <>
      <div className="movie-card">
        <span className="bookmark" onClick={handleBookmark}>
          <FontAwesomeIcon
            icon={isBookmarked ? faBookmarkFilled : faBookmark}
          />
        </span>
        <Link to={`/movie/${id}`}>
          <LazyLoad height={"100%"} placeholder={<LoadingSpinner />}>
            <img
              className="card-image"
              src={image ? `${NORMAL_IMG_URL}${image}` : notFoundImg}
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
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
