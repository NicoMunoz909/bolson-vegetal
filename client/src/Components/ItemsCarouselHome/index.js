import React, { useContext } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "./ItemsCarouselHome.css";
import { CartDispacthContext } from "../../Contexts/CartContext";
import Loader from "../Loader";
import { ItemsContext } from "../../Contexts/ItemsContext";

const ItemsCarouselHome = ({ id, items }) => {
  const isLoading = useContext(ItemsContext).isLoading;
  const dispatch = useContext(CartDispacthContext);

  let translatePercentage = 0;

  const translateLeft = () => {
    const itemsContainer = document.getElementById(id);
    if (translatePercentage > 0) {
      itemsContainer.style.transform = `translateX(-${
        translatePercentage - 100
      }%)`;
      translatePercentage -= 100;
    } else {
      itemsContainer.style.transform = `translateX(${
        translatePercentage + 10
      }%)`;
      setTimeout(() => {
        itemsContainer.style.transform = `translateX(-${0}%)`;
      }, 100);
    }
  };

  const translateRight = () => {
    const itemsContainer = document.getElementById(id);
    if (translatePercentage < (items.length - 1) * 100) {
      itemsContainer.style.transform = `translateX(-${
        translatePercentage + 100
      }%)`;
      translatePercentage += 100;
    } else {
      itemsContainer.style.transform = `translateX(-${
        translatePercentage + 10
      }%)`;
      setTimeout(() => {
        itemsContainer.style.transform = `translateX(-${
          (items.length - 1) * 100
        }%)`;
      }, 100);
    }
  };

  return (
    <div className="itemsCarouselContainer">
      <div className="carouselHandler left">
        <FaChevronCircleLeft onClick={translateLeft} />
      </div>
      <div className="itemsContainer" id={id}>
        {isLoading ? (
          <div className="itemContainer">
            <div className="item loader">
              <Loader />
              <p>Cargando...</p>
            </div>
          </div>
        ) : (
          items.map((i) => {
            return (
              <div className="itemContainer" key={i.id}>
                <div className="item">
                  <img src={i.imageUrl} alt={i.name} />
                  <h3>{i.name}</h3>
                  <p>
                    ${i.price} x {i.priceType}
                  </p>
                  <button onClick={() => dispatch({ type: "ADD", item: i })}>
                    Añadir al carrito
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="carouselHandler right">
        <FaChevronCircleRight onClick={translateRight} />
      </div>
    </div>
  );
};

export default ItemsCarouselHome;
