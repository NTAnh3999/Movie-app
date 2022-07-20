import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import CardContainer from "../components/CardContainer";
import LoadingSpinner from "../components/LoadingSpinner";
const Popular = () => {
    const { state, dispath } = useContext(GlobalContext);

    useEffect(() => {
        async function getMovies() {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
            );
            const data = await response.json();

            dispath({ type: "GET_POPULAR", payload: data.results });
        }
        getMovies();
    }, []);
    if (state.movieLists.length === 0) {
        return <LoadingSpinner />;
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

export default Popular;
