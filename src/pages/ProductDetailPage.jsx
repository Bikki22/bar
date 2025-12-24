import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import NextHero from "../components/NextHero";
import place from "../assets/place.jpg";
import { Search, ShoppingBasket, Star } from "lucide-react";
import bottle from "../assets/bottle_01_pat.jpg";

const ProductDetailPage = () => {
  const topProducts = [
    {
      name: "Salmon 1862",
      star: 5,
      pastPrice: 30,
      price: 29.99,
    },
    {
      name: "Salmon 1862",
      star: 5,
      pastPrice: 30,
      price: 29.99,
    },
    {
      name: "Salmon 1862",
      star: 5,
      pastPrice: 30,
      price: 29.99,
    },
    {
      name: "Salmon 1862",
      star: 5,
      pastPrice: 30,
      price: 29.99,
    },
  ];

  const [cart, setCart] = useState([]);

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
  ];

  const reviews = [
    {
      name: "Magnus",
      date: "June 7, 2013",
      comment: "I like the logo but not the color.",
      rating: 3,
      image: "./men.jpeg",
    },
    {
      name: "Maria",
      date: "June 7, 2013",
      comment: "Three letters, one word: WOO!",
      rating: 5,
      image: "",
    },
  ];

  const [activeTab, setActiveTab] = useState("Description");

  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  const productById = products.find((item) => item.id !== id);

  return (
    <div className="w-full bg-cream">
      <NextHero title={"Place"} />
      <div className="max-w-7xl mx-auto py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-stone-300 cursor-pointer">
          <div className="col-span-2 related">
            <div className="flex justify-between gap-6">
              <div className="relative bg-orange w-auto h-[400px] overflow-hidden flex justify-center items-center">
                <img
                  src={place}
                  alt="Product"
                  width={700}
                  className="h-96 object-contain drop-shadow-2xl hover:scale-125 transition-all"
                />
                <button className="absolute top-4 right-4 bg-white/20 p-2 rounded hover:bg-white/40">
                  <Search />
                </button>
              </div>

              <div className="w-full">
                <h1 className="text-5xl font-bold text-stone-800 mb-2 uppercase tracking-tight">
                  {productById.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-yellow-500 text-xl">★★★★☆</div>
                  <span className="text-stone-500 text-xl">
                    / 2 Reviews /
                    <span className="text-green-700">In Stock</span>
                  </span>
                </div>
                <p className="text-4xl font-bold text-orange px-6 py-2 relative">
                  <span className="absolute top-0 left-0">$</span>21.99
                </p>
                <p className="text-stone-600 text-xl mb-8 px-3 border-t border-stone-300 pt-4">
                  Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>

                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value="1"
                    className="w-16 bg-black/10 p-2 text-center outline-none"
                  />
                  <button
                    className="group border-t-4 border-b-4 py-3 px-5 border-orange group-hover:border-coffee hover:cursor-pointer"
                    onClick={() => setCart(productById)}
                  >
                    <span
                      className="md:text-xl text-lg uppercase relative font-bold text-orange 
                    group-hover:text-coffee

                    before:content-['']
                    before:absolute
                    before:w-2 before:h-2
                    before:rounded-full
                    before:bg-orange
                    before:top-2
                    before:-left-5
                    group-hover:before:bg-coffee

                    after:content-['']
                    after:absolute
                    after:w-2 after:h-2
                    after:rounded-full
                    after:bg-orange
                    after:top-2
                    after:-right-5
                    group-hover:after:bg-coffee
                  "
                    >
                      Add to cart
                    </span>
                  </button>
                </div>

                <div className="flex justify-start items-center pt-5 gap-2">
                  {[...Array(30)].map((_, i) => (
                    <span
                      className="w-1 h-1 bg-gray-500 rounded-full "
                      key={i}
                    ></span>
                  ))}
                </div>

                <p className="mt-8 text-lg tracking-tighter px-2 gap-2">
                  Category: <span className="text-orange px-2">Whiskey</span>
                </p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto p-6 mt-10">
              {/* Tab Headers */}
              <div className="flex border-b-2 border-[#b35e46] mb-8">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-6 py-2 uppercase font-bold tracking-widest text-xl transition-all ${
                    activeTab === "description"
                      ? "bg-[#b35e46] text-white"
                      : "text-stone-800 hover:text-[#b35e46]"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-6 py-2 uppercase font-bold tracking-widest text-xl transition-all ${
                    activeTab === "reviews"
                      ? "bg-[#b35e46] text-white"
                      : "text-stone-800 hover:text-[#b35e46]"
                  }`}
                >
                  Reviews ({reviews.length})
                </button>
              </div>

              {/* Tab Content Area */}
              <div className="animate-fadeIn">
                {activeTab === "description" ? (
                  <p className="text-stone-600 leading-relaxed text-lg">
                    Nec vel sagittis laudantium mattis purus ligula, ridiculus
                    nascetur suspendisse netus, tellus eu integer ridiculus,
                    nihil elit nam. Molestie a urna ac. Ornare nascetur
                    tincidunt, lorem nonummy, auctor luctus mauris, ornare quis.
                    Mauris sit. Mi ac habitasse, metus porta. Libero hendrerit
                    cursus dui, mi nibh nullam eros erat, mi mi.
                  </p>
                ) : (
                  <div className="space-y-8">
                    {reviews.map((rev, index) => (
                      <div className="flex justify-between" key={index}>
                        <div className="flex gap-5">
                          <div className="w-20 h-16">
                            <img
                              src={rev.image}
                              alt=""
                              width={200}
                              className="rounded-full h-20 border"
                            />
                          </div>
                          <div className="border-b border-stone-300  pb-6 last:border-0">
                            <div className="flex items-baseline gap-2 mb-2">
                              <span className="font-bold text-xl text-stone-800">
                                {rev.name}
                              </span>
                              <span className="text-stone-400 text-sm">
                                — {rev.date}
                              </span>
                            </div>
                            <p className="text-stone-700 text-lg leading-snug">
                              {rev.comment}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < rev.rating
                                  ? "fill-yellow-500"
                                  : "text-stone-400"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full h-20">
              <p className="text-coffee text-2xl font-mono tracking-tight ">
                Add A Review
              </p>
              <p className="text-xl text-black/60 font-mono">
                You Must be logged in to post a review
              </p>
            </div>

            <div className="space-y-7 py-10">
              <h3 className="text-4xl text-coffee py-4 font-bold">
                Related Products
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col items-center"
                  >
                    {/* Product Card */}
                    <div className="bg-white p-3 shadow-sm border border-gray-200 w-full flex items-center justify-center relative overflow-hidden">
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={bottle}
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
                      {[...Array(15)].map((_, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-gray-400"
                        ></span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <aside className=" p-6 bg-[#f4ece1] min-h-screen text-stone-800">
              <div className="relative mb-10">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-stone-200/50 border border-stone-300 py-2 px-4 italic focus:outline-none"
                />
                <div className="absolute right-3 top-2.5 text-stone-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <section className="mb-12">
                <div className="relative bg-[#a65d47] text-white text-center py-2 px-4 mb-6 mx-2">
                  <span className="font-semibold tracking-widest text-lg uppercase">
                    Cart
                  </span>
                  <div className="absolute left-[-10px] top-0 bottom-0 w-4 bg-[#a65d47] clip-path-left"></div>
                  <div className="absolute right-[-10px] top-0 bottom-0 w-4 bg-[#a65d47] clip-path-right"></div>
                </div>
                <p className="text-stone-600 text-center text-xl">
                  No products in the cart.
                </p>
              </section>

              <div className="sticky top-10">
                <div className="border-6 border-stone-800 p-1 mb-12">
                  <div className="border border-stone-800 p-3 text-center">
                    <h3 className="text-3xl font-black leading-tight uppercase tracking-tighter mb-2">
                      Looking for <br /> a gift
                    </h3>
                    <button className="w-full bg-red-500 text-white py-2 px-4 uppercase font-bold text-sm tracking-wider transition-colors">
                      Shop our gift
                    </button>
                  </div>
                </div>

                <section className="space-y-7">
                  <div className="relative bg-[#a65d47] text-white text-center py-2 px-4 mb-6 mx-2">
                    <span className="font-bold tracking-widest text-lg uppercase">
                      Top Products
                    </span>
                    <div className="absolute left-[-10px] top-0 bottom-0 w-4 bg-[#a65d47] clip-path-left"></div>
                    <div className="absolute right-[-10px] top-0 bottom-0 w-4 bg-[#a65d47] clip-path-right"></div>
                  </div>
                  {topProducts.map((item, index) => (
                    <div className="flex gap-4 items-start" key={index}>
                      <div className="w-16 h-16 bg-white border border-stone-300 p-1 flex-shrink-0">
                        <img
                          src={place}
                          alt="Salmon 1862"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold uppercase text-sm tracking-tight leading-none">
                          {item.name}
                        </h4>
                        <div className="text-yellow-500 text-xs flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} />
                          ))}
                        </div>
                        <p className="text-xs mt-1 px-4 relative">
                          <span className="absolute top-0 left-0 text-xl">
                            $
                          </span>
                          <span className="line-through text-lg">
                            {item.pastPrice}
                          </span>
                          <span className="px-2 text-lg">{item.price}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
