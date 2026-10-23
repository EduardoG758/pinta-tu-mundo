import logo from '../assets/logo.png'
import { business } from '../data/content.js'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src={logo} alt="Pinta Tu Mundo" className="footer__logo" />
        <nav className="footer__social">
          {business.facebook && (
            <a href={business.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          )}
          {business.instagram && (
            <a href={business.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
        </nav>
        <p>© {year} Pinta Tu Mundo · Moroleón, Gto.</p>
      </div>
    </footer>
  )
}
