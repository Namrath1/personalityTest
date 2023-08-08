import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div class="px-12 py-7">
      <nav class="flex justify-center md:justify-start ">
        <img
          class="mx-10 mb-3 h-16"
          src="src\assets\NxGen Full Logo final file.svg"
          alt="logo.svg"
        />
      </nav>
      <div class="max-w-[85%] rounded md:rounded-full bg-[#c0c0c065] m-auto -mt-36 ">
        <div class="font-Helvectica text-center max-w-[340px] m-auto ">
          <p class=" font-bold text-[maroon] pt-36 text-3xl">
            7 questions to discover your greater purpose.
          </p>
          <p class=" mt-1 font-bold text-black text-3xl">
            Take this quiz to begin!
          </p>
          <p class=" font-[500px] mt-32 text-3xl">
            What are you focusing on in your life right now?
          </p>
        </div>
        <div class="max-w-[80%] flex md:flex md:w-[80%] mt-14 justify-center space-x-14 m-auto">

          <div class=" h-36 w-36 rounded-full text-center bg-[#800000]  drop-shadow-xl">
            <Link to={"/assess"}>
              <div class="pt-[4rem] text-white">Text</div>
            </Link>
          </div>
          <div class=" h-36 w-36 rounded-full text-center bg-[#800000]  drop-shadow-xl">
            <Link to={"/assess"}>
              <div class="pt-[4rem] text-white">Text</div>
            </Link>
          </div>
          <div class=" h-36 w-36 rounded-full text-center bg-[#800000]  drop-shadow-xl">
            <Link to={"/assess"}>
              <div class="pt-[4rem] text-white">Text</div>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          totam deleniti consectetur quam mollitia commodi ratione aliquam
          expedita exercitationem ut. Veritatis itaque, quae qui sequi
          voluptatibus nisi neque natus aperiam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Excepturi adipisci ipsum, corporis
          assumenda voluptatum a sit culpa provident ex ipsa veritatis eum
          tempore. Magni repudiandae vel officiis, nemo dignissimos
          consequuntur! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Distinctio vel vitae non. Quia, assumenda nobis obcaecati sint
          ratione hic reprehenderit, ducimus commodi cupiditate ea quasi
          voluptatum libero id ut rerum?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque, delectus magnam? Libero hic, molestiae nobis
          provident, eos asperiores rdolorum quod aliquid doloribus error,
          facere voluptates! In consequatur maxime
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
