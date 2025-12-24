import React, { useState } from "react";
import NextHero from "../components/NextHero";
import ServicesCard from "../components/ServicesCard";
import Button from "../components/Button";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("WHISKEY");

  const foodItems = [
    {
      name: "Cheese Loaded Fries",
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=400&fit=crop",
    },
    {
      name: "BBQ Chicken Wings",
      image:
        "https://images.unsplash.com/photo-1600891965050-4d3f1c1b5c56?w=400&h=400&fit=crop",
    },
    {
      name: "Chivas Regal 12",
      image:
        "https://images.unsplash.com/photo-1612810806546-9c6a0f5bd8b7?w=400&h=400&fit=crop",
    },
    {
      name: "Glenfiddich 12",
      image:
        "https://images.unsplash.com/photo-1600180758634-6f79a45a15e5?w=400&h=400&fit=crop",
    },
    {
      name: "Classic Margarita",
      image:
        "https://images.unsplash.com/photo-1582457579695-4a3d98f5c9d4?w=400&h=400&fit=crop",
    },
    {
      name: "Old Fashioned",
      image:
        "https://images.unsplash.com/photo-1615631013302-9f6d9d0eec5d?w=400&h=400&fit=crop",
    },
    {
      name: "Jack Daniel’s Old No.7",
      category: "Whiskey",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=400&h=400&fit=crop",
    },
    {
      name: "Jameson Irish Whiskey",
      category: "Whiskey",
      price: 9.5,
      image:
        "https://images.unsplash.com/photo-1589987607627-616cac9a0a35?w=400&h=400&fit=crop",
    },
    {
      name: "Mojito",
      category: "Drink",
      price: 6.99,
      image:
        "https://images.unsplash.com/photo-1558640479-824d3a1f61c1?w=400&h=400&fit=crop",
    },
  ];

  const drinks = {
    WHISKEY: {
      title: "MAURIS CURSUS GET MAURIS CURSUS, EU ULLAMCORPER",
      description:
        "Morbi tempor tincidunt sapien a aliquam. Nam in eleifend dui. Pellentesque sagittis, ante vitae vulputate imperdiet mauris.",
      points: [
        "Pellentesque sagittis vitae vulputate",
        "Imperdiet mauris sagittis nullavitae",
        "Aenean aliquam metus dui porttitor",
      ],
      image: "./wine.jpg",
    },
    RUM: {
      title: "MOBILE ULLAMCORPER CURSUS GET MAURIS CURSUS, EU FELIS FAUCIBUS",
      description:
        "Morbi tempor tincidunt sapien a aliquam. Nam in eleifend dui. Pellentesque sagittis, ante vitae vulputate imperdiet mauris. Quam risus orci sit ornare malesuada, etiam dui tempor pellentesque.",
      points: [
        "Pellentesque sagittis vitae vulputate",
        "Imperdiet mauris sagittis nullavitae",
        "Aenean aliquam metus dui porttitor",
      ],
      image: "./rum.jpg",
    },
    VODKA: {
      title: "LET THE GAME BEGIN, EU ULLAMCORPER FELIS FAUCIBUS",
      description:
        "Morbi tempor tincidunt sapien a aliquam. Nam in eleifend dui. Pellentesque sagittis, ante vitae vulputate imperdiet mauris. Quam risus orci sit ornare malesuada, etiam dui tempor pellentesque.",
      points: [
        "Pellentesque sagittis vitae vulputate",
        "Imperdiet mauris sagittis nullavitae",
        "Aenean aliquam metus dui porttitor",
      ],
      image: "./vodka.jpg",
    },
    LIQUIR: {
      title: "BRANDING CURSUS GET MAURIS CURSUS, EU ULLAMCORPER FELIS",
      description:
        "Morbi tempor tincidunt sapien a aliquam. Nam in eleifend dui. Pellentesque sagittis, ante vitae vulputate imperdiet mauris. Quam risus orci sit ornare malesuada, etiam dui tempor pellentesque.",
      points: [
        "Pellentesque sagittis vitae vulputate",
        "Imperdiet mauris sagittis nullavitae",
        "Aenean aliquam metus dui porttitor",
      ],
      image: "./liquir.jpg",
    },
  };

  const current = drinks[activeTab];

  return (
    <div className="">
      <NextHero title={"Our services"} />
      <div className="text-center bg-cream ">
        <div className="max-w-7xl mx-auto py-20 px-6 ">
          <div className="flex items-center justify-center gap-4 text-sm tracking-widest mb-4">
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

            <h2 className="text-md md:text-3xl text-xl font-semibold uppercase text-secondary">
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
              className="md:text-9xl text-4xl font-bold uppercase tracking-normal text-secondary 
             drop-shadow-[4px_4px_0px_rgba(180,130,90,0.8)]"
            >
              Drunk at the party
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3">
            {foodItems.map((item, index) => (
              <ServicesCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-coffee text-center">
        <div className="max-w-7xl mx-auto py-20 px-6 space-y-4 ">
          <div className="flex items-center justify-center gap-4 text-sm tracking-widest mb-4">
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

            <h2 className="text-md md:text-3xl text-xl font-semibold uppercase text-secondary">
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
              className="md:text-9xl text-4xl font-bold uppercase tracking-normal text-white/80 
             drop-shadow-[4px_4px_0px_rgba(180,130,90,0.8)]"
            >
              Relax
            </h3>
          </div>
          <div className=" w-full overflow-hidden p-5">
            <div className="flex justify-center items-center border-4 md:p-3 sm:px-1  border-cream">
              <img
                src="./wine.jpg"
                alt=""
                className="object-cover h-full w-auto"
              />
            </div>
            <button className="group border-t-4 border-b-4 py-2 px-5 border-white/60 hover:border-black mt-6">
              <span
                className="md:text-4xl text-lg uppercase relative font-bold text-white/60 
                  group-hover:text-black

                  before:content-['']
                  before:absolute
                  before:w-2 before:h-2
                  before:rounded-full
                  before:bg-white/60
                  before:top-2
                  before:-left-5
                  group-hover:before:bg-black

                  after:content-['']
                  after:absolute
                  after:w-2 after:h-2
                  after:rounded-full
                  after:bg-white/60
                  after:top-2
                  after:-right-5
                  group-hover:after:bg-black
        "
              >
                Learn more
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-cream py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto bg-[#DED9D1] shadow-xl border border-black/5">
          <nav className="flex flex-nowrap items-center border-b border-black/10 md:w-full lg:w-full w-full">
            {Object.keys(drinks).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`md:px-8 md:py-5 px-2 py-6 md:text-xl text-sm  font-bold tracking-[0.2em] transition-all
                ${
                  activeTab === tab
                    ? "bg-[#E7E2DA] text-black shadow-inner"
                    : "text-gray-600 hover:text-black hover:bg-[#E7E2DA]/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative bg-white p-4 shadow-2xl border border-gray-200 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="overflow-hidden bg-gray-100 aspect-4/3">
                <img
                  src={current.image}
                  alt={activeTab}
                  className="w-full h-full object-cover mix-multiply"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <h2 className="bg-[#B36B5D] text-white p-4 text-2xl md:text-3xl font-bold leading-tight uppercase shadow-sm">
                {current.title}
              </h2>

              <p className="text-[#4A4A4A] text-lg leading-relaxed">
                {current.description}
              </p>

              <ul className="space-y-4 border-t border-black/10 pt-6">
                {current.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-700 italic font-medium"
                  >
                    <span className="text-[#B36B5D] font-bold text-xl">➥</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="fixed bottom-10 right-10 opacity-30 hover:opacity-100 transition-opacity hidden md:block">
          <div className="w-12 h-12 bg-black flex flex-col items-center justify-center text-white cursor-pointer">
            <span className="text-xs">▲</span>
            <div className="w-6 h-[2px] bg-white/50 mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
