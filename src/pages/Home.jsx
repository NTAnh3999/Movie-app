import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import CardContainer from "../components/CardContainer";
import SlideShow from "../components/SlideShow";
import LoadingSpinner from "../components/LoadingSpinner";
import { POPULAR_ACTION, TOP_RATED_ACTION, TRENDING_ACTION } from "../config";

const Home = () => {
    const movieContext = useContext(MovieContext);

    console.log(movieContext);
    const { movies, getData } = movieContext;
    useEffect(() => {
        (async () => {
            Promise.all([
                getData(TRENDING_ACTION),
                getData(POPULAR_ACTION),
                getData(TOP_RATED_ACTION),
            ]);
        })();
    }, []);
    console.log(movies);
    if (movies.length === 0) {
        return <LoadingSpinner />;
    } else {
        return (
            <>
                <SlideShow>
                    {movies?.trending
                        ?.filter((_, idx) => idx < 5)
                        ?.map((movie) => {
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
                </SlideShow>
                <CardContainer title="Popupar Movie">
                    {movies?.popular
                        ?.filter((_, idx) => idx < 8)
                        ?.map((movie) => {
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
                <CardContainer title="Top Rated Movie">
                    {movies?.top_rated
                        ?.filter((_, idx) => idx < 8)
                        ?.map((movie) => {
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

export default Home;
