/* global React */
const TICKER_ITEMS = [
  'Gestión de Proyectos','Ingeniería de Procesos','Consultoría en Equipamiento',
  'Estrategia Industrial','Activos Inmobiliarios','Red Tecnológica',
  'Mantenimiento Predictivo','NIR en línea','Eficiencia Energética','Reportería Automática'
];
function TickerRun() {
  return (
    <div className="ticker-item">
      {TICKER_ITEMS.map((t, i) => (
        <React.Fragment key={i}>
          <span className="ticker-text">{t}</span>
          <span className="ticker-sep">—</span>
        </React.Fragment>
      ))}
    </div>
  );
}
function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track"><TickerRun /><TickerRun /></div>
    </div>
  );
}
window.Ticker = Ticker;
