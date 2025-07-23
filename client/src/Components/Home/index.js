import React, { useContext } from "react";
import BannerCarousel from "../BannerCarousel";
import BannerFooter from "../BannerFooter";
import Categories from "../Categories";
import ItemsCarouselHome from "../ItemsCarouselHome";
import SubscribeBanner from "../SubscribeBanner";
import { ItemsContext } from "../../Contexts/ItemsContext";

const Home = () => {
  const items = useContext(ItemsContext);
  const mostSold =
    items.items.length > 0
      ? items.items.filter((i) => i.tags.includes("destacado"))
      : [];
  const offers =
    items.items.length > 0
      ? items.items.filter((i) => i.tags.includes("oferta"))
      : [];

  return (
    <>
      <h1 style={{ display: "none" }}>el bolson vegetal</h1>
      <BannerCarousel />
      <BannerFooter />
      <h2>Nuestros Productos</h2>
      <div className="titleUnderline"></div>
      <Categories />
      <h2>Los mas vendidos</h2>
      <div className="titleUnderline"></div>
      <ItemsCarouselHome id="most-sold" items={mostSold} />
      <h2>Ofertas de la semana</h2>
      <div className="titleUnderline"></div>
      <ItemsCarouselHome id="week-sale" items={offers} />
      <SubscribeBanner />
    </>
  );
};

export default Home;
