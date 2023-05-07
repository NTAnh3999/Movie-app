import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getListMovies } from "../../services/movies";
import { MOVIE_TYPE } from "../../common";
import HeroSlideItem from "../HeroSlideItem";
import TrailerModal from "../Modal";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { api_key: process.env.REACT_APP_API_KEY, page: 1 };
      try {
        const response = await getListMovies(MOVIE_TYPE.popular, params);
        setMovieItems(response?.results.slice(1, 6));
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movieItems?.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems?.map((item, i) => (
        <TrailerModal key={i} item={item} id={`modal_${item.id}`} />
      ))}
    </div>
  );
};
export default HeroSlide;
