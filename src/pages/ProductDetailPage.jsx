import React from "react";
import { useLocation, useParams } from "react-router-dom";
import NextHero from "../components/NextHero";

const ProductDetailPage = () => {
  const products = [
    {
      id: 1,
      name: "DARK BOTTLE",
      price: 47.99,
      image: "./bottle_01_pat.jpg",
      stars: 0,
    },
    {
      id: 2,
      name: "NO NAME WHISKEY",
      price: 75.99,
      image: "./bottle_01_pat.jpg",
      stars: 5,
    },
    {
      id: 3,
      name: "PLACE",
      price: 21.99,
      image: "./bottle_01_pat.jpg",
      stars: 3,
    },

    {
      id: 4,
      name: "GOLD RESERVE",
      price: 89.99,
      image: "./bottle_01_pat.jpg",
      stars: 4,
    },
    {
      id: 5,
      name: "ROYAL OAK",
      price: 64.5,
      image: "./bottle_01_pat.jpg",
      stars: 3,
    },
    {
      id: 6,
      name: "SMOKED BARREL",
      price: 92.0,
      image: "./bottle_01_pat.jpg",
      stars: 5,
    },
    {
      id: 7,
      name: "MIDNIGHT CASK",
      price: 58.75,
      image: "./bottle_01_pat.jpg",
      stars: 4,
    },
    {
      id: 8,
      name: "SILVER LABEL",
      price: 49.99,
      image: "./bottle_01_pat.jpg",
      stars: 2,
    },
    {
      id: 9,
      name: "OLD TOWN BLEND",
      price: 69.99,
      image: "./bottle_01_pat.jpg",
      stars: 4,
    },
  ];
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  const productById = products.find((item) => item.id !== id);

  return (
    <div>
      <NextHero title={"Place"} />
    </div>
  );
};

export default ProductDetailPage;
