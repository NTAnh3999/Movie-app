import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import { getCredits } from "../../../services/movies";
import { W500_IMG_URL } from "../../../common";

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getDataCredits = async () => {
      const res = await getCredits(category, props.id);
      setCasts(res.cast.slice(0, 8));
    };
    getDataCredits();
  }, [category, props.id]);
  return (
    <div className="casts">
      {casts?.map((item, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${W500_IMG_URL.concat(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CastList);
