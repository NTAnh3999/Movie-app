import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import CardContainer from "../components/CardContainer";
import CardGrid from "../components/CardGrid";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import { useRef } from "react";
import EmptyPage from "../components/Empty";
import Layout from "../components/Layout";
const SearchResult = () => {
  const { setSearchData, search, currentPage } = useContext(MovieContext);
  const sectionRef = useRef();
  const { query } = useParams();
  useEffect(() => {
    (async () => {
      await setSearchData(query);
    })();
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [query, currentPage]);

  return (
    <Layout>
      <section style={{ paddingTop: "10rem" }} ref={sectionRef}>
        <SearchBox />
        <CardContainer
          title={`Found ${search.totalResults} results for '${query}' keyword`}
        >
          {search.results.length !== 0 ? (
            <CardGrid data={search.results} />
          ) : (
            <EmptyPage page="Search Result" />
          )}
        </CardContainer>
        <Pagination totalPages={search.totalPages} />
      </section>
    </Layout>
  );
};

export default SearchResult;
