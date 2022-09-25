import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import NotFound from "../components/NotFound";
import { useParams } from "react-router-dom";
const SearchResult = () => {
    const { movies, getSearchData } = useContext(MovieContext);
    const { query } = useParams();
    useEffect(() => {
        (async () => {
            await getSearchData(query);
        })();
    }, [query]);
    if (movies?.searchResults?.length === 0) {
        return <NotFound message={"Search not found"} />;
    } else {
        return (
            <>
                <CardContainer
                    title={`Found ${movies?.searchResults?.length} results for '${query}' keyword`}
                >
                    {movies?.searchResults?.map((movie) => {
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
            </>
        );
    }
};

export default SearchResult;
