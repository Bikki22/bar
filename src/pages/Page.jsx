import { ArrowRight } from "lucide-react";
import Testimonial from "../components/Testimonial";

const Pages = () => {
  return (
    <section className="relative w-full bg-cover bg-center">
      <div
        className="relative z-10 flex items-center justify-center text-center md:h-[650px] h-96"
        style={{
          backgroundImage: "url('/barrelbg.jpg')",
        }}
      >
        <div className="space-y-6">
          <h1 className="retro-text text-white text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            OUR TEAM
          </h1>

          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="w-40 h-[2px]"></span>
            <span className="w-52 h-[2px] bg-white/40"></span>
          </div>

          <div className="inline-block md:w-lg w-50 relative bg-[#8d3f2d] py-2 text-white text-sm md:text-xl tracking-wide">
            <div
              className="bg-[#4c241b] w-7 h-5 inline-block absolute -right-0.5 -top-5 z-10
                [clip-path:polygon(1%_100%,0_0,100%_100%)]"
            ></div>
            <div
              className="bg-[#4c241b] w-7 h-5 inline-block absolute -left-0.5 -top-5 z-10
  [clip-path:polygon(0_100%,100%_0,100%_100%)]"
            ></div>
            <svg
              className="absolute left-[-35px]  top-1 -translate-y-1/2"
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
                  <rect width="60" height="50" fill="#8d3f2d" />

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
              className="absolute right-[-40px] top-0 -translate-y-1/2 fill-[#8d3f2d]"
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
            <span className="md:text-xl text-sm italic flex justify-center z-50 px-5">
              Home &nbsp;
              <ArrowRight />
              &nbsp; Our Team
            </span>
          </div>
        </div>
      </div>

      <div
        className="bg-primary "
        style={{
          backgroundImage: "url('/dust.png')", // your hero image
        }}
      >
        <div className="max-w-7xl mx-auto py-20 px-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm tracking-widest text-stone-700 mb-4">
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

            <h2 className="text-md md:text-3xl text-xl font-semibold uppercase">
              work with us
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
          <div className="flex items-center justify-center ">
            <h3
              className="md:text-9xl text-4xl font-bold uppercase tracking-normal text-coffee
             drop-shadow-[4px_4px_0px_rgba(180,130,90,0.8)]"
            >
              Meet our team
            </h3>
          </div>
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default Pages;
