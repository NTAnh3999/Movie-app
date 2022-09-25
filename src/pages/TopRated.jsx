import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { TOP_RATED_ACTION } from "../config";
const TopRated = () => {
    const { movies, getData } = useContext(MovieContext);

    useEffect(() => {
        getData(TOP_RATED_ACTION);
    }, []);
    if (movies.length === 0) {
        return <LoadingSpinner />;
    } else {
        return (
            <CardContainer title={"Top rated movie"}>
                {movies?.top_rated?.map((movie) => {
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

export default TopRated;
