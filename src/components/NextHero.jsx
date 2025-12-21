import { ArrowRight } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

const NextHero = ({ title }) => {
  const location = useLocation();

  return (
    <div
      className="relative z-10 flex items-center justify-center text-center md:h-[650px] h-96"
      style={{
        backgroundImage: "url('/barrelbg.jpg')",
      }}
    >
      <div className="space-y-6">
        <h1 className="retro-text text-cream text-5xl md:text-8xl font-black uppercase tracking-tight mb-4 drop-shadow-[4px_4px_0px_rgba(180,130,90,0.8)]">
          {title}
        </h1>

        <div className="mt-6 flex flex-col items-center gap-1.5">
          <span className="w-80 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent  shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>

          <span className="w-64 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 shadow-[0_0_8px_rgba(255,255,255,0.6)]"></span>

          <span className="w-48 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70 shadow-[0_0_8px_rgba(255,255,255,0.4)]"></span>
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
            &nbsp; {location.pathname}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NextHero;
