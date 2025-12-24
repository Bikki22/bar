import { ArrowRight } from "lucide-react";
import Testimonial from "../components/Testimonial";
import NextHero from "../components/NextHero";

const Pages = () => {
  const teamMembers = [
    {
      name: "ROBIN SMITH",
      role: "Barman",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "DAVID WHITE",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "ALEX FOREST",
      role: "Sales Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "ROBIN SMITH",
      role: "Barman",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "DAVID WHITE",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "ALEX FOREST",
      role: "Sales Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];
  return (
    <section className="relative w-full bg-cover bg-center">
      <NextHero title={"Our team"} />

      <div
        className="bg-primary "
        style={{
          backgroundImage: "url('/dust.png')", // your hero image
        }}
      >
        <div className="max-w-7xl mx-auto py-20 px-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm tracking-widest text-stone-700 mb-4">
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

            <h2 className="text-md md:text-3xl text-xl font-semibold uppercase">
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
              className="md:text-9xl text-4xl font-bold uppercase tracking-normal text-coffee
             drop-shadow-[4px_4px_0px_rgba(180,130,90,0.8)]"
            >
              Meet our team
            </h3>
          </div>
          <Testimonial teamMembers={teamMembers} />
        </div>
      </div>
    </section>
  );
};

export default Pages;
