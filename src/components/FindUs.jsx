import { BeerIcon, Mail, Phone } from "lucide-react";
import React from "react";

const FindUs = () => {
  return (
    <section className="w-full min-h-screen bg-orange px-10 py-20 text-[#2b1a12] overflow-hidden">
      <div className="md:max-w-7xl w-90 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span
              className="relative md:inline-block lg:hidden  w-3 h-3 rounded-full bg-stone-800
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
              className="relative flex-grow md:block lg:hidden  h-1 bg-stone-800 gap-1
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

            <h3 className="uppercase tracking-tighter font-bold md:text-3xl text-lg">
              Where you find us
            </h3>
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

          <h1 className="md:text-8xl text-4xl text-center lg:text-9xl font-extrabold leading-none mb-6">
            LOCATION
          </h1>

          <div className="relative mb-10 flex justify-center items-center">
            <div
              className="bg-[#716a5e] w-7 h-5 inline-block absolute right-12.5 -top-5 z-10
 [clip-path:polygon(1%_100%,0_0,100%_100%)]"
            ></div>

            <div className="bg-[#b3a897] px-10 py-3 italic text-2xl md:w-xl w-80 z-10">
              <h3 className="md:text-3xl text-xl italic flex justify-end">
                We Are Happy To See You!
              </h3>
            </div>
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
                  <rect width="60" height="50" fill="cream" />

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
              className="absolute -right-0 top-1 -translate-y-1/2 fill-[#b3a897]"
              width="78"
              height="52"
              viewBox="0 0 78 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M77.3,0.2l-12,25.9l12,25.4H0.4V0.2h76.9z"
                className="#bb7037"
              />
            </svg>
          </div>

          <div className="space-y-3 text-lg ">
            <div className="flex gap-4 items-start">
              <span>
                <BeerIcon />
              </span>
              <p className="text-xl text-primary">
                250 Biscayne Blvd. (North) 11st Floor New
                <br />
                World Tower Miami, Florida 33148
              </p>
            </div>
            <div className="flex justify-normal gap-3">
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
            </div>
            <div className="flex gap-4">
              <span>
                <Phone />
              </span>
              <p className="text-xl text-primary">(305) 333–5522</p>
            </div>
            <div className="flex justify-normal gap-3">
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
              <span className="w-1 h-1 bg-primary rounded-md inline-block"></span>
            </div>
            <div className="flex gap-4">
              <span>
                <Mail className="text-black" />
              </span>
              <p className="text-xl text-primary">info@your-site.com</p>
            </div>
          </div>

          <button className="border-t-5 border-b-5 py-3 px-5 border-primary mt-6 ">
            <span
              className="md:text-2xl text-xl text-primary uppercase relative
                before:content-['']
            before:absolute
            before:w-2 before:h-2
            before:rounded-full
            before:bg-primary
            before:top-2
            before:-left-5

            after:content-['']
            after:absolute
            after:w-2 after:h-2
            after:rounded-full
            after:bg-primary
            after:top-2
            after:-right-5

              "
            >
              Let's us know
            </span>
          </button>
        </div>

        <div className="relative">
          <div className="md:w-full md:h-[500px] w-80 h-96 shadow-xl md:mt-20 lg:mt-45">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?q=Miami&t=&z=10&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
