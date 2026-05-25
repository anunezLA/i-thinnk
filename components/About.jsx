/* global React */
function About() {
  return (
    <section className="about reveal" id="nosotros">
      <div className="about-left">
        <div className="section-label">// Nosotros</div>
        <div className="about-quote">"Ingeniería que trasciende lo obvio. Innovación que se convierte en acción."</div>
        <p className="about-body">En i+Thinnk® no creemos en el asesoramiento genérico. Trabajamos con foco, criterio técnico y visión estratégica para transformar incertidumbre en dirección y dirección en resultados con valor real.<br /><br />Combinamos experiencia en ingeniería industrial de terreno con herramientas de inteligencia artificial, análisis de datos y estrategia de negocios. Operamos desde Los Ángeles, Región del Biobío, Chile.</p>
        <div className="stat-row">
          <div className="stat"><div className="stat-num">5</div><div className="stat-label">Servicios</div></div>
          <div className="stat"><div className="stat-num">AI</div><div className="stat-label">Tech aplicada</div></div>
          <div className="stat"><div className="stat-num">360°</div><div className="stat-label">Industrial</div></div>
        </div>
      </div>
      <div className="about-right">
        <img src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?w=1400&q=80" alt="Sala de control" />
        <div className="about-caption">// Proyecto activo — terreno</div>
      </div>
    </section>
  );
}
window.About = About;
