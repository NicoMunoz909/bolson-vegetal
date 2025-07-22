import banner from "../../Assets/Categorias/Banners/bolsones.webp";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div
        className="imgContainer shoppingPageBanner"
        style={{ width: "auto" }}
        id="imgContainer"
      >
        <img src={banner} alt="" />
        <h2>¿Quienes Somos?</h2>
      </div>
      <p className="aboutUsText">
        ¡Bienvenidos a Bolson Vegetal de Rosario! Somos una verdulería de barrio
        con más de 10 años acercándote lo mejor de frutas, verduras
        tradicionales y productos agroecológicos. Nos destacamos por nuestros
        bolsones llenos de calidad, respetuosos con el ambiente y pensados para
        tu salud. Atendemos pedidos por WhatsApp o Instagram DMs, y llegamos con
        envío sin cargo a toda la ciudad de Rosario. También contamos con frutos
        secos, cereales y más.
      </p>
    </div>
  );
};

export default AboutUs;
