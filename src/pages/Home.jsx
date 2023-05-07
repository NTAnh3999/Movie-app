import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { CATEGORY, MOVIE_TYPE } from "../common";
import HeroSlide from "../components/HeroSlide";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CardList from "../components/CardList";
import Layout from "../components/Layout";
const Home = () => {
  const { movies } = useContext(MovieContext);
  return (
    <Layout>
      <HeroSlide />
      <section className="mb-3">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Phim chiếu rạp</h2>
            <Link to="/movie">
              <Button className="btn--outline">Xem thêm</Button>
            </Link>
          </div>
          <CardList
            items={movies?.now_playing}
            category={CATEGORY.movie}
            type={MOVIE_TYPE.now_playing}
          />
        </div>
      </section>
      <section className="mb-3">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Phim nổi bật</h2>
            <Link to="/movie">
              <Button className="btn--outline">Xem thêm</Button>
            </Link>
          </div>
          <CardList
            items={movies?.popular}
            category={CATEGORY.movie}
            type={MOVIE_TYPE.popular}
          />
        </div>
      </section>
      <section className="mb-3">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Phim kinh điển</h2>
            <Link to="/movie">
              <Button className="btn--outline">Xem thêm</Button>
            </Link>
          </div>
          <CardList
            items={movies?.top_rated}
            category={CATEGORY.movie}
            type={MOVIE_TYPE.top_rated}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
