import { business, whatsappLink } from '../data/content.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="contact">
          <div className="contact__text">
            <h2>¿Listo para pintar?</h2>
            <p>
              Escríbenos por WhatsApp para reservar tu lugar, organizar un
              cumpleaños o preguntar por las figuras disponibles.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--green contact__btn"
            >
              <WhatsAppIcon size={26} /> Escríbenos por WhatsApp
            </a>
          </div>

          <div className="contact__info">
            <div>
              <h3>📍 Dónde estamos</h3>
              <p>{business.address}</p>
            </div>
            <div>
              <h3>🕑 Horario</h3>
              <ul>
                {business.hours.map((h) => (
                  <li key={h.days}>
                    <strong>{h.days}:</strong> {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
