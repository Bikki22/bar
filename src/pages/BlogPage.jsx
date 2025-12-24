import React from "react";
import NextHero from "../components/NextHero";
import { Heart, Tag } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      author: "admin",
      category: "Old School Whisky",
      likes: 29,
      title: "Mauris Orci Viverra",
      excerpt:
        "Massa scelerisque elit at ut id, tortor malesuada pulvinar sed augue ultricies. Wisi elit, dignissim nascetur vel wisi. Nullam leo lorem. In fringilla, in scele",
      image: "./blogpage.jpg",
    },
    {
      id: 2,
      author: "staff",
      category: "Vintage Casks",
      likes: 45,
      title: "The Art of Aging",
      excerpt:
        "Explore the deep history of oak barrels and how time shapes the flavor profile of the world's finest spirits.",
      image: "./blogpage.jpg", // Replace with your image paths
    },
    {
      id: 3,
      author: "editor",
      category: "Distillery Tour",
      likes: 12,
      title: "Scottish Highlands",
      excerpt:
        "A journey through the misty mountains to find the purest water sources used in traditional distillation.",
      image: "./blogpage.jpg",
    },
  ];
  return (
    <div>
      <NextHero title={"Blog Checkerboard "} />
      <div className="w-full bg-cream">
        <div className="max-w-7xl mx-auto md:px-21 px-5 py-15">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`flex flex-col md:flex-row items-center md:gap-0  py-5 md:py-0 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="border-10 md:border-15 border-white/60 shadow-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-60 md:h-96 w-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 w-full md:w-1/2 px-2 md:px-6">
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-gray-500">
                  <span className="flex items-center text-base md:text-lg gap-1">
                    by{" "}
                    <span className="hover:text-[#a65d4a] cursor-pointer font-medium">
                      {post.author}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={16} className="text-[#a65d4a]" />
                    <span className="hover:text-[#a65d4a] text-base md:text-lg cursor-pointer">
                      {post.category}
                    </span>
                  </span>
                  <span className="flex items-center text-base md:text-lg gap-1">
                    <Heart
                      size={16}
                      className="text-[#a65d4a] fill-[#a65d4a]"
                    />
                    {post.likes}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#a65d4a] tracking-tight uppercase leading-tight">
                  {post.title}
                </h2>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-prose">
                  {post.excerpt}
                </p>

                <button className="group border-t-4 border-b-4 py-2 px-6 md:py-3 md:px-8 border-orange hover:border-black transition-all duration-300 cursor-pointer mt-2">
                  <span
                    className="text-base md:text-xl uppercase relative font-bold text-orange 
                group-hover:text-coffee
                before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-orange before:top-1/2 before:-translate-y-1/2 before:-left-5 group-hover:before:bg-coffee
                after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-orange after:top-1/2 after:-translate-y-1/2 after:-right-5 group-hover:after:bg-coffee
                transition-colors"
                  >
                    Continue reading
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
