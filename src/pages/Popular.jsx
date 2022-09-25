import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import CardContainer from "../components/CardContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import { POPULAR_ACTION } from "../config";

const Popular = () => {
    const movieContext = useContext(MovieContext);

    console.log(movieContext);
    const { movies, getData } = movieContext;
    useEffect(() => {
        getData(POPULAR_ACTION);
    }, []);

    if (movies.length === 0) {
        return <LoadingSpinner />;
    } else {
        return (
            <CardContainer title="Popular movie">
                {movies?.popular?.map((movie) => {
                    return (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            image={movie.poster_path}
                            releaseDate={movie.release_date}
                            voteAverage={movie.vote_average}
                        />
                    );
                })}
            </CardContainer>
        );
    }
};

export default Popular;
