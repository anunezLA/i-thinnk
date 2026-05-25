/* global React */
const { useState } = React;

/* === Partner logos ===
   Real partner logos copied from co-branded/assets/. Each card renders
   a two-layer logo: a steel-blue silhouette (via CSS mask-image) shown
   by default, and the original color image on hover / tap.
   Brand accent colors come from the design system's partners.js.
*/

const PARTNERS = [
  {
    num: '01',
    name: 'Brenpower',
    logo: 'assets/partners/brenpower-logo.png',
    brand: '#5BB8C4',         /* Brenpower brand accent (from partners.js) */
    needsDarkSlab: true,      /* logo is white-on-transparent → reveal on dark */
    tagline: 'Monitoreo de vapor industrial en tiempo real',
    desc: 'Sensores y plataforma de telemetría para sistemas de vapor: detección temprana de pérdidas, eficiencia térmica y trazabilidad de consumos.',
    tags: ['Vapor', 'IoT', 'Eficiencia térmica'],
  },
  {
    num: '02',
    name: 'Nexopel',
    logo: 'assets/partners/nexopel-logo.png',
    brand: '#C2185B',         /* Nexopel brand accent */
    needsDarkSlab: false,
    tagline: 'Peletización para biomasa y alimento animal',
    desc: 'Líneas completas de peletizado de alta producción. Diseño, integración y puesta en marcha en planta — desde la molienda hasta el ensacado.',
    tags: ['Peletizado', 'Biomasa', 'Alimento animal'],
  },
  {
    num: '03',
    name: 'ITPhotonics',
    logo: 'assets/partners/itphotonics-logo.png',
    brand: '#1A8B9B',         /* ITPhotonics brand accent */
    needsDarkSlab: false,
    tagline: 'Análisis NIR en línea — humedad, proteína, grasa',
    desc: 'Tecnología espectral de cercanía infrarroja para control de calidad continuo. Mide composición sin detener la línea, con datos en cada lote.',
    tags: ['NIR', 'Calidad en línea', 'Espectroscopía'],
  },
];

function PartnerCard({ p }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div
      className={`partner-card${revealed ? ' is-revealed' : ''}`}
      style={{ '--brand': p.brand }}
      onClick={() => setRevealed(r => !r)}
    >
      <div className={`partner-logo${p.needsDarkSlab ? ' has-slab' : ''}`}>
        <div
          className="partner-logo-mark"
          style={{ maskImage: `url(${p.logo})`, WebkitMaskImage: `url(${p.logo})` }}
          aria-hidden="true"
        />
        <img className="partner-logo-real" src={p.logo} alt={`${p.name} logo`} />
      </div>
      <div className="partner-meta">
        <span className="partner-num">{p.num} — PARTNER · {p.name.toUpperCase()}</span>
      </div>
      <div className="partner-tagline">{p.tagline}</div>
      <p className="partner-desc">{p.desc}</p>
      <div className="partner-tags">
        {p.tags.map(t => <span className="tag tag-tech" key={t}>{t}</span>)}
      </div>
      <div className="partner-foot">Distribución + Integración</div>
    </div>
  );
}

function Partners() {
  return (
    <section className="partners reveal" id="red-tecnologica">
      <div className="partners-header">
        <div>
          <div className="section-label partners-label">// Red Tecnológica</div>
          <h2 className="section-title">Tecnología que integramos.</h2>
        </div>
        <p className="section-sub">Distribuimos e integramos marcas que combinan ingeniería sólida y datos en tiempo real. La capa física + digital que llevamos a planta.</p>
      </div>
      <div className="partners-grid">
        {PARTNERS.map((p) => <PartnerCard p={p} key={p.name} />)}
      </div>
      <div className="partners-hint">
        <span className="partners-hint-dot"></span>
        Pasa el cursor o toca cada logo para ver el color de marca original.
      </div>
    </section>
  );
}
window.Partners = Partners;
