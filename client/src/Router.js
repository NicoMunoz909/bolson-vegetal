import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import OrderPlaced from "./Components/OrderPlaced";
import ShoppingPage from "./Components/ShoppingPage";
import AboutUs from "./Components/AboutUs";
import Envios from "./Components/Envios";
import Contacto from "./Components/Contacto";
import FAQ from "./Components/FAQ";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route
              path="bolsones"
              element={
                <ShoppingPage titulo="Bolsones" filtros={["Agroecologico"]} />
              }
            ></Route>
            <Route
              path="frutas"
              element={
                <ShoppingPage titulo="Frutas" filtros={["Agroecologico"]} />
              }
            ></Route>
            <Route
              path="verduras"
              element={
                <ShoppingPage titulo="Verduras" filtros={["Agroecologico"]} />
              }
            ></Route>
            <Route
              path="dietetica"
              element={<ShoppingPage titulo="Dietetica" filtros={[]} />}
            ></Route>
            <Route
              path="congelados"
              element={<ShoppingPage titulo="Congelados" filtros={[]} />}
            ></Route>
            <Route
              path="almacen"
              element={<ShoppingPage titulo="Almacen" filtros={[]} />}
            ></Route>
            <Route
              path="bebidas"
              element={<ShoppingPage titulo="Bebidas" filtros={[]} />}
            ></Route>
            <Route
              path="ofertas"
              element={
                <ShoppingPage titulo="Ofertas" filtros={["Agroecologico"]} />
              }
            ></Route>
            <Route path="carrito" element={<Cart />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="compra-finalizada" element={<OrderPlaced />}></Route>
            <Route path="nosotros" element={<AboutUs />}></Route>
            <Route path="contacto" element={<Contacto />}></Route>
            <Route path="envios" element={<Envios />}></Route>
            <Route path="faq" element={<FAQ />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
