const FriendSection = () => {
  return (
    <div className="w-full p-2">
      <div className="relative flex flex-col items-center justify-center border-y-6 border-x-6 border-orange bg-[#d9d3c1] px-6 py-4 md:flex-row md:py-8">
        <div className="pointer-events-none absolute inset-0 opacity-20"></div>

        <div className="relative flex md:flex-col lg:flex-row flex-col items-center gap-2 text-center  md:gap-8">
          <h2 className="text-xl tracking-tighter text-stone-800 md:text-3xl uppercase font-sans font-bold">
            Become a Friend of Vintclub
          </h2>

          <div className="block text-[#2d2926]">
            <svg className="w-12 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5.5L12.1 1.9l8.6 8.6H0v2h20.7l-8.6 8.6 1.4 1.4L23.5 12z" />
            </svg>
          </div>
          <button className="group border-t-5 border-b-5 py-1 px-5 border-stone-800 font-bold hover:border-orange">
            <span
              className="lg:text-2xl md:text-xl text-stone-800 uppercase relative 
               group-hover:text-orange
               before:content-['']
               before:absolute
               before:w-2 before:h-2
               before:rounded-full
               before:bg-stone-800
               before:top-2
               before:-left-5
               group-hover:before:bg-orange
               after:content-['']
               after:absolute
               after:w-2 after:h-2
               after:rounded-full
               after:bg-stone-800
               after:top-2
               after:-right-5
               group-hover:after:bg-orange
    "
            >
              Join our mailing list
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendSection;
