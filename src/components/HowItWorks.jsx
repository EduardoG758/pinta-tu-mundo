import { steps } from '../data/content.js'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section how">
      <div className="container">
        <h2 className="section-title">¿Cómo funciona?</h2>
        <p className="section-subtitle">
          No necesitas experiencia ni traer nada. Solo ganas de divertirte.
        </p>

        <ol className="how__steps">
          {steps.map((step, i) => (
            <li key={step.title} className={`how__step how__step--${step.color}`}>
              <span className="how__number">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
