import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Star, ShoppingBasket, Menu, X } from "lucide-react";

const leftMenu = [
  { label: "Home", route: "/" },
  { label: "Pages", route: "/pages" },
  { label: "Portfolio", route: "/portfolio" },
];

const rightMenu = [
  { label: "Blog", route: "/blog" },
  { label: "Shop", route: "/shop" },
  { label: "Contacts", route: "/contacts" },
];

const NextNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ menu, index, total }) => (
    <React.Fragment>
      <li className="uppercase text-xl lg:text-2xl font-bold text-cream hover:text-primary transition-colors">
        <NavLink to={menu.route} onClick={() => setIsOpen(false)}>
          {menu.label}
        </NavLink>
      </li>
      {index !== total - 1 && (
        <Star className="hidden lg:block size-4 text-cream fill-cream" />
      )}
    </React.Fragment>
  );

  return (
    <div className="w-full absolute top-0 z-50 px-4 md:px-10 mt-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* MOBILE HAMBURGER (Left on mobile) */}
        <button
          className="lg:hidden text-cream z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* DESKTOP NAV (Hidden on Mobile) */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-10">
          <ul className="flex items-center gap-6">
            {leftMenu.map((menu, index) => (
              <NavItem
                key={index}
                menu={menu}
                index={index}
                total={leftMenu.length}
              />
            ))}
          </ul>

          <Link to="/" className="shrink-0">
            <img
              src="./logo2.png"
              alt="Logo"
              className="w-[180px] xl:w-[250px]"
            />
          </Link>

          <ul className="flex items-center gap-6">
            {rightMenu.map((menu, index) => (
              <NavItem
                key={index}
                menu={menu}
                index={index}
                total={rightMenu.length}
              />
            ))}
          </ul>
        </nav>

        {/* MOBILE LOGO (Center on mobile) */}
        <Link to="/" className="lg:hidden absolute left-1/2 -translate-x-1/2">
          <img src="./logo2.png" alt="Logo" className="w-[140px]" />
        </Link>

        {/* CART ICON (Always right) */}
        <button className="flex justify-center items-center">
          <ShoppingBasket className="size-8 lg:size-10 text-primary" />
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`
        fixed inset-0 bg-black/95 transition-transform duration-300 ease-in-out lg:hidden
        flex flex-col items-center justify-center z-[55]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <ul className="flex flex-col items-center gap-8">
          {[...leftMenu, ...rightMenu].map((menu, index) => (
            <li key={index} className="uppercase text-3xl font-bold text-cream">
              <NavLink to={menu.route} onClick={() => setIsOpen(false)}>
                {menu.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NextNavbar;
