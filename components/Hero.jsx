/* global React */
function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-left reveal">
        <div className="hero-badge">Sistema activo — Los Ángeles, Chile</div>
        <h1>Más rendimiento.<br /><span className="muted">Menos incertidumbre.</span></h1>
        <p className="hero-sub">Transformamos complejidad en resultados con ingeniería avanzada, estrategia y tecnología AI aplicada a procesos industriales reales.</p>
        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">Solicitar consulta →</a>
          <a href="#servicios" className="btn-ghost">Ver servicios</a>
        </div>
      </div>
      <div className="hero-right">
        <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1600&q=80" alt="Planta industrial" />
        <div className="hero-overlay"></div>
        <div className="hero-data">
          <div className="hero-metric"><div className="hero-metric-num">5</div><div className="hero-metric-label">Áreas de servicio</div></div>
          <div className="hero-metric"><div className="hero-metric-num">3</div><div className="hero-metric-label">Partners técnicos</div></div>
          <div className="hero-metric"><div className="hero-metric-num">AI</div><div className="hero-metric-label">Tech aplicada</div></div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
