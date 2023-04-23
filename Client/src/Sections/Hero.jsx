import React from "react";
import image from "../assets/Amitabh Bachan.png";
import Form from "./Form";
import Player from "./Player";
import { useEffect, useState } from "react";
import { useDataLayerValue } from "../utils/data_layer";
import { getMovieData } from "../utils/actions";
import { ProgressBar } from 'react-loader-spinner'
import Card from "./Card";
function Hero() {
  const [{ birthdate, movie_data }, dispatch] = useDataLayerValue();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState();

  const setData = async () => {
    if (birthdate != "") {
      console.log(birthdate);
      try {
        setLoading(true);
        const mdata = await getMovieData(birthdate)
        setLoading(false);
        if (mdata) {
          setShow(true);
          dispatch({ type: "SET_MOVIE_DATA", movie_data: mdata });
        }
        else {
          setShow(false);
        }
      }
      catch (err) {
        setShow(false);
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setData();
  }, [birthdate]);

  return (
   <>
      <div className="mt-[-25px] w-screen z-10 text-[5rem] font-['devanagarish'] drop-shadow-[5px_10px_4px_rgba(0,0,0,0.15)] text-center">
        Bollywood Back
      </div>
       <div className="flex justify-center items-center">
       <div className="flex w-[90vw] h-[90vh] bg-[#ffff] drop-shadow-[5px_10px_4px_rgba(0,0,0,0.5)] rounded-lg justify-evenly items-center ">
        <div className="flex flex-col grow">
            <Form></Form>
            <div className="flex flex-wrap flex-col items-center justify-evenly mt-[5%] gap-y-5 md:flex-row">
              {loading && <div className="mt-[10%]"><ProgressBar
                height="100"
                width="100"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#F4442E'
                barColor='#51E5FF'
              /></div>}
              {show && !loading && <Card {...movie_data}></Card>}
              {show && !loading && <Player></Player>}
            </div>
        </div>
        <div className="self-center hidden md:block ">
            <img src={image} alt="amitabh bachan" />
          </div>
      </div>
      </div>
    </>
  );
}

export default Hero;
