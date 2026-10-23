import { useState } from 'react'
import { gallery, galleryFilters } from '../data/content.js'
import './Gallery.css'

export default function Gallery() {
  const [filter, setFilter] = useState('todas')
  const items = filter === 'todas' ? gallery : gallery.filter((item) => item.category === filter)
  const filters = galleryFilters.filter(
    (f) => f.id === 'todas' || gallery.some((item) => item.category === f.id),
  )

  return (
    <section id="galeria" className="section">
      <div className="container">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">
          Algunas de las creaciones de nuestros pequeños (y grandes) artistas.
        </p>

        {/* los filtros solo tienen sentido con más de una categoría */}
        {filters.length > 2 && (
          <div className="gallery__filters">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`gallery__filter ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        <ul className="gallery__grid">
          {items.map((item) => (
            <li key={item.title} className={`gallery__item gallery__item--${item.color}`}>
              {item.image ? (
                <img src={item.image} alt={item.title} loading="lazy" />
              ) : (
                <div className="gallery__placeholder" aria-hidden="true">
                  🎨
                </div>
              )}
              <span className="gallery__caption">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
