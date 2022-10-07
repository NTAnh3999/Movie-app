import React from "react";
import MovieCard from "../MovieCard";

const CardList = ({ data }) => {
    return data?.map((dataField) => {
        return (
            <MovieCard
                key={dataField.id}
                id={dataField.id}
                title={dataField.title}
                image={dataField.poster_path}
                releaseDate={dataField.release_date}
                voteAverage={dataField.vote_average}
            />
        );
    });
};

export default CardList;
