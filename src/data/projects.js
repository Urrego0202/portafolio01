
// Para agregar un proyecto nuevo, copia el bloque comentado
// al final del array "projects" y rellena los campos.
//
// featured: true  →  aparece en la card grande principal.
//                    Solo debe haber UNO marcado así.
// featured: false →  aparece en la grilla de cards pequeñas.
//
// imageUrl: ruta a una captura de pantalla (ej. '/img/tickets.png')
//           Deja "" para mostrar el placeholder "aquí va foto".


export const projects = [
  {
    id: 'helpdesk-erp',
    featured: true,
    tag: 'proyecto principal',
    title: 'ERP de Gestión de Tickets',
    description:
      'Sistema end-to-end para la creación, asignación y trazabilidad de solicitudes de soporte, desarrollado desde el levantamiento de requerimientos hasta la integración completa de frontend y backend.',
    bullets: [
      'Levantamiento y análisis de requerimientos funcionales con usuarios finales.',
      'Diseño e implementación de base de datos relacional en PostgreSQL.',
      'CRUD completo, autenticación de usuarios y trazabilidad de solicitudes con Laravel.',
      'Integración de frontend en React con la API REST del backend.',
    ],
    stack: ['PHP', 'Laravel', 'PostgreSQL', 'React'],
    githubUrl: 'https://github.com/Urrego0202',
    demoUrl: 'https://github.com/Urrego0202',
    imageUrl: '/img/images.jpg',
  },


  // Ejemplo de proyecto secundario

  // {
  //   id: 'nombre-unico',
  //   featured: false,
  //   title: 'Nombre del proyecto',
  //   description: 'Qué hace y qué problema resuelve.',
  //   stack: ['PHP', 'Laravel'],
  //   githubUrl: 'https://github.com/nombre',
  //   imageUrl: '',
  // },
]
export const TOTAL_PROJECT_SLOTS = 3 //espacios en sección otros proyectos
