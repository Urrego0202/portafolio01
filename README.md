# Portafolio — Camilo Urrego

Portafolio personal construido con **React + Vite** y tema oscuro.

---

## 🚀 Instalación

```bash
npm install
npm run dev
```

Luego abre [http://localhost:5173](http://localhost:5173) en el navegador.

---

## ✏️ Qué editar y dónde

| Qué quieres cambiar | Archivo |
|---|---|
| Agregar un proyecto | `src/data/projects.js` |
| Agregar tecnologías al stack | `src/data/skills.js` |
| Cambiar experiencia laboral | `src/data/experience.js` |
| Foto del proyecto principal | Sube la imagen a `public/img/` y pon `imageUrl: '/img/foto.png'` en `projects.js` |
| Colores y fuentes | `src/index.css` → variables en `:root` |

---

## ➕ Agregar un proyecto

Abre `src/data/projects.js` y copia este bloque dentro del array `projects`:

```js
{
  id: 'nombre-unico',
  featured: false,
  title: 'Nombre del proyecto',
  description: 'Qué hace y qué problema resuelve.',
  stack: ['PHP', 'Laravel'],
  githubUrl: 'https://github.com/Urrego0202/nombre',
  demoUrl: '',
  imageUrl: '',
},
```

Las cards con "Próximo proyecto" se reemplazan automáticamente.

---

## 📁 Estructura

```
src/
├── App.jsx
├── index.css              ← todos los estilos
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Perfil.jsx
│   ├── Projects.jsx       ← card grande + grilla
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   └── Contact.jsx
└── data/
    ├── projects.js        ← agrega proyectos aquí
    ├── skills.js          ← agrega tecnologías aquí
    └── experience.js      ← agrega experiencia aquí
```

---

## 🌐 Publicar gratis

```bash
npm run build
```

Sube la carpeta `dist/` a [Vercel](https://vercel.com), [Netlify](https://netlify.com) o GitHub Pages.
