import { Search, ShoppingBasket, Star, Menu, X } from "lucide-react"; // Added Menu and X icons
import { Link, NavLink } from "react-router-dom";
import { NavMenu } from "../constants/navMenu";
import React, { useState } from "react"; // Added useState

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  const linkClass = ({ isActive }) =>
    isActive
      ? "block py-2 pl-3 rounded lg:p-0 text-primary"
      : "block py-2 pr-4 pl-3 lg:p-0 text-primary hover:text-cream";

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md lg:bg-transparent">
      <nav className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4">
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center cursor-pointer">
            <img src="./logo.png" alt="Logo" className="w-32 lg:w-[180px]" />
          </Link>
        </div>

        <div className="hidden lg:flex justify-around gap-2 text-center py-5 px-5 w-full max-w-3xl">
          {NavMenu.map((menu, index) => (
            <React.Fragment key={index}>
              <li className="list-none text-2xl text-primary font-bold flex items-center uppercase">
                <NavLink to={menu.route} className={linkClass}>
                  {menu.label}
                </NavLink>
              </li>
              {index !== NavMenu.length - 1 && (
                <span className="flex items-center">
                  <Star className="size-4 text-cream" />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded">
            <ShoppingBasket className="size-8 lg:size-10 text-primary" />
          </button>
          <button className="hidden sm:block">
            <Search className="size-8 lg:size-10 text-cream" />
          </button>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden w-full border-t border-gray-100 flex flex-col p-4 space-y-4 shadow-lg">
          {NavMenu.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.route}
              className="text-xl font-bold uppercase text-primary"
              onClick={() => setIsOpen(false)}
            >
              {menu.label}
            </NavLink>
          ))}
          <button className="flex items-center gap-2 text-cream font-bold sm:hidden">
            <Search size={24} /> SEARCH
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
