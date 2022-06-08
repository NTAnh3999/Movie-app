import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";

const TopRated = () => {
    const { state, dispath } = useContext(GlobalContext);

    useEffect(() => {
        async function getMovies() {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
            );
            const data = await response.json();

            dispath({ type: "GET_TOP_RATED", payload: data.results });
        }
        getMovies();
    }, []);
    return (
        <CardContainer>
            {state.movieLists.map((movie) => {
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
};

export default TopRated;
