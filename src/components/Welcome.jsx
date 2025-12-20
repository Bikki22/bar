import { Beer } from "lucide-react";
import React from "react";
import Button from "./Button";

const Welcome = () => {
  return (
    <section className="w-full py-15 px-4 bg-primary ">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 px-2">
        <span
          className="relative inline-block w-3 h-3 rounded-full bg-stone-800
            before:content-['']
            before:absolute
            before:w-2 before:h-2
            before:rounded-full
            before:bg-stone-800
            before:-left-3
            before:top-1/2
            before:-translate-y-1/2

            after:content-['']
            after:absolute
            after:w-2 after:h-2
            after:rounded-full
            after:bg-stone-800
            after:-right-3
            after:top-1/2
            after:-translate-y-1/2
            "
        ></span>

        <span
          className="relative flex-grow h-1 bg-stone-800 gap-1 
          before:content-['']
          before:absolute
          before:left-0
          before:-top-1.5
          before:w-full
          before:h-0.5
          before:bg-black
          

          after:content-['']
          after:absolute
          after:right-0
          after:-bottom-1.5
          after:w-full
          after:h-0.5
          after:bg-black
        "
        ></span>

        <h2 className="text-md sm:text-sm md:text-3xl font-semibold uppercase">
          Welcome to our brewery
        </h2>

        <span
          className="relative flex-grow h-1 bg-stone-800 gap-1 
          before:content-['']
          before:absolute
          before:left-0
          before:-top-1.5
          before:w-full
          before:h-0.5
          before:bg-black
          

          after:content-['']
          after:absolute
          after:right-0
          after:-bottom-1.5
          after:w-full
          after:h-0.5
          after:bg-black
        "
        ></span>
        <span
          className="relative inline-block w-3 h-3 rounded-full bg-stone-800
            before:content-['']
            before:absolute
            before:w-2 before:h-2
            before:rounded-full
            before:bg-stone-800
            before:-left-4
            before:top-1/2
            before:-translate-y-1/2

            after:content-['']
            after:absolute
            after:w-2 after:h-2
            after:rounded-full
            after:bg-stone-800
            after:-right-4
            after:top-1/2
            after:-translate-y-1/2
            "
        ></span>
      </div>
      <div className="flex justify-center items-center">
        <Beer className="size-15 font-bold" />
      </div>
      <div class="flex items-center justify-center ">
        <h3
          class="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-secondary
             drop-shadow-[4px_4px_0px_rgba(180,130,90,0.8)]"
        >
          Vintclub Beer
        </h3>
      </div>
      <div className="w-full h-10 relative">
        <img
          src="./welcome-background.png"
          alt=""
          className="object-cover absolute -top-30"
        />
      </div>
      <div className="lg:flex justify-center lg:justify-between lg:items-center w-6xl mx-auto relative">
        <div className="lg:w-3xl md:w-xl w-70 flex flex-col md:ml-18 lg:ml-1 ml-10">
          <div className="bg-orange py-3 px-2 relative shadow-lg">
            <svg
              className="absolute left-[-40px] top-4 -translate-y-1/2"
              width="78"
              height="52"
              viewBox="0 0 78 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="pattern-left"
                  patternUnits="userSpaceOnUse"
                  width="78"
                  height="52"
                >
                  <rect width="60" height="50" fill="#bb7037" />

                  <img
                    href="https://vintclub.cwsthemes.com/wp-content/themes/vintclub/img/patterns/shape_pattern.png"
                    width="78"
                    height="52"
                    opacity="0.25"
                  />
                </pattern>
              </defs>

              <path
                d="M0.7,0.2l12,25.9L0.7,51.5h76.9V0.2H0.7z"
                fill="url(#pattern-left)"
              />
            </svg>
            <svg
              className="absolute right-[-40px] top-2 -translate-y-1/2 fill-orange"
              width="68"
              height="42"
              viewBox="0 0 78 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M77.3,0.2l-12,25.9l12,25.4H0.4V0.2h76.9z"
                className="#bb7037"
              />
            </svg>
            <div
              className="bg-[#8b572a] w-7 h-3 inline-block absolute -right-0.5 -top-3 z-10
 [clip-path:polygon(1%_100%,0_0,100%_100%)]"
            ></div>
            <h3 className="font-serif italic text-3xl text-white text-center">
              Estb 1993
            </h3>
            <div
              className="bg-[#8b572a] w-7 h-2 inline-block absolute -left-2 -top-2 z-10
 [clip-path:polygon(100%_0,0%_100%,100%_100%)]"
            ></div>
          </div>
          <p className=" lg:text-xl md:text-base text-center py-5 lg:px-10">
            Fusce dictum efficitur est eget viverra. Mauris euismod urna sed
            augue rhoncus, id laoreet vehicula. Nul lam interdum ex lorem.
          </p>
          <p className=" lg:text-xl md:text-base text-center py-3 lg:px-10">
            Morbi libero velit, consectetur sed est vitae, consequat aliquet
            magna. Mauris a justo. Phasellus rhoncus elit imperdiet.
          </p>
          <div className="flex justify-center items-center py-5 px-5">
            <Button content={"Explore Our History"} />
          </div>
        </div>
        <div className="md:w-xl w-90 md:ml-18 lg:ml-0 lg:w-5xl border-15 border-[#ebe6df] flex justify-center items-center">
          <img
            src="./beer-glass.jpg"
            alt=""
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
