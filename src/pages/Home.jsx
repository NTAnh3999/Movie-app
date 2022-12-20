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
import SearchBox from "../components/SearchBox";
const Home = () => {
  const movieContext = useContext(MovieContext);

  const { movies, setMovieData } = movieContext;
  useEffect(() => {
    (async () => {
      Promise.all([
        setMovieData(CATEGORY_POPULAR),
        setMovieData(CATEGORY_TOP_RATED),
        setMovieData(CATEGORY_TRENDING),
      ]);
    })();
  }, []);
  if (movies.length === 0) {
    return <LoadingSpinner />;
  } else {
    return (
      <>
        <SearchBox />
        <SlideShow>
          <CardList data={movies?.trending?.filter((_, id) => id < 5)} />
        </SlideShow>
        <Section>
          <CardContainer title="Popupar Movie">
            <CardList data={movies?.popular?.filter((_, idx) => idx < 8)} />
          </CardContainer>
          <CardContainer title="Top Rated Movie">
            <CardList data={movies?.top_rated?.filter((_, idx) => idx < 8)} />
          </CardContainer>
        </Section>
      </>
    );
  }
};

export default Home;
