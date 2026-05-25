/* global React */
const SERVICES = [
  { num:'01 — PROYECTOS', title:'Gestión y Desarrollo de Proyectos Industriales',
    desc:'Convertimos ideas complejas en proyectos reales. Desde el análisis inicial hasta la puesta en marcha, asegurando inversiones sólidas, riesgos controlados y resultados que funcionan en el mundo físico.',
    tags:['Factibilidad','PMO','Commissioning'] },
  { num:'02 — PROCESOS', title:'Ingeniería y Optimización de Procesos',
    desc:'Diseñamos y mejoramos líneas productivas para que rindan más, gasten menos y operen con estabilidad. Metodologías modernas, datos reales y criterio técnico de terreno.',
    tags:['Lean','Six Sigma','Data-driven'] },
  { num:'03 — EQUIPAMIENTO', title:'Consultoría en Equipamiento y Tecnología',
    desc:'Pelletizado, extrusión, molienda, automatización, eficiencia energética, ensacado y logística. Seleccionamos lo que calza con tu negocio, no con el catálogo del proveedor.',
    tags:['Automatización','Eficiencia','IoT'] },
  { num:'04 — ESTRATEGIA', title:'Estrategias Industriales e Innovación',
    desc:'Definimos rutas claras, evaluamos escenarios e identificamos oportunidades para avanzar con foco y velocidad hacia donde necesitas llegar.',
    tags:['Innovación','Escalabilidad','Estrategia'] },
];

const FEATURE_SERVICE = {
  num:'05 — ACTIVOS INMOBILIARIOS',
  title:'Gestión de Activos Inmobiliarios',
  desc:'Identificamos, evaluamos y gestionamos terrenos, galpones y activos productivos. Decisiones inmobiliarias con criterio industrial: ubicación, factibilidad técnica y retorno medible.',
  tags:['Adquisición','Arriendo','Valorización','Industrial RE'],
};

function Services() {
  return (
    <section className="services reveal" id="servicios">
      <div className="services-header">
        <div>
          <div className="section-label">// Servicios</div>
          <h2 className="section-title">Lo que hacemos</h2>
        </div>
        <p className="section-sub">Desde la ingeniería en terreno hasta la estrategia de crecimiento. Resultados medibles.</p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div className="service-card reveal" key={i}>
            <span className="service-num">{s.num}</span>
            <div className="service-title">{s.title}</div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-tags">
              {s.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
        <div className="service-card service-card-wide reveal">
          <div className="service-wide-inner">
            <div className="service-wide-head">
              <span className="service-num">{FEATURE_SERVICE.num}</span>
              <div className="service-title">{FEATURE_SERVICE.title}</div>
            </div>
            <div className="service-wide-body">
              <p className="service-desc">{FEATURE_SERVICE.desc}</p>
              <div className="service-tags">
                {FEATURE_SERVICE.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
