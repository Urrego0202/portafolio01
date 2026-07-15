export default function Perfil() {
  return (
    <section id="perfil">
      <div className="wrap">
        <div className="section-head">
          <h2>Perfil profesional</h2>
        </div>
        <div className="perfil-body">
          <p>
            Desarrollador de software con formación técnica enfocada en backend
            y bases de datos relacionales. Experiencia práctica en PHP y Laravel,
            con manejo de PostgreSQL y SQL Server. He liderado el desarrollo de
            un ERP de gestión de tickets end-to-end, realizando levantamiento de
            requerimientos, diseño de base de datos, desarrollo de API REST y
            autenticación. Orientado a código limpio, documentación y trabajo
            colaborativo en entornos dinámicos.
          </p>
          <div className="fact-list">
            <div className="fact">
              <div>
                <strong>Ubicación</strong>
                <span>Medellín, Antioquia · modalidad híbrida</span>
              </div>
            </div>
            <div className="fact">
              <div>
                <strong>Disponibilidad</strong>
                <span>Inmediata</span>
              </div>
            </div>
            <div className="fact">
              <div>
                <strong>Inglés</strong>
                <span>Técnico B2</span>
              </div>
            </div>
            <div className="fact">
              <div>
                <strong>Formación</strong>
                <span>Técnico en curso Desarrollo de Software — CESDE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
