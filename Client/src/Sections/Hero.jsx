import React from "react";
import image from "../assets/Amitabh Bachan.png";
import Form from "./Form";
import Player from "./Player";
import { useEffect } from "react";
import { useDataLayerValue } from "../utils/data_layer";
import { getMovieData } from "../utils/actions";
function Hero() {
  const [{ birthdate, movie_data }, dispatch] = useDataLayerValue();
  const setData = async () => {
    if (birthdate != "") {
      console.log(birthdate)
      const mdata = await getMovieData(birthdate);
      dispatch({ type: "SET_MOVIE_DATA", movie_data: mdata });
    }
  };

  useEffect(() => {
    setData()
  }, [ birthdate]);
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
          <h1>{movie_data?.title}</h1>
          <h1>{movie_data?.release_date}</h1>
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
