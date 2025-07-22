import "./FAQ.css";
import { useState } from "react";

const preguntas = [
  {
    pregunta: "¿Cómo hago un pedido?",
    respuesta:
      "Armás tu pedido en nuestra web y al finalizar te redirigimos al WhatsApp con el mensaje listo para enviar.",
  },
  {
    pregunta: "¿Puedo pagar con tarjeta?",
    respuesta:
      "Sí, aceptamos efectivo, transferencia y Mercado Pago al recibir el pedido.",
  },
  {
    pregunta: "¿Hay un monto mínimo?",
    respuesta:
      "No tenemos monto mínimo. Podés pedir desde un solo producto hasta un bolsón completo.",
  },
  {
    pregunta: "¿Hacen envíos el mismo día?",
    respuesta:
      "Sí, si el pedido se hace antes de las 15:00 hs. Si no, pasa al día siguiente.",
  },
  {
    pregunta: "¿Qué pasa si algo llega en mal estado?",
    respuesta:
      "Nos escribís al WhatsApp y te lo cambiamos o reembolsamos sin problema.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="faq-container">
      <h2 className="faq-title">Preguntas Frecuentes</h2>

      {preguntas.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            {item.pregunta}
          </button>
          <div
            className="faq-answer"
            style={{
              maxHeight: activeIndex === index ? "500px" : "0",
              transition: "max-height 0.3s ease",
              overflow: "hidden",
            }}
          >
            <p>{item.respuesta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
