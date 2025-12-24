import React from "react";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import BeerTank from "../components/BeerTank";
import BeerStore from "../components/BeerStore";
import BrandBeer from "../components/BrandBeer";
import Blog from "../components/Blog";
import FindUs from "../components/FindUs";
import FriendSection from "../components/FriendSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <BeerTank />
      <BeerStore />
      <BrandBeer />
      <Blog />
      <FindUs />
      <FriendSection />
    </>
  );
};

export default HomePage;
