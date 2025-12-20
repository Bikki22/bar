import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div className="w-full lg:h-[945px] h-90 inset-0 flex justify-center items-center bg-yellow-500">
      <div className="absolute top-0 opacity-20"></div>
      <div
        className="absolute top-0 left-0 inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5) 100%)",
        }}
      ></div>
      <Carousel />
    </div>
  );
};

export default Hero;
