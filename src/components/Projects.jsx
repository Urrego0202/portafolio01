import { projects, TOTAL_PROJECT_SLOTS } from '../data/projects.js'

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => !p.featured)

export default function Projects() {
  const emptySlots = Math.max(TOTAL_PROJECT_SLOTS - others.length, 0)

  return (
    <section id="proyectos">
      <div className="wrap">
        <div className="section-head">
          <h2>Proyecto destacado</h2>
        </div>

        {featured && <FeaturedCard project={featured} />}

        <div className="projects-grid">
          {others.map((p) => <FilledCard project={p} key={p.id} />)}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <EmptyCard key={`e-${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ project }) {
  return (
    <div className="featured-card">
      <div className="project-visual">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`Captura de ${project.title}`}
            style={{ width: '100%', maxWidth: 340, borderRadius: 8, display: 'block' }}
          />
        ) : (
          <div className="visual-placeholder">aquí va foto del proyecto</div>
        )}
      </div>
      <div className="project-info">
        <span className="project-kicker">{project.tag}</span>
        <h3>{project.title}</h3>
        <p className="desc">{project.description}</p>
        <ul>
          {project.bullets?.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="tech-row">
          {project.stack.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-btn">
              Ver en GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link-btn"
              style={{ background: 'var(--accent)', color: '#04201c', borderColor: 'var(--accent)' }}>
              Ver demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function FilledCard({ project }) {
  return (
    <a
      href={project.githubUrl || '#'}
      target={project.githubUrl ? '_blank' : undefined}
      rel="noreferrer"
      style={{
        display: 'flex', flexDirection: 'column', gap: 12,
        border: '1px solid var(--border)', borderRadius: 'var(--radius)',
        padding: '28px 24px', background: 'var(--bg-surface)',
        color: 'inherit', textDecoration: 'none',
        transition: 'border-color .2s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <h4 style={{ fontFamily: 'var(--display)', fontSize: '1rem', marginBottom: 4 }}>
        {project.title}
      </h4>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', flex: 1 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.stack.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
      </div>
    </a>
  )
}

function EmptyCard() {
  return (
    <div className="project-card-empty">
      <span className="plus">+</span>
      <p>Próximo proyecto</p>
    </div>
  )
}
