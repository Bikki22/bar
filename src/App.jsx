import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import Pages from "./pages/Page";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <div className="w-full mx-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/our-services" element={<ServicesPage />} />
          <Route path="/products">
            <Route index element={<ShopPage />} />
            <Route path=":id" element={<ProductDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
