import logo from '../assets/logo.png'
import heroPhoto from '../assets/hero-web.jpg'
import heroBackground from '../assets/hero-bg.jpg'
import { whatsappLink } from '../data/content.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import './Hero.css'

// PRUEBA: true = la foto va de fondo en todo el hero.
//         false = la foto va enmarcada a un lado del texto (versión anterior).
const PHOTO_AS_BACKGROUND = true

export default function Hero() {
  return (
    <section
      id="inicio"
      className={`hero ${PHOTO_AS_BACKGROUND ? 'hero--background' : ''}`}
      style={PHOTO_AS_BACKGROUND ? { '--hero-bg': `url(${heroBackground})` } : undefined}
    >
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="hero__tag">🎨 Moroleón, Gto.</span>
          <h1>
            Pinta tu mundo,
            <br />
            <span className="hero__highlight">una figura a la vez</span>
          </h1>
          <p>
            Ven a pintar alcancías y personajes de yeso a tu gusto. Una actividad
            divertida para niños, familias, parejas y amigos. ¡Tú pones la
            imaginación, nosotros todo lo demás!
          </p>
          <div className="hero__actions">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--green"
            >
              <WhatsAppIcon /> Escríbenos
            </a>
            <a href="#galeria" className="btn btn--white">
              Ver galería
            </a>
          </div>
        </div>

        {!PHOTO_AS_BACKGROUND && (
          <div className="hero__visual">
            <span className="hero__drop hero__drop--1" />
            <span className="hero__drop hero__drop--2" />
            <span className="hero__drop hero__drop--3" />
            <span className="hero__drop hero__drop--4" />
            <div className="hero__photo">
              <img
                src={heroPhoto}
                alt="Mesa de Pinta Tu Mundo con figuras de yeso listas para pintar"
              />
            </div>
            <img src={logo} alt="" className="hero__badge" />
          </div>
        )}
      </div>
    </section>
  )
}
