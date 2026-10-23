import { whatsappLink } from '../data/content.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

const style = {
  position: 'fixed',
  right: 20,
  bottom: 20,
  zIndex: 50,
  width: 60,
  height: 60,
  display: 'grid',
  placeItems: 'center',
  borderRadius: '50%',
  background: 'var(--green)',
  color: 'var(--white)',
  border: 'var(--border)',
  boxShadow: 'var(--shadow-sm)',
}

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      style={style}
    >
      <WhatsAppIcon size={30} />
    </a>
  )
}
