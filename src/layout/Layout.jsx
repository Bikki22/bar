import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import NextNavbar from "../components/NextNavbar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();

  const isHomeNavbar = location.pathname === "/";

  return (
    <>
      {isHomeNavbar ? <Navbar /> : <NextNavbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
