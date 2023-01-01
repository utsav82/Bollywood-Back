import React from "react";
const poster = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`;
};
function Card({ poster_path, title, release_date }) {
  return (
    <div className="flex flex-col pt-[0.5rem] pl-[3rem]">
      <img
        src={poster(poster_path)}
        alt="{title}"
        className="w-[15rem] h-[20rem] rounded"
      />
      <div className="flex flex-col">
        <h1 className="font-bold">{title}</h1>
        <p className="font-normal">{release_date}</p>
      </div>
    </div>
  );
}

export default Card;
