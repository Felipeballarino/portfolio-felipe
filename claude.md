Sos un desarrollador frontend senior especializado en Next.js y diseño UI moderno.
Tu tarea es crear desde cero el portfolio personal de Felipe Ballarino, un Frontend
Developer con experiencia en React/Next.js, microfrontends, integración de IA y
proyectos SaaS propios.

---

## STACK TÉCNICO OBLIGATORIO

- Next.js 14+ con App Router
- TypeScript estricto (strict: true en tsconfig)
- Tailwind CSS v3 para estilos
- Framer Motion para animaciones
- next-themes para toggle dark/light
- next-intl para internacionalización (ES / EN)
- Fuentes: Syne (display/headings) + DM Sans (body) via next/font/google

---

## ESTRUCTURA DE CARPETAS

src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Stack.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── SkillBar.tsx
│       ├── ProjectCard.tsx
│       ├── Tag.tsx
│       └── SectionLabel.tsx
├── data/
│   └── portfolio.ts       ← toda la data centralizada acá, sin hardcodear en JSX
├── i18n/
│   ├── es.json
│   └── en.json
└── lib/
    └── utils.ts

---

## PALETA DE COLORES (Tailwind custom tokens en tailwind.config.ts)

Dark mode (default):
  bg: #0a0a0f
  bg-secondary: #111118
  bg-tertiary: #1a1a24
  surface: #1e1e2a
  border: #2a2a3a
  border-2: #3a3a50
  text: #f0f0f8
  text-secondary: #9090b0
  text-muted: #5a5a7a
  accent: #7c6cfa
  accent-2: #a78bfa
  accent-3: #c4b5fd

Light mode:
  bg: #f8f8fc
  bg-secondary: #f0f0f8
  surface: #ffffff
  border: #d8d8e8
  text: #0a0a1a
  text-secondary: #4a4a6a
  accent: #6c5ce7

---

## EFECTOS VISUALES Y ANIMACIONES (Framer Motion)

- Fondo: dos blobs animados con blur pesado, movimiento suave con keyframes
- Grid lines sutiles en fondo (CSS background-image con gradients)
- Navbar: blur backdrop, borde inferior, transición suave al hacer scroll
- Hero: staggered fadeUp para label, h1, subtítulo, CTAs y stats (delays escalonados)
- Secciones: useInView de Framer Motion para reveal al hacer scroll (fadeUp + slide)
- Timeline de experiencia: entrada desde la izquierda con slide + fade
- Barras de skills: animación de fill izquierda→derecha al entrar en viewport
- Project cards: hover con translateY(-4px) + border color transition + image zoom
- Stack items: hover con translateY(-3px) + glow sutil

---

## SECCIONES Y CONTENIDO

### NAVBAR
- Logo: "fb." con punto en color accent
- Links: Sobre mí · Experiencia · Proyectos · Stack · Contacto
- Controles: toggle de idioma (ES/EN) + toggle de tema (Dark/Light)
- Mobile: ocultar nav-links, mantener controles

### HERO
- Chip superior: "Disponible para proyectos · Villa María, Argentina"
- H1: "Felipe / Ballarino" — "Ballarino" en color accent-2, tamaño clamp(3rem, 7vw, 6rem)
- Subtítulo: Frontend Developer especializado en React & Next.js, microfrontends, IA y proyectos SaaS propios
- CTAs: botón primario "Hablemos →" (href #contact) + botón outline "Ver experiencia"
- Stats: 3 items con borde izquierdo accent: "5+ años de experiencia", "15+ proyectos en producción", "1 librería en NPM"
- Scroll hint animado al fondo

### SOBRE MÍ
- Layout: 2 columnas (texto izquierda, skill card derecha)
- Párrafo 1: soy el único dev frontend en IRSA, trabajo codo a codo con el equipo de backend
- Párrafo 2: estoy liderando la migración a microfrontends con Webpack Module Federation — proceso en constante evolución, aprendiendo junto al equipo. App de seguridad real-time con WebSockets, en colaboración con back, rollout nacional.
- Párrafo 3: proyectos propios con Claude API, FastAPI + PostgreSQL, agentes de IA multi-step
- Tags: React.js · Next.js · TypeScript · Node.js · FastAPI · PostgreSQL · Claude API · WebSockets
- Skill card derecha con barras animadas:
  React/Next 95% · TypeScript 88% · Node.js 75% · FastAPI 65% · PostgreSQL 60% · Claude API 80%

### EXPERIENCIA (timeline vertical)
Línea vertical con gradiente. Cada item:

1. Frontend Developer — IRSA · Grupo IRSA (2023–Presente)
   - Único dev frontend, responsable end-to-end del ecosistema UI
   - Arquitectura microfrontends con Webpack Module Federation, proceso vivo junto al equipo de back
   - Publiqué irsa-component-ui en NPM (~10 componentes), adoptada transversalmente
   - App de seguridad real-time con WebSockets, en colaboración con backend — rollout nacional en shoppings +100 locales
   - Portales web: Museo de los Niños, Portal de Impuestos, Portal de Locatarios

2. Freelance Frontend Developer (2023–Presente)
   - Proyectos SaaS propios: ClienteVivo, Óptica Morea, CRM Contable
   - Integración Claude API, agentes de IA multi-step
   - Stack: React, Next.js, FastAPI, PostgreSQL, Supabase

3. Full Stack Developer — Custer (2021–2023)
   - Lideré desarrollo end-to-end de 15+ proyectos para clientes reales
   - Stack: React, Next.js, Node.js, Firebase, MongoDB
   - Coordinación con equipos de diseño y marketing

### PROYECTOS (grid 3 columnas, responsive)
Cards con thumbnail superior, badge de contexto, descripción y tags de stack.
Orden y data:

1. Óptica Morea — optica-morea.vercel.app — Proyecto propio
   Sitio web para óptica en Villa María. Anteojos, lentes y terapia visual. Desplegado en Vercel.
   Stack: Next.js · TypeScript · Tailwind · Vercel

2. Rialto — rialto.ar — Custer · Solo front
   Hotel boutique entre montañas, valle y río. Landing con experiencia visual inmersiva.
   Stack: React · CSS · Animaciones

3. Clínica Marañon — clinicamaranon.com — Custer · Solo front
   Sitio institucional para clínica médica. Especialidades, coberturas y turnos online.
   Stack: Next.js · React · Responsive

4. Ferretería García — garciadistribuidora.com.ar — Freelance
   Sitio para distribuidora y ferretería. Catálogo de productos y presencia online.
   Stack: React · JavaScript · CSS

5. CH Distribuidora — chdistribuidora.com.ar — Freelance
   Sitio web para distribuidora. Presencia digital y catálogo de productos.
   Stack: React · JavaScript · CSS

6. Arlequín Cotillón — (railway url) — Freelance
   Catálogo online para cotillería. Envíos y atención personalizada.
   Stack: React · Railway · E-commerce

Para las thumbnails: usar next/image con object-cover, object-position top, fallback con emoji si la imagen no carga.

### STACK (grid de íconos)
12 items. Featured (borde accent): React, Next.js, TypeScript, Claude API
Resto: JavaScript, Tailwind, Node.js, FastAPI, PostgreSQL, Webpack MF, Supabase, Vercel

### CONTACTO
- Título: "¿Trabajamos juntos?"
- Subtítulo: disponible para freelance, posiciones remote y consultoría en frontend + IA
- Card central con 4 links: Gmail · LinkedIn · GitHub · Portfolio
  - Gmail: Felipeballarino97@gmail.com
  - LinkedIn: linkedin.com/in/felipe-ballarino
  - GitHub: github.com/Felipeballarino
  - Portfolio actual: porfolio-felipe.vercel.app

---

## INTERNACIONALIZACIÓN (next-intl)

Implementar con locale en la URL: /es/* y /en/*
Default locale: es
Todos los textos deben estar en i18n/es.json e i18n/en.json
Campos a traducir: todas las labels de nav, secciones, párrafos del about,
bullets de experiencia, descripción de proyectos y contact.
Los datos que no cambian (URLs, emails, stack names) pueden estar solo en portfolio.ts

---

## TEMA (next-themes)

Provider en el root layout. Clase en <html>: dark por defecto.
Tailwind configurado con darkMode: 'class'.
Todos los colores deben funcionar en ambos temas sin excepción.

---

## SETUP LOCAL — pasos finales

Al terminar de generar todo el código, incluí estos pasos en un archivo README.md:

1. npm install
2. Crear .env.local vacío (preparado para agregar variables futuras)
3. npm run dev → http://localhost:3000
4. Verificar que dark/light toggle y ES/EN funcionen correctamente

---

## RESTRICCIONES

- No usar `pages/` router, solo App Router
- No usar CSS Modules ni styled-components — solo Tailwind
- No hardcodear strings en JSX — todo via i18n o data/portfolio.ts
- No usar imágenes locales para thumbnails — usar URLs externas con next/image
- El código debe tipar todo correctamente (no usar `any`)
- Cada componente en su propio archivo, sin componentes gigantes