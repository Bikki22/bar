import React, { useState } from "react";
import NextHero from "../components/NextHero";
import { ChevronDown, ShoppingBasket, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [activeSort, setActiveSort] = useState("Default sorting");
  const [isSortOpen, setIsSortOpen] = useState(false);

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
    // {
    //   id: 10,
    //   name: "FIREWOOD SELECT",
    //   price: 81.5,
    //   image: "/bottle10.png",
    //   stars: 5,
    // },
    // {
    //   id: 11,
    //   name: "COPPER CASK",
    //   price: 55.0,
    //   image: "/bottle11.png",
    //   stars: 3,
    // },
    // {
    //   id: 12,
    //   name: "BLACK RIDGE",
    //   price: 73.25,
    //   image: "/bottle12.png",
    //   stars: 4,
    // },
    // {
    //   id: 13,
    //   name: "HERITAGE BLEND",
    //   price: 66.99,
    //   image: "/bottle13.png",
    //   stars: 5,
    // },
    // {
    //   id: 14,
    //   name: "DUSTY CELLAR",
    //   price: 44.99,
    //   image: "/bottle14.png",
    //   stars: 2,
    // },
    // {
    //   id: 15,
    //   name: "AGED OAK 12",
    //   price: 99.99,
    //   image: "/bottle15.png",
    //   stars: 5,
    // },
  ];

  return (
    <>
      <NextHero title={"Shop"} />
      <div className="min-h-screen bg-cream p-4 md:p-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 z-10 relative items-start">
          {/* LEFT COLUMN: PRODUCT GRID */}
          <div className="lg:col-span-3 cursor-pointer">
            <div className="flex justify-between items-center mb-8 border-b border-black/10 pb-4">
              <p className="italic text-gray-500">
                Showing all {products.length} results
              </p>

              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-4 bg-[#E7E2DA] px-4 py-2 border-b-2 border-black/10 hover:bg-[#DDD8CF] transition-colors"
                >
                  <span>{activeSort}</span>
                  <ChevronDown size={16} className="opacity-60" />
                </button>
                {isSortOpen && (
                  <ul className="absolute right-0 mt-1 w-56 bg-white shadow-2xl border border-gray-200 z-50 text-sm">
                    {[
                      "Default sorting",
                      "Sort by popularity",
                      "Sort by average rating",
                      "Sort by latest",
                      "Sort by price: low to high",
                    ].map((opt) => (
                      <li
                        key={opt}
                        onClick={() => {
                          setActiveSort(opt);
                          setIsSortOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-300 cursor-pointer transition-colors text-sm"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col items-center"
                >
                  {/* Product Card */}
                  <div className="bg-white p-3 shadow-sm border border-gray-200 w-full flex items-center justify-center relative overflow-hidden">
                    <Link to={`/products/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Hover Add to Cart Button */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end pb-6">
                      <button className="bg-[#B36B5D] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform cursor-pointer">
                        <span>
                          <ShoppingBasket />
                        </span>
                        ADD TO CART
                      </button>
                    </div>

                    {/* Rating Stars */}
                    {product.stars > 0 && (
                      <div className="absolute top-0 rounded-sm hidden gap-1 group-hover:block group-hover:flex w-40 justify-center bg-white/90 px-7 py-1 transition-all">
                        {[...Array(product.stars)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill="#D4AF37"
                            color="#D4AF37"
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <Link to={`/products/${product.id}`}>
                    <h3 className="mt-4 font-bold text-2xl hover:text-coffee tracking-tighter uppercase">
                      {product.name}
                    </h3>
                  </Link>
                  <span
                    className="w-30 my-5 h-1 rounded-full bg-gray-400 relative flex justify-center items-center
                    before:content['']
                    before:absolute
                    before:left-0
                    before:w-full
                    before:h-1
                    before:bg-gray-400"
                  >
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                  </span>
                  <p className="text-coffee font-bold text-3xl py-2 px-6 relative">
                    <span className="text-2xl align-top font-normal absolute top-0 left-0 px-2">
                      $
                    </span>
                    {product.price}
                  </p>
                  <div className="flex gap-2 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-12 sticky top-10 h-fit">
            <section>
              <div className="bg-coffee text-white px-4 py-2 flex justify-between items-center font-bold tracking-widest uppercase">
                <span>Cart</span>
              </div>
              <div className="bg-white/50 p-6 border-b border-black/10">
                <p className="italic text-gray-500 text-sm text-center">
                  No products in the cart.
                </p>
              </div>
            </section>

            <section>
              <div className="bg-coffee text-white px-4 py-2 flex justify-between items-center font-bold tracking-widest uppercase mb-4">
                <span>Price Filter</span>
              </div>
              <div className="px-2">
                <input
                  type="range"
                  className="w-full accent-[#B36B5D]"
                  min="10"
                  max="80"
                />
                <div className="flex justify-between text-sm mt-2 font-bold">
                  <span className="text-black/60 text-lg py-2">
                    Price: $10 — $80
                  </span>
                  <button className="group border-t-4 border-b-4 py-1 px-5 border-coffee hover:border-black">
                    <span className="md:text-xl text-lg uppercase relative font-bold text-coffee group-hover:text-black">
                      filter
                    </span>
                  </button>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-coffee text-white px-4 py-2 flex justify-between items-center font-bold tracking-widest uppercase mb-4">
                <span>Top Products</span>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center group cursor-pointer"
                  >
                    <div className="w-16 h-20 bg-white p-2 border border-gray-200">
                      <img
                        src="./bottle_01_pat.jpg"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase group-hover:text-[#B36B5D]">
                        Salmon 1862
                      </h4>
                      <div className="flex gap-0.5 my-1">
                        <Star size={10} fill="#D4AF37" color="#D4AF37" />
                        <Star size={10} fill="#D4AF37" color="#D4AF37" />
                        <Star size={10} fill="#D4AF37" color="#D4AF37" />
                      </div>
                      <p className="text-[#B36B5D] font-bold">$29.99</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
