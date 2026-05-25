/* global React */
function CTA() {
  return (
    <section className="cta reveal" id="contacto">
      <h2>¿Listo para<br /><span>avanzar?</span></h2>
      <div className="cta-right">
        <p>Cuéntanos tu desafío. Respondemos rápido y directo, sin intermediarios.</p>
        <a href="tel:+56988181242" className="btn-white">+56 9 8818 1242 →</a>
        <a href="mailto:info@i-thinnk.com" className="btn-outline-white">info@i-thinnk.com</a>
      </div>
    </section>
  );
}
window.CTA = CTA;

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">i<span>+</span>Thinnk®</a>
      <span className="footer-copy">© 2026 i+Thinnk® · Los Ángeles, Chile · Todos los derechos reservados</span>
      <div className="footer-links">
        <a href="#servicios">Servicios</a>
        <a href="#red-tecnologica">Red Tecnológica</a>
        <a href="#ai">IA Industrial</a>
        <a href="#contacto">Contacto</a>
      </div>
    </footer>
  );
}
window.Footer = Footer;
