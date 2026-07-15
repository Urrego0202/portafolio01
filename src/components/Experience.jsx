import { experiences } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="wrap">
        <div className="section-head">
          <h2>Experiencia laboral</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="tl-item" key={exp.id}>
              <div className="tl-date">{exp.period}</div>
              <div className="tl-content">
                <h3>{exp.title}</h3>
                <div className="org">{exp.org}</div>
                <ul>
                  {exp.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
