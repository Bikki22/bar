import React, { useState, useRef } from "react";
import { Star } from "lucide-react";

const cardsData = [
  { img: "./icebeer1.jpg", title: "Fusce Nec Morbi" },
  { img: "./icebeer.jpg", title: "Fusce Nec Morbi" },
  { img: "./icebeer.jpg", title: "Fusce Nec Morbi" },
  { img: "./icebeer1.jpg", title: "Fusce Nec Morbi" },
  { img: "./icebeer.jpg", title: "Fusce Nec Morbi" },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDragging.current = false);
  const handleMouseUp = () => (isDragging.current = false);

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleDotClick = (index) => {
    setCurrent(index);
    const cardWidth = sliderRef.current.firstChild.offsetWidth + 16;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.firstChild.offsetWidth + 16;
    const index = Math.round(sliderRef.current.scrollLeft / cardWidth);
    setCurrent(index);
  };

  return (
    <div className="w-full">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing 
                   [&::-webkit-scrollbar]:hidden [ms-overflow-style:none] [scrollbar-width:none]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 md:w-96 w-90 sm:w-lg p-2 rounded-lg overflow-hidden"
          >
            <img
              src={card.img}
              alt=""
              className="object-cover border-10 border-white rounded w-full h-auto"
            />
            <h1 className="text-xl text-center uppercase py-3">{card.title}</h1>
            <p className="text-black text-center text-sm">
              Massa scelerisque elit at ut id, tortor malesuada pulvinar sed
              augue untrices wise elit, dignissim nascetural vel wise
            </p>
            <button className="border-t-4 border-b-4 py-2 px-5 border-black mt-4 tracking-tighter w-full">
              <span className="text-sm text-black uppercase relative">
                Read more
              </span>
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-5">
        {cardsData.map((_, index) => (
          <Star
            key={index}
            className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${
              index === current
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
