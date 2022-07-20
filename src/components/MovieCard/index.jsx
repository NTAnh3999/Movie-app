import Moment from "react-moment";
const MovieCard = (props) => {
    const { title, image, releaseDate, voteAverage } = props;
    return (
        <div className="movie-card">
            <img
                className="card-image"
                src={`https://image.tmdb.org/t/p/original${image}`}
                alt={`${title}`}
            />

            <div className="card-desc">
                <h3 className="title">{title}</h3>
                <div className="details">
                    <span className="release-date">
                        Release date:{" "}
                        {<Moment format="YYYY">{releaseDate}</Moment>}
                    </span>
                    <span className="rating">Rating: {voteAverage}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
