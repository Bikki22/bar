import React from "react";

const BeerTank = () => {
  return (
    <section className="bg-orange bg-[url('./paper-background.jpg')] p-12 md:p-20 relative text-secondary">
      <div className="absolute inset-4 border-3 border-dotted border-white/40 pointer-events-none"></div>

      <div className="md:max-w-7xl w-full mx-auto md:flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-5">
            <span className="uppercase font-semibold text-lg md:text-3xl tracking-tight">
              Quality in a year
            </span>
            <span
              className="relative flex-grow h-1 bg-stone-800 gap-1 left-2
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

          <h1 className="md:text-9xl text-4xl font-bold uppercase text-center leading-none px-2">
            Brewery
          </h1>

          <div className="bg-contain bg-white/90 inline-block px-8 py-1">
            <p className="font-bold uppercase tracking-normal md:text-2xl text-sm ">
              Tempor tincidunt sapien a aliq in
            </p>
            <p className="font-bold uppercase tracking-normal md:text-2xl text-sm">
              eleifend pellentesque
            </p>
          </div>

          <p className="max-w-md text-xl opacity-90 text-primary ">
            Tempor tincidunt sapien a aliquam. Nam eleifend dui. Pellentesque
            sagittis, ante vitae vulputate non imperdiet, mauris nunc sagittis
            nulla convallis felis.
          </p>

          <div className="pt-4">
            <button className="border-t-4 border-b-4 py-3 px-5 border-white/60 ">
              <span
                className="md:text-2xl text-xl text-white/60 uppercase relative
                before:content-['']
                before:absolute
                before:w-2 before:h-2
                before:rounded-full
                before:bg-white/60
                before:top-2
                before:-left-5

                after:content-['']
                after:absolute
                after:w-2 after:h-2
                after:rounded-full
                after:bg-white/60
                after:top-2
                after:-right-5
              "
              >
                Discover
              </span>
            </button>
          </div>
          <div className="mt-14 flex flex-col items-center border-t border-[#2b1f1a]/20 pt-6">
            <img
              src="./operating-wordwide.png"
              alt=""
              width={750}
              height={200}
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="./beer-tank.png"
            alt="Brewery Vat"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BeerTank;
