import React from "react";
import image from "../assets/Amitabh Bachan.png";
import Form from "./Form";
import Player from "./Player";
import { getMovieData } from "../utils/actions";
import { useState, useEffect } from "react";
import { useDataLayerValue } from "../utils/data_layer";
function Hero() {
  const [MovieData, setMovieData] = useState({});
  const [{ birthdate,movie_data }, dispatch] = useDataLayerValue();
  const getData =  async (birthdate)=> {
    var Movie_data = await getMovieData(birthdate);
    setMovieData(Movie_data);
    console.log(MovieData);
  }
  useEffect(() => {
    if (birthdate != null) {
      getData(birthdate);
    }
    dispatch({ type: "SET_MOVIE_DATA", movie_data: MovieData });
  }, [birthdate]);

  return (
    <div className="hero flex flex-col justify-center justify-items-center items-center h-screen drop-shadow-[5px_10px_4px_rgba(0,0,0,0.5)]">
      <div className="absolute top-[-40px] z-10">
        <h1 className="text-[7rem] leading-1 font-['devanagarish'] drop-shadow-[5px_10px_4px_rgba(0,0,0,0.15)]">
          Bollywood Back
        </h1>
      </div>
      <div className="flex pl-3 relative justify-between justify-items-center items-center top-[3%] h-[88%] w-[96%] bg-[#fff]">
        <div className="flex flex-col relative w-[64%] h-[90%] top-[4%]">
          <Form></Form>
          <h1>{movie_data?.original_title}</h1>
          <Player></Player>
        </div>
        <div>
          <img src={image} alt="amitabh bachan" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
