const Card = ({ title, src, date, description }) => {
  return (
    <div className="">
      <div className="relative">
        <span className="relative md:w-xl lg:w-80 inline-block bg-orange text-white px-14 py-2 text-2xl font-semibold uppercase">
          <div
            className="bg-[#8b572a] w-6 h-4 inline-block absolute -left-1 -bottom-4 z-10
          [clip-path:polygon(100%_0,0_0,100%_100%)]"
          ></div>
          <div
            className="bg-[#8b572a] w-6 h-4 inline-block absolute -right-0 -bottom-4 z-10
           [clip-path:polygon(0_100%,_0_0,_100%_0)]"
          ></div>
          {title}
          <svg
            className="absolute left-[-40px] top-11 -translate-y-1/2"
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
            className="absolute right-[-40px] top-11 -translate-y-1/2 fill-orange"
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
        </span>
      </div>
      <div className="relative w-50 h-70 mx-auto mb-4 ">
        <img
          src={src}
          className="relative z-10 mx-auto top-8"
          alt="Kasteel Beer"
        />
      </div>

      <div className=" w-full h-10 flex items-center gap-4">
        <span
          className="relative flex-grow bg-stone-800
                before:content-['']
                before:absolute
                before:left-0
                before:-top-1.5
                before:h-1
                before:w-full
                before:bg-orange

                after:content-['']
                after:absolute
                after:right-0
                after:-bottom-0.5
                after:h-0.5
                after:w-full
                after:bg-orange
  "
        ></span>

        <h3 className="text-3xl italic whitespace-nowrap text-secondary">
          {date}
        </h3>

        <span
          className="relative flex-grow bg-stone-800
              before:content-['']
              before:absolute
              before:right-0
              before:-top-1.5
              before:h-1
              before:w-full
              before:bg-orange

              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-0.5
              after:h-0.5
              after:w-full
              after:bg-orange
  "
        ></span>
      </div>

      <div className="w-full flex justify-center items-center">
        <p className="text-black text-xl leading-relaxed mt-3 w-75 text-center">
          {description}
        </p>
      </div>

      <button
        className="group relative border-t-4 border-b-4 py-3 px-5 w-full mt-5 font-bold
             border-orange hover:border-black

             before:content-['']
             before:absolute
             before:w-full
             before:h-0.5
             before:bg-orange
             before:-top-2
             before:left-0
             group-hover:before:bg-black"
      >
        <span
          className="text-2xl text-orange uppercase relative font-bold
               group-hover:text-black

               before:content-['']
               before:absolute
               before:w-2 before:h-2
               before:rounded-full
               before:bg-orange
               before:top-2
               before:-left-6
               group-hover:before:bg-black

               after:content-['']
               after:absolute
               after:w-2 after:h-2
               after:rounded-full
               after:bg-orange
               after:top-2
               after:-right-6
               group-hover:after:bg-black"
        >
          Read More
        </span>
      </button>
    </div>
  );
};

export default Card;
