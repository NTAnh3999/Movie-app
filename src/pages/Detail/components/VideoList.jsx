import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { getVideos } from "../../../services/movies";
import Video from "./Video";

const VideoList = (props) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideoData = async () => {
      const res = await getVideos(category, props.id);
      setVideos(res.results.slice(0, 5));
    };
    getVideoData();
  }, [category, props.id]);

  return (
    <>
      {videos?.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

export default VideoList;
