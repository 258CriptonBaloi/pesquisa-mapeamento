import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Sobre Nós</h3>
          <p>Informações sobre a empresa e sua missão.</p>
        </div>
        <div className="footer-column">
          <h3>Contato</h3>
          <p>Entre em contato conosco por email ou telefone.</p>
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
