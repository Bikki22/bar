import React from "react";

const Button = ({ content }) => {
  return (
    <button className="group border-t-4 border-b-4 py-3 px-5 border-orange hover:border-black">
      <span
        className="md:text-xl text-lg uppercase relative font-bold text-orange 
          group-hover:text-black

          before:content-['']
          before:absolute
          before:w-2 before:h-2
          before:rounded-full
          before:bg-orange
          before:top-2
          before:-left-5
          group-hover:before:bg-black

          after:content-['']
          after:absolute
          after:w-2 after:h-2
          after:rounded-full
          after:bg-orange
          after:top-2
          after:-right-5
          group-hover:after:bg-black
        "
      >
        {content}
      </span>
    </button>
  );
};

export default Button;
