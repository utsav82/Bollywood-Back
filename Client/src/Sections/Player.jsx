import React from "react";
import { useDataLayerValue } from "../utils/data_layer";

function Player() {
const [{ youtube_id }] = useDataLayerValue();
  return (
    <div className="flex flex-col relative w-[80%] h-[80%] top-[2%] left-[8%]">
      <iframe height="360" src= {`https://www.youtube.com/embed/${youtube_id?.data}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
  );
}

export default Player;
