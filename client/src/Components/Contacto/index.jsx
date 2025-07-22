import "./Contacto.css";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
const Contacto = () => {
  return (
    <div class="contacto-container">
      <h2 class="contacto-title">Contacto</h2>
      <p class="contacto-subtitle">
        ¿Querés hacer un pedido o tenés alguna consulta? Estamos disponibles por
        WhatsApp, Instagram o teléfono.
      </p>

      <div class="contacto-grid">
        <div class="contacto-card">
          <span class="icon">
            <FaWhatsapp />
          </span>
          <h3>WhatsApp</h3>
          <a href="https://wa.me/543413062939" target="_blank" rel="noreferrer">
            Enviar mensaje
          </a>
        </div>

        <div class="contacto-card">
          <span class="icon">
            <FaInstagram />
          </span>
          <h3>Instagram</h3>
          <a
            href="https://www.instagram.com/bolsonvegetal/"
            target="_blank"
            rel="noreferrer"
          >
            @bolsonvegetal
          </a>
        </div>

        <div class="contacto-card">
          <span class="icon">
            <FaPhone />
          </span>
          <h3>Teléfono</h3>
          <p>+54 9 3413062939</p>
        </div>
      </div>

      <p class="contacto-horario">
        🕒 Horarios de atención: Lunes a Sábado de 8:00 a 20:00 hs
      </p>
    </div>
  );
};

export default Contacto;
