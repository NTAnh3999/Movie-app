import React from "react";

import Button from "../Button";
import { Link } from "react-router-dom";
import { CATEGORY, W500_IMG_URL } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const MovieCardPreview = (props) => {
  const item = props.item;
  const link = "/" + CATEGORY[props.category] + "/" + item.id;
  const bg = W500_IMG_URL.concat(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div
        className="movie-card-preview"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Button className="btn--play">
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCardPreview;
