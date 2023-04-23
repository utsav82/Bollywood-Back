import React from "react";
import image from "../assets/Amitabh Bachan.png";
import Form from "./Form";
import Player from "./Player";
import { useEffect, useState } from "react";
import { useDataLayerValue } from "../utils/data_layer";
import { getMovieData } from "../utils/actions";
import Card from "./Card";
function Hero() {
  const [{ birthdate, movie_data }, dispatch] = useDataLayerValue();
  const [show, setShow] = useState(false);
  const setData = async () => {
    if (birthdate != "") {
      console.log(birthdate);
      try{
      const mdata = await getMovieData(birthdate)
      if(mdata)
      {
        setShow(true);
        dispatch({ type: "SET_MOVIE_DATA", movie_data: mdata });
      }
      else
      {
        setShow(false);
      }
     }
      catch(err)
      {
        setShow(false);
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setData();
  }, [birthdate]);
  return (
    <div id="Hero" className="hero flex flex-col justify-center justify-items-center items-center h-screen drop-shadow-[5px_10px_4px_rgba(0,0,0,0.5)]">
      <div className="absolute top-[-2rem] z-10">
        <h1 className="text-[7rem] leading-1 font-['devanagarish'] drop-shadow-[5px_10px_4px_rgba(0,0,0,0.15)]">
          Bollywood Back
        </h1>
      </div>
      <div className="flex pl-3 relative justify-between justify-items-center items-center top-[3%] min-h-[88%] w-[96%] bg-[#fff]">
        <div className="flex flex-col relative w-[64%] h-[90%] top-[4%]">
          <Form></Form>
          <div className="flex flex-row flex-wrap items-center justify-center">
            {show && <Card {...movie_data}></Card>}
            {show && <Player></Player>}
          </div>
        </div>
        <div>
          <img src={image} alt="amitabh bachan" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
