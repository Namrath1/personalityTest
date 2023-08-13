import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
import nxGenLogo from "../../assets/nxGenLogo.svg"
function LandingPage() {
  return (
    <div class="px-3">
      <nav class="flex justify-center  md:justify-start pt-3">
      
          <img
            class="mx-10 mb-3 h-16"
            src={nxGenLogo}
            alt="logo.svg"
          />
        </nav>
      <div class="max-w-[95%] min-h-fit bg-[#c0c0c065] rounded md:rounded-full m-auto -mt-20">
        
        <div class="font-Helvectica text-center md:max-w-[450px] m-auto ">
          <p class=" font-bold text-[maroon] pt-36 text-lg md:text-3xl">
            "Assess Your Leadership"
          </p>
          <p class=" mt-1 font-bold text-black text-lg md:text-3xl">
            4 Questions to assess your leadership capital.
          </p>
          <p class=" font-[500px] mt-32 text-xl md:text-3xl">
            Where are you in your director journey right now?
          </p>
        </div>
        
        <div class="flex flex-col mt-5 mx-[4.5rem] pb-20 flex-wrap content-around md:flex md:flex-row md:justify-center md:space-x-10 md:mx-auto ">
          <div class=" h-32 w-32 md:h-36 md:w-36 mt-7  rounded-full text-center bg-[#800000]  drop-shadow-xl ">
            <Link to={"/assess"}>
              <div class=" py-[3.3rem] md:pt-[4rem] px-5 text-white">Exploring</div>
            </Link>
          </div>
         
          <div class=" h-32 w-32 md:h-36 md:w-36 mt-7  rounded-full text-center bg-[#800000]  drop-shadow-xl ">
            <Link to={"/assess"}>
              <div class=" pt-11 md:py-[3.3rem] px-6 text-white">Aspiring Director</div>
            </Link>
          </div>
         
          <div class=" h-32 w-32 md:h-36 md:w-36 mt-7 rounded-full text-center bg-[#800000]  drop-shadow-xl ">
            <Link to={"/assess"}>
              <div class=" pt-11 md:py-[3.3rem] px-6 text-white">Existing Director</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
