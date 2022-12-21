import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardContainer from "../components/CardContainer";
import CardList from "../components/CardList";
import { useParams } from "react-router-dom";
import Section from "../components/Section";
import Pagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import { useRef } from "react";
const SearchResult = () => {
  const { movies, setSearchData, searchResult, currentPage } =
    useContext(MovieContext);
  const sectionRef = useRef();
  const { query } = useParams();
  useEffect(() => {
    (async () => {
      await setSearchData(query);
    })();
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [query, currentPage]);

  return (
    <>
      <SearchBox />
      <Section sectionRef={sectionRef}>
        <CardContainer
          title={`Found ${searchResult.totalResults} results for '${query}' keyword`}
        >
          {<CardList data={movies.searchResults} />}
        </CardContainer>
        <Pagination totalPages={searchResult.totalPages} />
      </Section>
    </>
  );
};

export default SearchResult;
