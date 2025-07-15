# 🛠️ Instalaciones García’s — Plataforma Web Profesional

**Instalaciones García’s** es una empresa especializada en drywall, remodelaciones, asesorías y reparaciones. Esta plataforma web busca ofrecer una experiencia profesional, cómoda y funcional tanto para clientes como para empleados y administradores.

---

## 🎯 Visión del Proyecto

- Mostrar de forma clara y profesional los servicios ofrecidos.
- Permitir que clientes y empresas soliciten cotizaciones y gestionen proyectos.
- Proveer a empleados y administradores herramientas para gestionar tareas, pagos y estadísticas.
- Escalar hacia un sistema completo con roles, cotizador dinámico y panel administrativo.

---

## 🧱 Jerarquía de Tecnologías

| Nivel           | Tecnología            | Rol                                                                |
|-----------------|-----------------------|--------------------------------------------------------------------|
| Conceptual      | Atomic Design         | Metodología para estructurar la UI                                 |
| Visual          | Design System         | Paleta, tipografía, espaciado, componentes                         |
| Utilitario      | Tailwind CSS          | Framework CSS para estilos rápidos                                 |
| Componentes     | shadcn/ui (opcional)  | Librería de componentes accesibles                                 |
| UI Docs         | Storybook             | Documentación visual de componentes                                |
| Frontend        | HTML + JavaScript modular + React + Vite | Estructura base del sitio con componentes reusables y bundler moderno |
| Lógica          | JavaScript(ES modules)| Modularización del comportamiento y lógica de interacción          |
| Hosting         | Render / GitHub Pages | Despliegue del sitio                                               |
| Backend         | Node.js + Express     |  API RESTful para autenticación, servicios, usuarios, etc.         |
| Base de Datos   | MongoDB (opcional)    | Almacenamiento NoSQL para usuarios, servicios, historial           |
| Seguridad       | JWT / bcrypt          | Autenticación y protección de rutas                                |
| API Layer       | REST API              | Comunicación entre frontend y backend                              |
| Testing         | Vitest / Supertest    | Pruebas unitarias y de integración para backend y frontend         |
| Dev Tools       | ESLint + Prettier     | Estilo de código y buenas prácticas                                |
| Hosting         | Render / GitHub Pages | Despliegue del backend (Render) y frontend estático (GitHub Pages) |
| CI/CD           | GitHub Actions        | Automatización de pruebas y despliegue continuo                    |
| Estado          | Zustand / Context API | Manejo de estado global o local en React                           |
| Formularios     | React Hook Form       | Manejo eficiente y validación de formularios                       |
| Routing         | React Router DOM      | Navegación entre vistas y roles                                    |




---

## 📁 Estructura de Carpetas

Instalaciones Garcia's/
│
├── public/                      # Archivos públicos como favicon o imágenes generales
│   ├── favicon.ico
│   └── logo.png
│
├── src/                         # Código fuente del frontend
│   ├── assets/                  # Íconos, imágenes específicas, fuentes
│   ├── styles/                  # Estilos CSS puros
│   │   └── main.css
│   ├── js/                      # Scripts JavaScript modulares
│   │   ├── main.js
│   │   ├── cotizador.js
│   │   └── validaciones.js
│   ├── components/              # Fragmentos HTML reutilizables
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── modal-cotizacion.html
│   └── pages/                   # Vistas principales
│       ├── index.html
│       ├── login.html
│       ├── panel-admin.html
│       ├── panel-empleado.html
│       └── panel-empresa.html
│
├── backend/                     # Lógica del servidor en Node.js + Express
│   ├── controllers/             # Funciones para manejar lógica de rutas
│   ├── routes/                  # Agrupación de rutas por tipo
│   ├── middleware/              # Autenticación y protección de rutas
│   ├── models/                  # Esquemas (MongoDB opcional)
│   ├── utils/                   # Funciones auxiliares
│   ├── .env                     # Variables sensibles (puerto, claves)
│   └── index.js                 # Entrada principal del servidor
│
├── dist/                        # CSS procesado (opcional si compilas)
├── docs/                        # Documentación técnica y visual
│   ├── flujo-navegacion.png
│   └── mapa-roles.md
│
├── package.json
├── .gitignore
├── README.md




---

## 🧭 Flujo Funcional Inicial

### Roles

- **Público general**: Ver servicios, solicitar cotización
- **Empresas**: Agendar visitas, subir planos, gestionar proyectos
- **Empleados**: Ver tareas, confirmar pagos, registrar horas
- **Administradores**: Ver estadísticas, registrar pagos, gestionar servicios y usuarios

### Funcionalidades clave

- Cotizador dinámico
- Gestión de servicios y materiales
- Registro de pagos y tareas
- Panel administrativo con estadísticas
- Sistema de roles y autenticación

---

## 🚧 Próximos pasos

[ ] Definir identidad visual (colores, tipografía, espaciado)

[ ] Crear primeros componentes atómicos

[ ] Implementar sistema de roles

[ ] Diseñar cotizador dinámico

[ ] Construir panel administrativo

[ ] Diagramar flujo de navegación entre roles

[ ] Definir estructura de base de datos (colecciones, relaciones)

[ ] Crear endpoints básicos en Node.js (auth, servicios, usuarios)

[ ] Configurar autenticación con JWT y bcrypt

[ ] Implementar sistema de notificaciones (visual o por correo)

[ ] Desarrollar versión MVP para pruebas internas

[ ] Configurar entorno de despliegue (Render + GitHub Pages)

[ ] Agregar pruebas básicas (Vitest / Supertest)

[ ] Establecer control de calidad con ESLint + Prettier

---

🧭 Paso a Paso del Funcionamiento de la Página
    1. Carga Inicial y Renderizado

        Tecnologías involucradas: React, Vite, Tailwind CSS, Atomic Design

        El navegador carga el index.html desde client/public/.

        Vite monta la app React desde main.jsx, que renderiza el componente raíz App.jsx.

        Se aplica el diseño visual desde el Design System (colores, tipografía, espaciado).

        Se muestran los primeros componentes atómicos (botones, inputs, etc.) definidos en components/.

    2. Navegación y Rutas

        Tecnología: React Router DOM

        El usuario navega entre páginas como /login, /panel, /cotizador, etc.

        Cada ruta carga un componente de pages/ y se envuelve en un layout según el rol (cliente, técnico, admin).

    3. Autenticación y Roles
        
        Tecnologías: React Hook Form, JWT, bcrypt, Node.js, MongoDB

        El usuario inicia sesión desde el formulario (/login).

        El frontend envía las credenciales al backend (/api/auth/login).

        El backend valida con bcrypt, genera un JWT y lo devuelve al frontend.

        El token se guarda en localStorage o cookies y se usa para acceder a rutas protegidas.

        El frontend detecta el rol desde el token y redirige al panel correspondiente.

    4. Paneles Dinámicos por Rol

        Tecnologías: React, Zustand o Context API, Tailwind, REST API

        El cliente ve su historial, solicita servicios y accede al cotizador.

        El técnico ve asignaciones, actualiza estados y registra materiales.

        El administrador gestiona usuarios, técnicos, reportes y pagos.

        Cada panel consume datos desde el backend usando fetch o axios desde services/.

    5. Cotizador Dinámico

        Tecnologías: React, React Hook Form, Zustand, Tailwind

        El cliente selecciona tipo de servicio, características, y el cotizador calcula el precio en tiempo real.

        Se puede guardar como solicitud o enviar directamente al backend.

    6. Gestión de Servicios y Base de Datos

        Tecnologías: Node.js, Express, MongoDB

        El backend expone rutas como:

        POST /api/servicios para crear solicitudes

        GET /api/servicios/:id para ver detalles

        PUT /api/servicios/:id para actualizar estado

        MongoDB almacena usuarios, roles, servicios, historial, etc.

    7. Notificaciones y Feedback

        Tecnologías: React, Toast, Email API (opcional)

        El sistema muestra notificaciones visuales (éxito, error, advertencia).

        Opcionalmente, se pueden enviar correos al cliente o técnico al cambiar el estado de un servicio.

    8. Testing y Calidad

        Tecnologías: Vitest, React Testing Library, Supertest, ESLint, Prettier

        Se escriben pruebas unitarias para componentes y lógica.

        Se validan rutas del backend con Supertest.

        Se mantiene el código limpio y consistente con linters y formateadores.

    9. Despliegue

        Tecnologías: Render, Vercel o GitHub Pages, GitHub Actions

        El backend se despliega en Render.

        El frontend se despliega en Vercel o GitHub Pages.

        GitHub Actions puede automatizar pruebas y despliegue continuo.

> Este archivo se actualizará a medida que el proyecto evolucione.
