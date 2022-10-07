import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardContainer from "../components/CardContainer";
import CardList from "../components/CardList";
import { CATEGORY_TOP_RATED } from "../config";
import Section from "../components/Section";
import Pagination from "../components/Pagination";

const TopRated = () => {
    const { movies, getMovieData, pageCount, currentPage } =
        useContext(MovieContext);
    useEffect(() => {
        getMovieData(CATEGORY_TOP_RATED);
    }, [currentPage]);

    return (
        <Section>
            <CardContainer title={"Top rated movie"}>
                <CardList data={movies?.top_rated} />
            </CardContainer>
            <Pagination totalPages={pageCount} />
        </Section>
    );
};

export default TopRated;
