import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardContainer from "../components/CardContainer";
import CardList from "../components/CardList";
import { useParams } from "react-router-dom";
import Section from "../components/Section";
import Pagination from "../components/Pagination";

const SearchResult = () => {
    const { movies, getSearchData, pageCount, currentPage } =
        useContext(MovieContext);
    const { query } = useParams();
    useEffect(() => {
        (async () => {
            await getSearchData(query);
        })();
    }, [query, currentPage]);

    return (
        <Section>
            <CardContainer
                title={`Found ${movies.totalResults} results for '${query}' keyword`}
            >
                {<CardList data={movies.searchResults} />}
            </CardContainer>
            <Pagination totalPages={pageCount} />
        </Section>
    );
};

export default SearchResult;
