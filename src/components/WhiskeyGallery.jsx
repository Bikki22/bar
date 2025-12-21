import React, { useState } from "react";

const itemsData = [
  {
    id: 1,
    category: "ENGLISH WHISKY",
    title: "London Malt",
    img: "https://picsum.photos/400/500",
  },
  {
    id: 2,
    category: "IRISH WHISKEY",
    title: "Dublin Cask",
    img: "https://picsum.photos/400/300",
  },
  {
    id: 3,
    category: "SCOTTISH WHISKY",
    title: "Islay Peat",
    img: "https://picsum.photos/400/600",
  },
  {
    id: 4,
    category: "ENGLISH WHISKY",
    title: "Yorkshire Gold",
    img: "https://picsum.photos/400/400",
  },
  {
    id: 5,
    category: "IRISH WHISKEY",
    title: "Galway Bay",
    img: "https://picsum.photos/400/550",
  },
  {
    id: 6,
    category: "SCOTTISH WHISKY",
    title: "Highland Spirit",
    img: "https://picsum.photos/400/350",
  },
  {
    id: 7,
    category: "SCOTTISH WHISKY",
    title: "Highland Spirit",
    img: "https://picsum.photos/400/350",
  },
  {
    id: 8,
    category: "SCOTTISH WHISKY",
    title: "Highland Spirit",
    img: "https://picsum.photos/400/350",
  },
  {
    id: 9,
    category: "SCOTTISH WHISKY",
    title: "Highland Spirit",
    img: "https://picsum.photos/400/350",
  },
];

const WhiskeyGallery = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredItems =
    activeTab === "ALL"
      ? itemsData
      : itemsData.filter((item) => item.category === activeTab);

  return (
    <div className="w-full bg-cream py-20 px-4 md:px-10 bg-[url('./dust.png')]">
      <div className="flex flex-wrap justify-center items-center gap-6 mb-16 border-t-4 border-b-4 border-black/10 w-fit translate-x-1/2">
        {["ALL", "ENGLISH WHISKY", "IRISH WHISKEY", "SCOTTISH WHISKY"].map(
          (tab, index, arr) => (
            <React.Fragment key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`text-lg md:text-xl py-6 font-bold uppercase tracking-widest transition-all duration-300 border-t-6 border-b-6
                ${
                  activeTab === tab
                    ? "text-coffee border-coffee"
                    : "text-black hover:text-[#8B2B1A] hover:border-[#8B2B1A]"
                }`}
              >
                {tab}
              </button>
              {index !== arr.length - 1 && (
                <span className="text-gray-400 hidden md:block">•</span>
              )}
            </React.Fragment>
          )
        )}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid relative group cursor-pointer"
          >
            <div className="bg-white p-3 shadow-xl relative border-[1px] border-black/5">
              <div className="absolute top-2 left-2 right-2 bottom-2 border-dashed border-[1px] border-black/10 pointer-events-none"></div>

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Bottom "Film Strip" Style Dots (Optional) */}
              <div className="flex justify-between mt-2 px-1">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                  <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                  <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* RED HOVER OVERLAY */}
            <div className="absolute inset-0 bg-[#8B2B1A]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white m-3">
              <div className="border border-white/40 px-4 py-1 mb-2">
                <span className="text-xs tracking-tighter uppercase">
                  {item.category}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-center px-4">
                {item.title}
              </h3>

              {/* Ribbon Graphic */}
              <div className="mt-4 w-12 h-[1px] bg-white/50"></div>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      <div className="flex justify-center mt-16">
        <button className="px-10 py-3 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
          Load More
        </button>
      </div>
    </div>
  );
};

export default WhiskeyGallery;
