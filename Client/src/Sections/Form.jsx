import React from "react";
import { useState, useEffect } from "react";
import { useDataLayerValue } from "../utils/data_layer";
import Calender_Btn from "../assets/Calender_Btn";
import { getMovieData, getMovieVid } from "../utils/actions";

function Form() {
  const [{}, dispatch] = useDataLayerValue();
  const [DD, setDD] = useState("");
  const [MM, setMM] = useState("");
  const [YYYY, setYYYY] = useState("");
  const [BirthDate, setBirthDate] = useState("");
  const [MovieData, setMovieData] = useState({});
  const [MovieId, setMovieId] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const birthdate = YYYY + "-" + MM + "-" + DD;
    dispatch({ type: "SET_BIRTHDATE", birthdate: birthdate });
    setBirthDate(birthdate);
  }

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
    <div className="flex justify-center justify-items-center items-center lg:w-[100%] lg:h-[26%] top:0px font-medium lg:font-normal">
      <form
        autoComplete="off"
        className="flex justify-center justify-items-center items-center gap-4 w-[66%] h-[100%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center">
          <label
            className="text-5xl lg:text-7xl leading-[0.5] font-['shallota']"
            htmlFor="DD"
          >
            DD
          </label>
          <input
            className="w-[3.25rem] h-[2.5rem] lg:w-[6.25rem] lg:h-[5rem] lg:text-5xl rounded-md border-2 border-black text-center "
            type="text"
            maxLength={2}
            name="DD"
            id="DD"
            aria-label="day"
            autoComplete="off"
            value={DD}
            onChange={(e) => handleDD(e)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label
            className="text-5xl lg:text-7xl leading-[0.5] font-['shallota']"
            htmlFor="MM"
          >
            MM
          </label>
          <input
            className="w-[3.25rem] h-[2.5rem] lg:w-[6.25rem] lg:h-[5rem] lg:text-5xl rounded-md border-2 border-black text-center "
            maxLength={2}
            type="text"
            min="0"
            max="99"
            name="MM"
            id="MM"
            aria-label="month"
            autoComplete="off"
            value={MM}
            onChange={(e) => handleMM(e)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label
            className="text-5xl lg:text-7xl leading-[0.5] font-['shallota']"
            htmlFor="YYYY"
          >
            YYYY
          </label>
          <input
            className="w-[5.25rem] h-[2.5rem] lg:w-[8.25rem] lg:h-[5rem] lg:text-5xl rounded-md border-2 border-black text-center "
            maxLength={4}
            type="text"
            name="YYYY"
            id="YYYY"
            aria-label="Year"
            autoComplete="off"
            value={YYYY}
            onChange={(e) => handleYYYY(e)}
          />
        </div>
        <div className="z-10">
          <button>
            <Calender_Btn></Calender_Btn>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
