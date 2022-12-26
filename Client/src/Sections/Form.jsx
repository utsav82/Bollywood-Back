import React from "react";
import { useState, useEffect } from "react";
import { useDataLayerValue } from "../utils/data_layer";
import Calender_Btn from "../assets/Calender_Btn";
import { getMovieData } from "../utils/actions";

function Form() {
  const [{}, dispatch] = useDataLayerValue();
  const [DD, setDD] = useState("");
  const [MM, setMM] = useState("");
  const [YYYY, setYYYY] = useState("");
  const [BirthDate, setBirthDate] = useState("");
  const [MovieData, setMovieData] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    const birthdate = YYYY + "-" + MM + "-" + DD;
    setBirthDate(birthdate);
  }
  const setData = async () => {
    if (BirthDate != "") {
      const mdata = await getMovieData(BirthDate);
      setMovieData(mdata);
      dispatch({ type: "SET_MOVIE_DATA", movie_data: MovieData });
    }
  };
  useEffect(() => {
    setData();
    dispatch({ type: "SET_BIRTHDATE", birthdate: BirthDate });
  }, [BirthDate]);

  function handleDD(e) {
    e.preventDefault();
    if (isNaN(e.target.value)) {
      setDD("");
      alert("Please enter only numbers");
    } else {
      setDD(e.target.value);
    }
  }
  function handleMM(e) {
    e.preventDefault();
    if (isNaN(e.target.value)) {
      setMM("");
      alert("Please enter only numbers");
    } else {
      setMM(e.target.value);
    }
  }
  function handleYYYY(e) {
    e.preventDefault();
    if (isNaN(e.target.value)) {
      setYYYY("");
      alert("Please enter only numbers");
    } else {
      setYYYY(e.target.value);
    }
  }

  return (
    <div className="flex justify-center justify-items-center items-center w-[100%] h-[26%]">
      <form
        className="flex justify-center justify-items-center items-center gap-4 w-[66%] h-[100%]"
        onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <label
            className="text-7xl leading-[0.5] font-['shallota']"
            htmlFor="DD">
            DD
          </label>
          <input
            className="w-[100px] h-[80px] text-5xl rounded-md border-2 border-black text-center "
            type="text"
            maxLength={2}
            name="DD"
            id="DD"
            aria-label="DD"
            value={DD}
            onChange={(e) => handleDD(e)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label
            className="text-7xl leading-[0.5] font-['shallota']"
            htmlFor="MM">
            MM
          </label>
          <input
            className="w-[100px] h-[80px] text-5xl rounded-md border-2 border-black text-center "
            maxLength={2}
            type="text"
            min="0"
            max="99"
            name="MM"
            id="MM"
            aria-label="MM"
            value={MM}
            onChange={(e) => handleMM(e)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label
            className="text-7xl leading-[0.5] font-['shallota']"
            htmlFor="YYYY">
            YYYY
          </label>
          <input
            className="w-[150px] h-[80px] text-5xl rounded-md border-2 border-black text-center "
            maxLength={4}
            type="text"
            name="YYYY"
            id="YYYY"
            aria-label="YYYY"
            value={YYYY}
            onChange={(e) => handleYYYY(e)}
          />
        </div>
        <div>
          <button>
            <Calender_Btn></Calender_Btn>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
