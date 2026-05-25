/* global React */
const AI_CAPS = [
  { num: '01', title: 'Mantenimiento\npredictivo',
    desc: 'Modelos que anticipan fallas en equipos críticos antes de que detengan la producción.' },
  { num: '02', title: 'Optimización\nde procesos',
    desc: 'Algoritmos que ajustan variables de operación en tiempo real para maximizar rendimiento.' },
  { num: '03', title: 'Calidad en línea',
    desc: 'Análisis NIR y visión artificial para control de composición y defectos sin detener la línea.' },
  { num: '04', title: 'Eficiencia\nenergética',
    desc: 'Monitoreo y reducción del consumo energético a partir de la operación real de planta.' },
  { num: '05', title: 'Trazabilidad',
    desc: 'Seguimiento integral del producto desde la materia prima hasta el despacho final.' },
  { num: '06', title: 'Reportería\nautomática',
    desc: 'Dashboards, KPIs y reportes ejecutivos generados automáticamente desde tu data operativa.' },
];

function AIBlocks() {
  return (
    <section className="ai-industrial" id="ai">
      <div className="ai-industrial-intro reveal">
        <div className="section-label ai-label">// IA Industrial</div>
        <h2 className="ai-industrial-title">Inteligencia aplicada<br />a tu operación.</h2>
        <p className="ai-industrial-sub">Seis frentes de expertise donde combinamos datos, modelos y automatización con criterio de ingeniería de terreno.</p>
      </div>
      <div className="ai-caps-grid">
        {AI_CAPS.map((c, i) => (
          <div className={`ai-cap reveal${i === 1 ? ' ai-cap-dark' : ''}`} key={c.num}>
            <div className="ai-cap-num">{c.num}</div>
            <div className="ai-cap-title">{c.title.split('\n').map((line, k, arr) => (
              <React.Fragment key={k}>{line}{k < arr.length - 1 && <br />}</React.Fragment>
            ))}</div>
            <p className="ai-cap-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.AIBlocks = AIBlocks;
