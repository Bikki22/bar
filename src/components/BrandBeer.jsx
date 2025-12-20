import React from "react";

const BrandBeer = () => {
  return (
    <div
      className="relative bg-[#2a1d16] p-16 text-white overflow-hidden

        before:content-['★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★']
        before:absolute
        before:top-2
        before:left-0
        before:w-full
        before:text-center
        before:text-white
        before:text-xs
        before:hidden
        before:md:block
        before:tracking-[6px]

        after:content-['★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★']
        after:absolute
        after:bottom-2
        after:left-0
        after:w-full
        after:text-center
        after:text-white
        after:hidden
        after:md:block
        after:text-xs
        after:tracking-[6px]"
    >
      <span className="absolute hidden md:block  left-2 top-0 h-full flex flex-col justify-center text-white text-xs leading-[14px]">
        ★<br />★<br />★<br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br />
      </span>

      <span className="absolute hidden md:block  right-2 top-0 h-full flex flex-col justify-center text-white text-xs leading-[14px]">
        ★<br />★<br />★<br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br />★<br /> ★<br />★<br />★
        <br />★<br />★<br />★<br />★<br />★<br />★<br />
      </span>

      <div className="flex justify-center items-center opacity-50">
        <img src="./brandbeer.png" width={1100} height={1080} alt="" />
      </div>
    </div>
  );
};

export default BrandBeer;
