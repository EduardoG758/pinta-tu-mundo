// =====================================================================
//  CONTENIDO DE LA LANDING
//  Todo lo marcado con  ✏️ EJEMPLO  son datos de muestra: cámbialos
//  por los reales. Busca "EJEMPLO" en este archivo para encontrarlos.
// =====================================================================

// ✏️ EJEMPLO: tu número de WhatsApp con código de país (52) y sin espacios ni signos.
export const WHATSAPP_NUMBER = '5214450000000'

// ✏️ EJEMPLO: mensaje que aparece ya escrito al abrir WhatsApp.
export const WHATSAPP_MESSAGE =
  '¡Hola! Quiero información para pintar una figura en Pinta Tu Mundo 🎨'

export const whatsappLink = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const business = {
  // ✏️ EJEMPLO: dirección real del local.
  address: 'Calle Ejemplo #123, Centro, Moroleón, Gto.',
  // ✏️ EJEMPLO: horarios reales.
  hours: [
    { days: 'Martes a viernes', time: '4:00 pm – 8:00 pm' },
    { days: 'Sábado y domingo', time: '11:00 am – 7:00 pm' },
  ],
  // ✏️ EJEMPLO: enlaces a tus redes (deja '' para ocultar alguna).
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
}

export const steps = [
  {
    title: 'Elige tu figura',
    text: 'Alcancías, personajes, animalitos… escoge la figura de yeso que más te guste.',
    color: 'turquoise',
  },
  {
    title: 'Escoge tus colores',
    text: 'Te damos pinturas, pinceles y todo lo necesario. Tú solo decide los colores.',
    color: 'yellow',
  },
  {
    title: 'Píntala a tu manera',
    text: 'Relájate y deja volar tu imaginación. No necesitas experiencia.',
    color: 'pink',
  },
  {
    title: 'Llévatela a casa',
    text: 'Cuando seque, tu creación está lista para decorar o regalar.',
    color: 'green',
  },
]

// Galería: las fotos están en src/assets/gallery/web/ (copias optimizadas
// de tus originales en src/assets/gallery/). Para agregar una nueva:
// optimízala, guárdala en web/, impórtala aquí y agrégala a la lista.
// Si "image" es null se muestra una tarjeta de color.
import envidia from '../assets/gallery/web/envidia.jpg'
import hongo from '../assets/gallery/web/hongo.jpg'
import kuromi from '../assets/gallery/web/kuromi.jpg'
import mario from '../assets/gallery/web/mario.jpg'
import pato from '../assets/gallery/web/pato.jpg'
import deadpool from '../assets/gallery/web/pool.jpg'
import peach from '../assets/gallery/web/princess.jpg'
import stitch from '../assets/gallery/web/stich.jpg'

// category: 'alcancias' o 'personajes'. El botón de filtro de una categoría
// solo aparece cuando hay al menos una figura en ella.
export const gallery = [
  { title: 'Stitch', category: 'alcancias', image: stitch, color: 'turquoise' },
  { title: 'Kuromi', category: 'alcancias', image: kuromi, color: 'pink' },
  { title: 'Mario', category: 'alcancias', image: mario, color: 'coral' },
  { title: 'Envidia', category: 'alcancias', image: envidia, color: 'sky' },
  { title: 'Pato', category: 'alcancias', image: pato, color: 'yellow' },
  { title: 'Deadpool', category: 'alcancias', image: deadpool, color: 'pink' },
  { title: 'Princesa Peach', category: 'alcancias', image: peach, color: 'coral' },
  { title: 'Hongo de Mario', category: 'alcancias', image: hongo, color: 'green' },
]

export const galleryFilters = [
  { id: 'todas', label: 'Todas' },
  { id: 'alcancias', label: 'Alcancías' },
  { id: 'personajes', label: 'Personajes' },
]

// ✏️ EJEMPLO: precios, nombres y lo que incluye cada paquete.
export const prices = [
  {
    name: 'Figura chica',
    price: 80,
    description: 'Ideal para los más peques.',
    features: ['Figura de yeso chica', 'Pinturas y pinceles', 'Mesa de trabajo'],
    featured: false,
  },
  {
    name: 'Alcancía mediana',
    price: 150,
    description: 'La favorita de nuestros clientes.',
    features: ['Alcancía de yeso mediana', 'Pinturas, pinceles y brillos', 'Barniz final'],
    featured: true,
  },
  {
    name: 'Paquete fiesta',
    price: 120,
    priceSuffix: 'por niño',
    description: 'Cumpleaños y grupos (mín. 8).',
    features: ['Figura a elegir', 'Material para todos', 'Espacio reservado'],
    featured: false,
  },
]
