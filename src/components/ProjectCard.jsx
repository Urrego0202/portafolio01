export default function ProjectCard({ project }) {
  return (
    <a
      href={project.githubUrl || '#'}
      target={project.githubUrl ? '_blank' : undefined}
      rel="noreferrer"
      className="project-card"
    >
      <div className="project-card-icon" style={{ background: project.iconBg }}>
        {project.icon}
      </div>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.stack.map((tech) => (
          <span className="tech-tag" key={tech}>{tech}</span>
        ))}
      </div>
    </a>
  )
}
