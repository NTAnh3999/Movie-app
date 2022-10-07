import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardContainer from "../components/CardContainer";
import { CATEGORY_TRENDING } from "../config";
import CardList from "../components/CardList";
import Section from "../components/Section";
import Pagination from "../components/Pagination";

const Trending = () => {
    const movieContext = useContext(MovieContext);

    const { movies, getMovieData, pageCount, currentPage } = movieContext;
    useEffect(() => {
        getMovieData(CATEGORY_TRENDING);
    }, [currentPage]);

    return (
        <Section>
            <CardContainer title="Trending movie">
                <CardList data={movies?.trending} />
            </CardContainer>
            <Pagination totalPages={pageCount} />
        </Section>
    );
};

export default Trending;
