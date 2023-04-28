import React from "react";
import { useEffect, useState } from "react";
import { getMovieVid } from "../utils/actions";
import { useDataLayerValue } from "../utils/data_layer";

function Player(props) {
  const [{ youtube_id, movie_data, birthdate }, dispatch] = useDataLayerValue();
  const [Url, setUrl] = useState("");
  useEffect(() => { }, [youtube_id]);
  const setId = async () => {
    if (movie_data != null) {
      const mdataa = await getMovieVid(movie_data.title);
      console.log(mdataa?.data);
      const URL = `https://www.youtube.com/embed/${mdataa?.data}`;
      setUrl(URL);
      dispatch({ type: "SET_YOUTUBE_ID", youtube_id: mdataa?.data });
    }
  };
  let show = props.show?"opacity-1":"opacity-0";
  useEffect(() => {
    setId();
    show = props.show?"opacity-1":"opacity-0";
  }, [movie_data]);
 
  return (
    <div className={"flex flex-col w-full mx-auto my-4 rounded-lg shadow-md overflow-hidden grow "+show}>
      <iframe
        height="350"
        src={Url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>

  );
}

export default Player;
