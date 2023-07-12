import React from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <h1>Entre em Contacto</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Informações de Contacto</h2>
          <p>
            <strong>Localização:</strong> Bairro das mahotas, Q.21, Maputo, Moçambique
          </p>
          <p>
            <strong>Email:</strong> info@googlemaps.com
          </p>
          <p>
            <strong>Telefone:</strong> (+258) 84 659 4587
          </p>

          <div className="social-media">
            <h2>Redes Sociais</h2>
            <ul>
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

        <div className="contact-form">
          <h2>Formulário de Contacto</h2>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Mensagem" rows="6"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
