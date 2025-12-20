import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import Pages from "./pages/Page";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <div className="w-full mx-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
