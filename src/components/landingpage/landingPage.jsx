import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div class="px-3">
      <nav class="flex justify-center md:justify-start pt-3">
          <img
            class="mx-10 mb-3 h-16"
            src="src\assets\logo.svg"
            alt="logo.svg"
          />
        </nav>
      <div class="max-w-[95%] min-h-fit rounded md:rounded-full bg-[#c0c0c065] m-auto -mt-20">
        
        <div class="font-Helvectica text-center max-w-[340px] m-auto ">
          <p class=" font-bold text-[maroon] pt-36 text-lg md:text-3xl">
            7 questions to discover your greater purpose.
          </p>
          <p class=" mt-1 font-bold text-black text-lg md:text-3xl">
            Take this quiz to begin!
          </p>
          <p class=" font-[500px] mt-32 text-xl md:text-3xl">
            What are you focusing on in your life right now?
          </p>
        </div>
        <div class="flex flex-col mt-5 mx-[4.5rem] pb-20 flex-wrap md:flex md:flex-row md:justify-center md:space-x-10 md:mx-auto ">
          <div class=" h-32 w-32 md:h-36 md:w-36 mt-7  rounded-full text-center bg-[#800000]  drop-shadow-xl ">
            <Link to={"/access"}>
              <div class=" py-[3.3rem] md:pt-[4rem] px-5 text-white">Exploring</div>
            </Link>
          </div>
          <div class=" h-32 w-32 md:h-36 md:w-36 mt-7  rounded-full text-center bg-[#800000]  drop-shadow-xl ">
            <Link to={"/access"}>
              <div class=" pt-11 md:py-[3.3rem] px-6 text-white">Aspiring Director</div>
            </Link>
          </div>
          <div class=" h-32 w-32 md:h-36 md:w-36 mt-7 rounded-full text-center bg-[#800000]  drop-shadow-xl ">
            <Link to={"/access"}>
              <div class=" pt-11 md:py-[3.3rem] px-6 text-white">Existing Director</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
