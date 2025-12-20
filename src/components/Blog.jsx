import Card from "./Card";
import Slider from "./SliderCard";
import CardSlider from "./SliderCard";

const Blog = () => {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-sm tracking-widest text-stone-700 mb-4">
          <span
            className="relative inline-block w-3 h-3 rounded-full bg-stone-800
            before:content-['']
            before:absolute
            before:w-2 before:h-2
            before:rounded-full
            before:bg-stone-800
            before:-left-3
            before:top-1/2
            before:-translate-y-1/2

            after:content-['']
            after:absolute
            after:w-2 after:h-2
            after:rounded-full
            after:bg-stone-800
            after:-right-3
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

          <h2 className="text-md md:text-2xl lg:text-3xl font-semibold uppercase">
            All Day - Every day
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
            className="md:text-8xl text-7xl lg:text-9xl font-black uppercase tracking-tight text-secondary
             drop-shadow-[4px_4px_0px_rgba(180,130,90,0.8)]"
          >
            OUR Blog
          </h3>
        </div>

        <div className="w-full">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Blog;
