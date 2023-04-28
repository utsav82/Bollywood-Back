import React from "react";
import { useEffect, useState } from "react";
import { useDataLayerValue } from "../utils/data_layer";

const poster = (poster_path) => {
  if (poster_path) {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`;
  }

};


function Card(props) {
  const [{ movie_data }] = useDataLayerValue();
  let show = props.show?"opacity-1":"opacity-0";
  useEffect(() => {
     show = props.show?"opacity-1":"opacity-0";
  }, [movie_data]);
  return (

    <div className={"flex flex-col w-full max-w-xs mx-auto my-4 rounded-lg shadow-md overflow-hidden shrink "+show} >
      <div className="relative">
        <img
          src={poster(movie_data?.poster_path)} alt={movie_data?.title}
          className="object-contain w-full h-64"
        />
      </div>
      <div className="px-6 py-4">
        <a href={"https://www.themoviedb.org/movie/" + movie_data?.id}>
          <h1 className="text-gray-900 text-lg font-bold">{movie_data?.title || "Title"}</h1></a>
        <p className="text-gray-600 font-medium mt-2">{movie_data?.release_date || "Date"}</p>
      </div>
    </div>

  );
}

export default Card;
