import React from "react";
import MovieCard from "../MovieCard";

const CardGrid = ({ data }) => {
  return data?.map((dataField, i) => {
    return (
      <MovieCard
        key={i}
        id={dataField.id}
        title={dataField.title}
        image={dataField.poster_path ?? dataField.image}
        releaseDate={dataField.release_date}
        voteAverage={dataField.vote_average}
      />
    );
  });
};

export default CardGrid;
