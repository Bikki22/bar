import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Star, ShoppingBasket, Menu, X } from "lucide-react";

const leftMenu = [
  { label: "Home", route: "/" },
  {
    label: "Pages",
    route: "/pages",
    subMenu: [
      { route: "/about-us", label: "About Us" },
      { route: "/our-services", label: "Our Service" },
      { route: "/teams", label: "Our Team" },
    ],
  },
  { label: "Portfolio", route: "/portfolio" },
];

const rightMenu = [
  { label: "Blog", route: "/blog" },
  { label: "Shop", route: "/products" },
  { label: "Contacts", route: "/contacts" },
];

const NextNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ menu, index, total }) => (
    <React.Fragment>
      <li className="uppercase text-xl lg:text-2xl font-bold text-cream hover:text-primary transition-colors relative group">
        <NavLink to={menu.route} onClick={() => setIsOpen(false)}>
          {menu.label}
        </NavLink>
        {menu.subMenu && (
          <ul
            className="absolute top-full left-0 mt-4 min-w-[300px] bg-cream border-5 border-coffee
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-200 z-50"
          >
            {menu.subMenu.map((sub, i) => (
              <li key={i}>
                <NavLink
                  to={sub.route}
                  className="block px-6 py-3 text-lg text-coffee hover:bg-coffee hover:text-white border-b border-dotted"
                >
                  {sub.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
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
