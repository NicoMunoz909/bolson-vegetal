import "./Navbar.css";
// eslint-disable-next-line no-unused-vars
import { IoMdPricetags, IoMdBrowsers } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div style={{ margin: "30px auto", width: "10vw" }} className="navbar-header">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="navbar-links">
        {/* <a href="">
          <IoMdPricetags /> Gestor de catálogo
        </a> */}
        {/* <a href="/backoffice/productos"><IoMdBrowsers /> Gestor de página web</a> */}
      </div>
    </div>
  );
};

export default Navbar;
