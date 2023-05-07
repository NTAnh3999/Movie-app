import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCardPreview from "../MovieCardPreview";
const CardList = (props) => {
  return (
    <div className="card-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {props?.items?.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCardPreview
              item={item}
              type={props.type}
              category={props.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
