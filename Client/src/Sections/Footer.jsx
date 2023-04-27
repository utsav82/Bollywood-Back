import React from "react";
import Logo from "../assets/Logo";
import Tmdb_logo from "../assets/Tmdb_logo";
import Youtube_logo from "../assets/Youtube_logo";
import Github_logo from "../assets/Github_logo";
import Twitter_logo from "../assets/Twitter_logo";
function Footer() {
  return (

    <div className="w-[100%] h-[6.900rem] bg-[#013642]  bottom-0	flex flex-col mt-10">
      <div className=" w-[100%] h-[6.900rem]  flex items-center justify-between text-white ">
        <div>
          <Logo></Logo>
        </div>
        <div className="flex flex-col items-center justify-between gap-1.5">
          <div className="flex items-center justify-between gap-4">
            <a href="#Hero" class="bn6">

              Home
            </a>
            <a href="#" class="bn6">
              About
            </a>
            <a href="#" class="bn6">
              Contact Dev
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">

            <button className="hover:scale-75">

              <a
                href="https://github.com/utsav82/Bollywood-Back"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github_logo></Github_logo>
              </a>
            </button>

            <button className="hover:scale-75">

              <a
                href="https://twitter.com/Yadavutsav3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter_logo></Twitter_logo>
              </a>
            </button>
          </div>
          <div></div>
        </div>
        <div className="flex-col items-end">
          <Tmdb_logo></Tmdb_logo>
          <Youtube_logo></Youtube_logo>
        </div>
      </div>

      <div className="w-[100%] bg-[#000] h-[2rem] text-s mbt-[0px] bottom-0	 flex justify-center text-center text-white">

        <p>© 2022-23 | Made by Dev | All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
