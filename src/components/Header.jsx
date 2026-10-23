import { useState } from 'react'
import logo from '../assets/logo.png'
import { whatsappLink } from '../data/content.js'
import './Header.css'

const links = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#galeria', label: 'Galería' },
  { href: '#precios', label: 'Precios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" onClick={close}>
          <img src={logo} alt="Pinta Tu Mundo" />
        </a>

        <button
          className="header__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--turquoise header__cta"
          >
            Reserva
          </a>
        </nav>
      </div>
    </header>
  )
}
