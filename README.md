# Portafolio Personal - Yassir Paez

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Un portafolio personal moderno y responsivo desarrollado con React, Vite y Tailwind CSS, que muestra mis proyectos, experiencia y habilidades como desarrollador full stack.

## Características

- **Diseño Moderno**: Interfaz elegante con animaciones suaves y efectos visuales
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Rendimiento Optimizado**: Construido con Vite para máxima velocidad
- **Animaciones Interactivas**: Efectos de scroll, hover y transiciones fluidas
- **Componentes Reutilizables**: Arquitectura modular y mantenible
- **SEO Optimizado**: Meta tags y estructura semántica

## Tecnologías Utilizadas

### Frontend
- **React 18.2.0** - Biblioteca de interfaz de usuario
- **Vite 5.0.0** - Herramienta de construcción rápida
- **Tailwind CSS 3.4.0** - Framework de CSS utilitario
- **Framer Motion** - Biblioteca de animaciones
- **React Three Fiber** - Renderizado 3D con React

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Yassirp/mi_portafolio.git
   cd mi_portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de la construcción
npm run lint         # Ejecutar ESLint
```

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── HeroText.jsx    # Texto principal del hero
│   ├── Project.jsx     # Componente de proyecto
│   ├── Timeline.jsx    # Línea de tiempo de experiencia
│   └── ...
├── secciones/          # Secciones principales
│   ├── Hero.jsx        # Sección principal
│   ├── About.jsx       # Sobre mí
│   ├── Projects.jsx    # Proyectos
│   ├── Contact.jsx     # Contacto
│   └── ...
├── constants/          # Datos y configuraciones
│   └── index.js        # Información de proyectos y experiencia
└── assets/             # Recursos estáticos
```

## Secciones del Portafolio

- **Inicio**: Presentación personal con animaciones
- **Sobre Mí**: Información personal, ubicación y tecnologías
- **Proyectos**: Showcase de proyectos desarrollados
- **Experiencia**: Timeline de experiencia laboral
- **Contacto**: Formulario de contacto funcional

## Configuración

### Personalización de datos
Edita el archivo `src/constants/index.js` para actualizar:
- Información personal
- Proyectos
- Experiencia laboral
- Enlaces de redes sociales

### Estilos
Los estilos están configurados en:
- `src/index.css` - Estilos globales y clases personalizadas
- `tailwind.config.js` - Configuración de Tailwind CSS

## Responsive Design

El portafolio está optimizado para:
- Móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Pantallas grandes (1440px+)

## Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`
4. Despliega automáticamente

### Netlify
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Subir la carpeta dist/ a la rama gh-pages
```

## Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

**Yassir Paez** - Desarrollador Full Stack

- Email: yassirjose4@gmail.com
- LinkedIn: [Yassir Paez](https://www.linkedin.com/in/yassir-paez-a17b7633a/)
- WhatsApp: [+57 302 216 8470](https://wa.me/573022168470)
- Instagram: [@_yassirjpm](https://www.instagram.com/_yassirjpm/)

---

Si te gusta este proyecto, dale una estrella en GitHub!

## Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de UI
- [Vite](https://vitejs.dev/) - Herramienta de construcción
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - 3D con React