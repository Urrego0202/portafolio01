import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <nav className="wrap">
        <a href="#top" className="nav-logo">
          <span className="dot" />
          Portafolio
        </a>
        <ul className="nav-links">
          <li><a href="#perfil">Perfil</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#formacion">Formación</a></li>
        </ul>
        <a className="nav-cta" href="#contacto">Contactar</a>
        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-panel${open ? ' open' : ''}`}>
        <a href="#perfil" onClick={close}>Perfil</a>
        <a href="#stack" onClick={close}>Stack técnico</a>
        <a href="#proyectos" onClick={close}>Proyectos</a>
        <a href="#experiencia" onClick={close}>Experiencia</a>
        <a href="#formacion" onClick={close}>Formación</a>
        <a href="#contacto" onClick={close}>Contacto</a>
      </div>
    </header>
  )
}
