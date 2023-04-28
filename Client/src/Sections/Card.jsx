import React from "react";

const poster = (poster_path) => {
  if(poster_path)
  {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`;
  }
  
};

function Card({ poster_path, title, release_date }) {
  return (
    <div className="flex flex-col w-full max-w-xs mx-auto my-4 rounded-lg shadow-md overflow-hidden shrink">
      <div className="relative">
        <img
          src={poster(poster_path)||"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"} alt={title}
          className="object-contain w-full h-64"
        />
      </div>
      <div className="px-6 py-4">
        <h1 className="text-gray-900 text-lg font-bold">{title || "Title"}</h1>
        <p className="text-gray-600 font-medium mt-2">{release_date || "Date"}</p>
      </div>
    </div>
  );
}

export default Card;
