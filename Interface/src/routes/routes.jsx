import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

import Home from "../pages/home/Home.jsx";
import Produtos from "../pages/produtos/Produtos.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;