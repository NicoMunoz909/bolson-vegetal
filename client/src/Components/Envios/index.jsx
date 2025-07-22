import "./Envios.css";

const Envios = () => {
  return (
    <div class="envios-container">
      <h2 class="envios-title">Envíos</h2>
      <p class="envios-subtitle">
        En Bolson Vegetal llevamos tu pedido directo a tu casa
      </p>
      <div class="horario">
        <span class="icon">⏰</span>
        <p>Lunes a Viernes: 17:00 a 20:30 | Sábado: 8:00 a 15:00</p>
        <p></p>
      </div>
      <div class="zonas-grid">
        <div class="zona-card">
          <span class="icon">📍</span>
          <div class="zona-info">
            <h3>Zona Centro</h3>
            <p>Lunes a Sábado</p>
          </div>
        </div>

        <div class="zona-card">
          <span class="icon">📍</span>
          <div class="zona-info">
            <h3>Zona Sur</h3>
            <p>Martes y Viernes</p>
          </div>
        </div>

        <div class="zona-card">
          <span class="icon">📍</span>
          <div class="zona-info">
            <h3>Zona Norte</h3>
            <p>Jueves y Sábados</p>
          </div>
        </div>

        <div class="zona-card">
          <span class="icon">📍</span>
          <div class="zona-info">
            <h3>Zona Oeste</h3>
            <p>Miércoles y Sábados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envios;
