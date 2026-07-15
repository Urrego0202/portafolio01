import TicketAppPreview from './TicketAppPreview.jsx'

export default function FeaturedProject({ project }) {
  return (
    <div className="featured-card">
      <div className="featured-preview">
        <TicketAppPreview compact />
      </div>
      <div className="featured-info">
        <span className="featured-tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.stack.map((tech) => (
            <span className="tech-tag" key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-btn link-btn-primary">
              Ver en GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="link-btn link-btn-ghost">
              Ver demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
