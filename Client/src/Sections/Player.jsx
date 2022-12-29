import React from "react";
import { useEffect, useState } from "react";
import { getMovieVid } from "../utils/actions";
import { useDataLayerValue } from "../utils/data_layer";

function Player() {
  const [{ youtube_id, movie_data, birthdate }, dispatch] = useDataLayerValue();
  const [Url, setUrl] = useState("");
  useEffect(() => {}, [youtube_id]);
  const setId = async () => {
    if (movie_data != null) {
      const mdataa = await getMovieVid(movie_data.title);
      console.log(mdataa?.data);
      const URL = `https://www.youtube.com/embed/${mdataa?.data}`;
      setUrl(URL);
      dispatch({ type: "SET_YOUTUBE_ID", youtube_id: mdataa?.data });
    }
  };
  useEffect(() => {
    setId();
  }, [movie_data]);

  return (
    <div className="flex flex-col relative w-[70%] h-[100%] top-[2%] left-[6%]">
      <iframe
        height="360"
        src={Url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default Player;
