import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { UserContext } from "../context/UserContext";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import CardGrid from "../components/CardGrid";
import Layout from "../components/Layout";

const Category = () => {
  const [items, setItems] = useState([]);
  const { movies, search } = useContext(MovieContext);
  const { getBookmark } = useContext(UserContext);
  useEffect(() => {
    (async () => {
      await getBookmark();
    })();
    if (Object.keys(movies).length !== 0) {
      const combinedData = movies.popular.concat(
        movies.top_rated,
        movies.now_playing
      );
      setItems(combinedData);
    }
  }, [movies]);
  return (
    <Layout>
      <div style={{ paddingTop: "10rem" }}>
        <SearchBox />
        <CardContainer title={" Movie List"}>
          <CardGrid data={items} />
        </CardContainer>
        <Pagination totalPages={search.totalPages} />
      </div>
    </Layout>
  );
};

export default Category;
