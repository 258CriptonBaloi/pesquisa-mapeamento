import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Sobre Nós</h3>
          <ul className="social-media-links">
            <li>
              <a href="/">Missão</a>
            </li>
            <li>
              <a href="/">Visão</a>
            </li>
            <li>
              <a href="/">Valores</a>
            </li>
            <li>
              <a href="/">Politica de Privacidade</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Email: info@googlemaps.com</p>
          <p>Telefone: (+258) 84 659 4587</p>
        </div>
        <div className="footer-column">
          <h3>Redes Sociais</h3>
          <ul className="social-media-links">
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Goole Maps. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
