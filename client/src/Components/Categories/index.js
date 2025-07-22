import "./Categories.css";
import bolsones from "../../Assets/Categorias/bolsones.webp";
import frutas from "../../Assets/Categorias/frutas.webp";
import verduras from "../../Assets/Categorias/verduras.webp";
import dietetica from "../../Assets/Categorias/dietetica.webp";
import almacen from "../../Assets/Categorias/almacen.webp";
import congelados from "../../Assets/Categorias/congelados.webp";
import bebidas from "../../Assets/Categorias/bebidas.webp";
import ofertas from "../../Assets/Categorias/ofertas.webp";

const Categories = (props) => {
  const categories = [
    "bolsones",
    "frutas",
    "verduras",
    "dietetica",
    "almacen",
    "congelados",
    "bebidas",
    "ofertas",
  ];

  const fotos = {
    bolsones,
    frutas,
    verduras,
    dietetica,
    almacen,
    congelados,
    bebidas,
    ofertas,
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <div className="categories">
        {categories.map((i, index) => {
          return (
            <div className="category" key={index}>
              <a href={i}>
                <img src={fotos[i]} alt="" />
                <h2>{i}</h2>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
