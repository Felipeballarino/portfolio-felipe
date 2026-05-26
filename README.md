# Portfolio Felipe Ballarino

Portfolio personal de Felipe Ballarino — Frontend Developer especializado en React/Next.js, microfrontends, IA y proyectos SaaS.

## Stack

- **Next.js 14** con App Router
- **TypeScript** estricto
- **Tailwind CSS v3** con tokens de color custom
- **Framer Motion** para animaciones
- **next-themes** para dark/light mode
- **next-intl** para i18n (ES / EN)
- **Fuentes:** Syne + DM Sans via next/font/google

## Setup local

### 1. Instalar dependencias

```bash
npm install
```

### 2. Variables de entorno

Crear archivo `.env.local` en la raíz (ya incluido, vacío — listo para agregar variables futuras):

```bash
# Variables de entorno - agregar según necesidad
```

### 3. Iniciar en desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el browser.

La app redirige automáticamente a `/es` por defecto.

### 4. Verificar funcionalidades

- **Dark/Light toggle**: Botón de luna/sol en la navbar
- **ES/EN toggle**: Botón de idioma en la navbar (cambia entre `/es` y `/en`)
- **Animaciones**: Scroll hacia abajo para ver las animaciones de cada sección
- **Responsive**: Probar en mobile (los links de nav se ocultan, los controles se mantienen)

## Build de producción

```bash
npm run build
npm start
```

## Estructura del proyecto

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx     # Layout con fuentes, ThemeProvider, IntlProvider
│   │   └── page.tsx       # Página principal con todas las secciones
│   └── globals.css        # CSS variables para colores + base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Navbar con scroll effect, locale/theme toggles
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx       # Hero con staggered animations
│   │   ├── About.tsx      # About con skill bars animadas
│   │   ├── Experience.tsx # Timeline vertical con slide animations
│   │   ├── Projects.tsx   # Grid de project cards
│   │   ├── Stack.tsx      # Grid de tech stack
│   │   └── Contact.tsx    # Contact links card
│   └── ui/
│       ├── AnimatedBackground.tsx  # Blobs + grid
│       ├── SkillBar.tsx            # Barra animada con useInView
│       ├── ProjectCard.tsx         # Card con hover effects
│       ├── Tag.tsx                 # Tag/badge
│       └── SectionLabel.tsx       # Label de sección con línea accent
├── data/
│   └── portfolio.ts       # Toda la data centralizada
├── i18n/
│   ├── request.ts         # Config de next-intl
│   ├── es.json            # Traducciones español
│   └── en.json            # Traducciones inglés
└── lib/
    └── utils.ts           # Utilidades (cn)
```
