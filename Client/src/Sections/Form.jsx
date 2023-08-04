import React from "react";
import { useState, useEffect } from "react";
import { useDataLayerValue } from "../utils/data_layer";
import Calender_Btn from "../assets/Calender_Btn";
import { getMovieData, getMovieVid } from "../utils/actions";

function Form() {

  const [{ }, dispatch] = useDataLayerValue();
  const [BirthDate, setBirthDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(BirthDate);
    dispatch({ type: "SET_BIRTHDATE", birthdate: BirthDate });
  }
  const onDateChange = (event) => {
    setBirthDate(event.target.value);
  };



  return (
    <div className="flex justify-center justify-items-center items-center lg:w-[100%] lg:h-[26%] top:0px font-medium lg:font-normal">
      <form
        autoComplete="off"
        className="flex justify-center justify-items-center items-center gap-4 w-[66%] h-[100%]"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-lg text-sm sm:text-2xl p-4 border-2 border-gray-300 bg-gray-100"
          type="date"
          value={BirthDate}
          onChange={onDateChange}
          required
        />

        <button>
          <Calender_Btn></Calender_Btn>
        </button>

      </form>
    </div>
  );
}

export default Form;
