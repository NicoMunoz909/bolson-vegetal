import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import OrderPlaced from "./Components/OrderPlaced";
import ShoppingPage from "./Components/ShoppingPage";
import LoadingPage from "./Components/LoadingPage";
import { useEffect, useState } from "react";
import { config } from "./Constants";
import AboutUs from "./Components/AboutUs";
import Envios from "./Components/Envios";
import Contacto from "./Components/Contacto";
import FAQ from "./Components/FAQ";

const Router = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = config.url;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.filter((item) => item.inStock));
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [URL]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLoading && <Route path="/" element={<LoadingPage />} />}
          {!isLoading && (
            <Route path="/" element={<App />}>
              <Route
                index
                element={
                  <Home
                    mostSold={items.filter((i) => i.tags.includes("destacado"))}
                    offers={items.filter((i) => i.tags.includes("oferta"))}
                  />
                }
              ></Route>
              <Route
                path="bolsones"
                element={
                  <ShoppingPage
                    titulo="Bolsones"
                    filtros={["Agroecologico"]}
                    products={items.filter((i) => i.category === "Bolsones")}
                  />
                }
              ></Route>
              <Route
                path="frutas"
                element={
                  <ShoppingPage
                    titulo="Frutas"
                    filtros={["Agroecologico"]}
                    products={items.filter((i) => i.category === "Frutas")}
                  />
                }
              ></Route>
              <Route
                path="verduras"
                element={
                  <ShoppingPage
                    titulo="Verduras"
                    filtros={["Agroecologico"]}
                    products={items.filter((i) => i.category === "Verduras")}
                  />
                }
              ></Route>
              <Route
                path="dietetica"
                element={
                  <ShoppingPage
                    titulo="Dietetica"
                    filtros={[]}
                    products={items.filter((i) => i.category === "Dietetica")}
                  />
                }
              ></Route>
              <Route
                path="congelados"
                element={
                  <ShoppingPage
                    titulo="Congelados"
                    filtros={[]}
                    products={items.filter((i) => i.category === "Congelados")}
                  />
                }
              ></Route>
              <Route
                path="almacen"
                element={
                  <ShoppingPage
                    titulo="Almacen"
                    filtros={[]}
                    products={items.filter((i) => i.category === "Almacen")}
                  />
                }
              ></Route>
              <Route
                path="bebidas"
                element={
                  <ShoppingPage
                    titulo="Bebidas"
                    filtros={[]}
                    products={items.filter((i) => i.category === "Bebidas")}
                  />
                }
              ></Route>
              <Route
                path="ofertas"
                element={
                  <ShoppingPage
                    titulo="Ofertas"
                    filtros={["Agroecologico"]}
                    products={items.filter((i) => i.tags.includes("Oferta"))}
                  />
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
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
