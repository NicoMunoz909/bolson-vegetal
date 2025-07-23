import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { CartProvider } from "./Contexts/CartContext";
import { ItemsProvider } from "./Contexts/ItemsContext";

function App() {
  return (
    <ItemsProvider>
      <CartProvider>
        <div className="App">
          <Navbar />
          <div style={{ marginTop: "75px" }}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </ItemsProvider>
  );
}

export default App;
