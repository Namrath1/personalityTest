import React from "react";
import "./landingPage.css";

function LandingPage() {
  return (
    <div class="px-2">
      <nav class="flex justify-center md:justify-start">
        <img
          class="mx-10 mb-3 h-16"
          src="src\assets\NxGen Full Logo final file.svg"
          alt="logo.svg"
        />
      </nav>
      <div class="max-w-[95%] min-h-screenrounded md:rounded-full bg-[#c0c0c065] m-auto -mt-36 ">
        <div class="font-Helvectica text-center max-w-[340px] m-auto ">
          <p class=" font-bold text-[maroon] pt-44 text-xl md:text-3xl">
            7 questions to discover your greater purpose.
          </p>
          <p class=" mt-1 font-bold text-black text-xl md:text-3xl">
            Take this quiz to begin!
          </p>
          <p class=" font-[500px] mt-32 text-xl md:text-3xl">
            What are you focusing on in your life right now?
          </p>
        </div>
        <div class="flex flex-col mt-5 mr-28 pb-20 px-10 md:flex md:flex-row max-w-[50%] mx-auto md:justify-center md:space-x-10 md:mx-auto " >
          <div class=" h-36 w-36 mt-7  rounded-full text-center bg-[#800000]  drop-shadow-xl ">
            <div class="pt-[4rem] text-white">Text</div>
          </div>
          <div class=" h-36 w-36 mt-7  rounded-full text-center bg-[#800000] drop-shadow-xl ">
            <div class="pt-[4rem] text-white">Text</div>
          </div>
          <div class=" h-36 w-36 mt-7 rounded-full text-center bg-[#800000] drop-shadow-xl ">
            <div class="pt-[4rem] text-white">Text</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
