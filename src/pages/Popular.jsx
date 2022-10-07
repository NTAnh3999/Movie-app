import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardList from "../components/CardList";
import CardContainer from "../components/CardContainer";
import { CATEGORY_POPULAR } from "../config";
import Pagination from "../components/Pagination";
import Section from "../components/Section";

const Popular = () => {
    const movieContext = useContext(MovieContext);

    const { movies, getMovieData, pageCount, currentPage } = movieContext;
    useEffect(() => {
        getMovieData(CATEGORY_POPULAR);
    }, [currentPage]);

    return (
        <Section>
            <CardContainer title="Popular movie">
                <CardList data={movies?.popular} />
            </CardContainer>
            <Pagination totalPages={pageCount} />
        </Section>
    );
};

export default Popular;
