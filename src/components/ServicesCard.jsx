import React from "react";

const ServicesCard = ({ item }) => {
  return (
    <div className="flex items-center justify-center py-12 mt-6 w-full">
      <div className="relative space-y-5">
        <div className="relative mb-18">
          <div className="absolute inset-0 rounded-full bg-[#d2c8b9] transform scale-115"></div>

          <div className="absolute inset-0 rounded-full bg-white transform scale-103"></div>

          <div className="relative w-84 h-84 rounded-full overflow-hidden border-0 border-transparent shadow-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="group bg-[url('./dust.png')] px-8 py-2 mb-3 relative cursor-pointer">
          <div
            className="bg-[#4c241b] w-7 h-5 absolute right-7 -top-3 z-10
                hidden group-hover:block
                [clip-path:polygon(1%_100%,0_0,100%_100%)]"
          ></div>

          <div
            className="bg-[#4c241b] w-5 h-6 absolute left-7.5 -top-3 z-10
            hidden group-hover:block
            [clip-path:polygon(0_100%,100%_0,100%_100%)]"
          ></div>

          <svg
            className="absolute -left-2 top-3 -translate-y-1/2 z-0
            hidden group-hover:block"
            width="78"
            height="48"
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
                <rect width="60" height="50" fill="coffee" />

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
            className="absolute -right-2.5 top-2 -translate-y-1/2 fill-coffee
            hidden group-hover:block"
            width="68"
            height="52"
            viewBox="0 0 78 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.3,0.2l-12,25.9l12,25.4H0.4V0.2h76.9z"
              className="#bb7037"
            />
          </svg>

          <h3
            className="text-xl font-bold text-white/80 tracking-wide uppercase py-3 bg-orange
    z-10 group-hover:bg-coffee"
          >
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
