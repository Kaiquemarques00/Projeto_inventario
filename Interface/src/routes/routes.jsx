import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

import Home from "../pages/home/Home.jsx";
import Products from "../pages/produtos/Produtos.jsx";
import Categories from "../pages/categorias/Categorias.jsx"
import Movements from "../pages/movements/Movements.jsx"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/movimentacoes" element={<Movements />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;