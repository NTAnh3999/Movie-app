import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import LoadingSpinner from "../components/LoadingSpinner";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import NotFound from "../components/NotFound";
import { useParams } from "react-router-dom";
const SearchResult = () => {
    const [state, dispath] = useContext(GlobalContext);
    const { query } = useParams();
    useEffect(() => {
        if (!query) return;
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
        )
            .then((response) => response.json())
            .then((data) => {
                dispath({ type: "GET_SEARCH_RESULTS", payload: data.results });
            });
    }, [query]);
    if (state.movieLists.length === 0) {
        return <NotFound message={"Search not found"} />;
    } else {
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
    }
};

export default SearchResult;
