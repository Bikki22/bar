import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[url('./dust.png')] bg-[#2a211c] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-8 py-14">
        <div className="flex flex-col justify-center items-center">
          <div className="uppercase relative font-semibold mb-6 flex items-center justify-center gap-2 ">
            <svg
              className="absolute -left-10"
              width="50"
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
                  <rect width="60" height="50" fill="#e8dfce" />

                  <image
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
            <h2 className="px-2 text-center text-cream">Recent Posts</h2>
            <svg
              className="absolute -right-12 fill-cream"
              width="50"
              height="42"
              viewBox="0 0 78 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M77.3,0.2l-12,25.9l12,25.4H0.4V0.2h76.9z"
                className="#bb7037"
              />
            </svg>
          </div>

          <div className="space-y-8 mt-3">
            <div className="flex gap-4">
              <img
                src="./icebeer.jpg"
                className="w-14 h-14 object-cover border-5 border-cream"
              />
              <div className="bg-[url('./dust.png')]">
                <h1 className="font-sans text-md font-bold uppercase tracking-wide text-cream px-2">
                  <span className="bg-[#8b3d2b] px-3 py-1 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                    Donec tincidunt purus sit
                    <br />
                    amet elementum
                  </span>
                </h1>

                <p className="mt-6 font-serif text-md font-semibold tracking-wide italic text-cream px-3">
                  Massa scelerisque elit at ut id, tortor malesuada pulvinar
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src="./icebeer1.jpg"
                className="w-14 h-14 object-cover border-5 border-cream"
              />
              <div>
                <h1 className="font-sans text-md font-bold uppercase tracking-wide text-cream px-2">
                  <span className="bg-[#8b3d2b] px-3 py-1 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                    Pellentes sagitis ante
                    <br />
                    vulputate imper
                  </span>
                </h1>

                <p className="mt-6 font-serif text-md font-semibold tracking-wide italic text-cream px-3">
                  Massa scelerisque elit at ut id, tortor malesuada pulvinar ...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center flex flex-col justify-center items-center w-90 mt-8">
          <img src="./vcproduct.png" width={200} height={200} alt="" />

          <p className="uppercase text-xl tracking-tighter mb-4 font-semibold text-cream">
            ALIQUAM UT EX HENDRERIT, CONVALLIS TELLUS CONSECTETUR HENDRERIT
          </p>

          <p className="text-lg opacity-80 text-cream">
            250 Biscayne Blvd. (North) 11st Floor
            <br />
            New World Tower Miami, Florida 33148
          </p>

          <p className="mt-3 text-cream text-lg">(305) 333-5522</p>
          <p className="opacity-80 text-lg text-cream">info@example.com</p>

          <div className="flex justify-center gap-4 mt-6">
            <Facebook className="size-12 border-2 bg-cream px-2 hover:bg-transparent hover:text-cream" />
            <Twitter className="size-12 border-2 bg-cream px-2 hover:bg-transparent hover:text-cream " />
            <Youtube className="size-12 border-2 bg-cream px-2 hover:bg-transparent hover:text-cream " />
            <Linkedin className="size-12 border-2 bg-cream px-2 hover:bg-transparent hover:text-cream " />
          </div>
        </div>

        <div className="w-full flex flex-col md:col-span-2 lg:col-span-1 justify-center items-center mt-7">
          <div className="uppercase relative font-semibold mb-6 flex items-center gap-2">
            <svg
              className="absolute left-0"
              width="50"
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
                  <rect width="60" height="50" fill="secondary" />

                  <image
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
            <h2 className="px-12 text-center text-cream text-2xl">
              Get in touch
            </h2>
            <svg
              className="absolute -right-2 fill-cream"
              width="50"
              height="42"
              viewBox="0 0 78 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M77.3,0.2l-12,25.9l12,25.4H0.4V0.2h76.9z"
                className="#bb7037"
              />
            </svg>
          </div>

          <form className="space-y-4 md:w-90">
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-cream text-black text-xl px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-cream text-black text-xl px-4 py-2"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full bg-cream text-black px-4 py-2"
            ></textarea>

            <button className="border-t-5 border-b-5 py-3 px-5 border-cream ">
              <span
                className="text-2xl text-cream uppercase relative
                before:content-['']
            before:absolute
            before:w-2 before:h-2
            before:rounded-full
            before:bg-cream
            before:top-2
            before:-left-5

            after:content-['']
            after:absolute
            after:w-2 after:h-2
            after:rounded-full
            after:bg-cream
            after:top-2
            after:-right-5

              "
              >
                send
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="text-center  bg-secondary opacity-80  py-3 border-t-3">
        <p className="text-xl text-cream">
          Vintclub – Retro Style WordPress Theme
        </p>
      </div>
    </footer>
  );
};

export default Footer;
