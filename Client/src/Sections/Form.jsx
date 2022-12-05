import React from "react";
import { useState } from "react";
import Calender_Btn from "../assets/Calender_Btn";
function Form() {
  const [DD, setDD] = useState("");
  const [MM, setMM] = useState("");
  const [YYYY, setYYYY] = useState("");
  function handleDD(e) {
    e.preventDefault();
    setDD(e.target.value);
  }
  function handleMM(e) {
    e.preventDefault();
    setMM(e.target.value);
  }
  function handleYYYY(e) {
    e.preventDefault();
    setYYYY(e.target.value);
  }
  if (isNaN(DD)) {
    setDD("");
    alert("Please enter only numbers");
  }
  if (isNaN(MM)) {
    setMM("");
    alert("Please enter only numbers");
  }
  if (isNaN(YYYY)) {
    setYYYY("");
    alert("Please enter only numbers");
  }

  return (
    <div className="flex justify-center justify-items-center items-center w-[100%] h-[26%]">
      <form className="flex justify-center justify-items-center items-center gap-4 w-[66%] h-[100%]">
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
