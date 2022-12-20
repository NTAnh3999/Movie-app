import { useContext, useEffect, useRef } from "react";
import { MovieContext } from "../context/MovieContext";
import CardList from "../components/CardList";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";
import Section from "../components/Section";
import { transformCharacterToSpace } from "../helpers";
import SearchBox from "../components/SearchBox";
const Category = ({ categoryPage }) => {
  const movieContext = useContext(MovieContext);
  const sectionRef = useRef();
  const { movies, setMovieData, searchResult, currentPage } = movieContext;
  useEffect(() => {
    setMovieData(categoryPage);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currentPage, categoryPage]);

  return (
    <>
      <SearchBox />
      <Section sectionRef={sectionRef}>
        <CardContainer
          title={transformCharacterToSpace(categoryPage).concat(" Movie")}
        >
          <CardList data={movies[categoryPage]} />
        </CardContainer>
        <Pagination totalPages={searchResult.totalPages} />
      </Section>
    </>
  );
};

export default Category;
