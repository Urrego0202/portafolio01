export default function Hero() {
  return (
    <section className="hero-section">
      <div className="wrap hero">
        <h1>Camilo Urrego <span>Pineda</span></h1>
        <p className="role">Programador — Backend &amp; Bases de Datos</p>
        <p className="lede">
          Desarrollador backend enfocado en PHP y Laravel, con manejo de
          PostgreSQL y SQL Server. Lideré el desarrollo end-to-end de un ERP
          de gestión de tickets: requerimientos, base de datos, API REST y
          autenticación.
        </p>
        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">Ver proyecto destacado</a>
          <a href="#contacto" className="btn btn-ghost">Contactar</a>
        </div>
      </div>
    </section>
  )
}
