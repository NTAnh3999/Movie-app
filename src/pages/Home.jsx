import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardContainer from "../components/CardContainer";
import SlideShow from "../components/SlideShow";
import LoadingSpinner from "../components/LoadingSpinner";
import {
    CATEGORY_POPULAR,
    CATEGORY_TOP_RATED,
    CATEGORY_TRENDING,
} from "../config";
import CardList from "../components/CardList";
import Section from "../components/Section";
const Home = () => {
    const movieContext = useContext(MovieContext);

    const { movies, getMovieData } = movieContext;
    useEffect(() => {
        (async () => {
            Promise.all([
                getMovieData(CATEGORY_POPULAR),
                getMovieData(CATEGORY_TOP_RATED),
                getMovieData(CATEGORY_TRENDING),
            ]);
        })();
    }, []);
    if (movies.length === 0) {
        return <LoadingSpinner />;
    } else {
        return (
            <>
                <SlideShow>
                    <CardList
                        data={movies?.trending?.filter((_, id) => id < 5)}
                    />
                </SlideShow>
                <Section>
                    <CardContainer title="Popupar Movie">
                        <CardList
                            data={movies?.popular?.filter((_, idx) => idx < 8)}
                        />
                    </CardContainer>
                    <CardContainer title="Top Rated Movie">
                        <CardList
                            data={movies?.top_rated?.filter(
                                (_, idx) => idx < 8
                            )}
                        />
                    </CardContainer>
                </Section>
            </>
        );
    }
};

export default Home;
