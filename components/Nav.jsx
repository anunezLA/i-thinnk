/* global React */
const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  const close = () => setOpen(false);
  return (
    <>
      <nav style={{ borderBottomColor: scrolled ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.08)' }}>
        <a href="#" className="logo" onClick={close}>i<span>+</span>Thinnk®</a>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#red-tecnologica">Red Tecnológica</a></li>
          <li><a href="#ai">IA Industrial</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
        </ul>
        <a href="#contacto" className="nav-cta nav-cta-desktop">Agenda una consulta</a>
        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span>
        </button>
      </nav>
      <div className={`nav-drawer${open ? ' is-open' : ''}`} onClick={close}>
        <div className="nav-drawer-inner" onClick={(e) => e.stopPropagation()}>
          <div className="nav-drawer-label">// Menú</div>
          <ul>
            <li><a href="#servicios" onClick={close}>Servicios</a></li>
            <li><a href="#red-tecnologica" onClick={close}>Red Tecnológica</a></li>
            <li><a href="#ai" onClick={close}>IA Industrial</a></li>
            <li><a href="#nosotros" onClick={close}>Nosotros</a></li>
            <li><a href="#contacto" onClick={close}>Contacto</a></li>
          </ul>
          <a href="#contacto" className="btn-primary" onClick={close}>Solicitar consulta →</a>
          <div className="nav-drawer-foot">Los Ángeles, Chile · +56 9 8818 1242</div>
        </div>
      </div>
    </>
  );
}
window.Nav = Nav;
