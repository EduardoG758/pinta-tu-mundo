import { prices, whatsappLink } from '../data/content.js'
import './Pricing.css'

export default function Pricing() {
  return (
    <section id="precios" className="section pricing">
      <div className="container">
        <h2 className="section-title">Precios</h2>
        <p className="section-subtitle">
          Todo el material está incluido. Solo llega y empieza a pintar.
        </p>

        <div className="pricing__grid">
          {prices.map((plan) => (
            <article
              key={plan.name}
              className={`pricing__card ${plan.featured ? 'pricing__card--featured' : ''}`}
            >
              {plan.featured && <span className="pricing__badge">⭐ Más popular</span>}
              <h3>{plan.name}</h3>
              <p className="pricing__description">{plan.description}</p>
              <p className="pricing__price">
                ${plan.price}
                <small> MXN{plan.priceSuffix ? ` ${plan.priceSuffix}` : ''}</small>
              </p>
              <ul className="pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href={whatsappLink(`¡Hola! Me interesa el paquete "${plan.name}" de Pinta Tu Mundo 🎨`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.featured ? 'btn--white' : 'btn--turquoise'}`}
              >
                Lo quiero
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
