export type ProjectStatus = 'completed' | 'in-progress'

export type Project = {
  id: string
  name: string
  url: string
  context: string
  thumbnailUrl: string
  fallbackEmoji: string
  stack: string[]
  status: ProjectStatus
}

export type SkillItem = {
  name: string
  percent: number
}

export type StackItem = {
  name: string
  abbr: string
  featured: boolean
  color: string
  bg: string
}

export type ContactLink = {
  id: string
  href: string
  value: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 'optica-morea',
    name: 'Óptica Morea',
    url: 'https://opticamorea.com.ar/',
    context: 'Proyecto propio',
    thumbnailUrl:
      'https://image.thum.io/get/width/800/crop/500/noanimate/https://optica-morea.vercel.app',
    fallbackEmoji: '👓',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    status: 'completed',
  },
  {
    id: 'somos-su-voz',
    name: 'Somos Su Voz',
    url: 'https://somos-su-voz.vercel.app/',
    context: 'Proyecto propio',
    thumbnailUrl:
      'https://image.thum.io/get/width/800/crop/500/noanimate/https://somos-su-voz.vercel.app/',
    fallbackEmoji: '🐶',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    status: 'in-progress',
  },
  {
    id: 'clinica-maranon',
    name: 'Clínica Marañon',
    url: 'https://clinicamaranon.com',
    context: 'Custer · Solo front',
    thumbnailUrl:
      'https://image.thum.io/get/width/800/crop/500/noanimate/https://clinicamaranon.com',
    fallbackEmoji: '🏥',
    stack: ['Next.js', 'JavaScript', 'CSS'],
    status: 'completed',
  },
  {
    id: 'ferreteria-garcia',
    name: 'Ferretería García',
    url: 'https://garciadistribuidora.com.ar',
    context: 'Freelance',
    thumbnailUrl:
      'https://image.thum.io/get/width/800/crop/500/noanimate/https://garciadistribuidora.com.ar',
    fallbackEmoji: '🔧',
    stack: ['React', 'JavaScript', 'CSS'],
    status: 'completed',
  },
  {
    id: 'ch-distribuidora',
    name: 'CH Distribuidora',
    url: 'https://chdistribuidora.com.ar',
    context: 'Freelance',
    thumbnailUrl:
      'https://image.thum.io/get/width/800/crop/500/noanimate/https://chdistribuidora.com.ar',
    fallbackEmoji: '📦',
    stack: ['React', 'JavaScript', 'CSS'],
    status: 'completed',
  },
  {
    id: 'arlequin-cotillon',
    name: 'Arlequín Cotillón',
    url: 'https://arlequinmayorista.com.ar/',
    context: 'Freelance',
    thumbnailUrl:
      'https://image.thum.io/get/width/800/crop/500/noanimate/https://arlequinmayorista.com.ar',
    fallbackEmoji: '🎉',
    stack: ['React', 'CSS', 'E-commerce'],
    status: 'completed',
  },
]

export const skills: SkillItem[] = [
  { name: 'React / Next.js', percent: 95 },
  { name: 'TypeScript', percent: 88 },
  { name: 'Claude API', percent: 80 },
  { name: 'Node.js', percent: 60 },
  { name: 'FastAPI', percent: 50 },
  { name: 'PostgreSQL', percent: 40 },
]

export const stackItems: StackItem[] = [
  { name: 'React', abbr: 'Re', featured: true, color: '#61DAFB', bg: '#20232A' },
  { name: 'Next.js', abbr: '▲', featured: true, color: '#ffffff', bg: '#000000' },
  { name: 'TypeScript', abbr: 'TS', featured: true, color: '#ffffff', bg: '#3178C6' },
  { name: 'Claude API', abbr: 'AI', featured: true, color: '#c87700', bg: '#1a1118' },
  { name: 'JavaScript', abbr: 'JS', featured: false, color: '#000000', bg: '#F7DF1E' },
  { name: 'Tailwind', abbr: 'Tw', featured: false, color: '#ffffff', bg: '#06B6D4' },
  { name: 'Node.js', abbr: 'No', featured: false, color: '#ffffff', bg: '#339933' },
  { name: 'FastAPI', abbr: 'FA', featured: false, color: '#ffffff', bg: '#009688' },
  { name: 'PostgreSQL', abbr: 'PG', featured: false, color: '#ffffff', bg: '#336791' },
  { name: 'Webpack MF', abbr: 'WP', featured: false, color: '#ffffff', bg: '#8DD6F9' },
  { name: 'Supabase', abbr: 'SB', featured: false, color: '#ffffff', bg: '#3ECF8E' },
  { name: 'Vercel', abbr: '▲', featured: false, color: '#ffffff', bg: '#000000' },
]

export const contactLinks: ContactLink[] = [
  {
    id: 'gmail',
    href: 'mailto:Felipeballarino97@gmail.com',
    value: 'Felipeballarino97@gmail.com',
    icon: '✉',
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/felipe-ballarino',
    value: 'linkedin.com/in/felipe-ballarino',
    icon: 'in',
  },
  {
    id: 'github',
    href: 'https://github.com/Felipeballarino',
    value: 'github.com/Felipeballarino',
    icon: '⌥',
  },
  {
    id: 'whatsapp',
    href: 'https://wa.me/5493534196213',
    value: '+54 9 353 419 6213',
    icon: '💬',
  },
]
