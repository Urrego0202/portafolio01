export default function EmptyProjectCard() {
  return (
    <div className="project-card project-card-empty">
      <div className="project-card-icon project-card-icon-empty">+</div>
      <h4>Próximo proyecto</h4>
      <p>
        Este espacio está listo para tu siguiente desarrollo. Agrégalo en{' '}
        <code>src/data/projects.js</code>.
      </p>
    </div>
  )
}
