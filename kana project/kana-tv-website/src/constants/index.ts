export const SHOW_CATEGORIES = [
  {
    id: 'drama',
    name: 'Drama',
    slug: 'drama',
    description: 'Turkish dubbed dramas and original local productions',
    color: 'bg-pink-500'
  },
  {
    id: 'variety',
    name: 'Variety Shows',
    slug: 'variety',
    description: 'Entertainment, talk shows, and variety programming',
    color: 'bg-purple-500'
  },
  {
    id: 'educational',
    name: 'Educational',
    slug: 'educational',
    description: 'Health, business, and educational content',
    color: 'bg-blue-500'
  },
  {
    id: 'kids',
    name: 'Kids',
    slug: 'kids',
    description: 'Children\'s programming and cartoons',
    color: 'bg-green-500'
  },
  {
    id: 'music',
    name: 'Music & Entertainment',
    slug: 'music',
    description: 'Live music, concerts, and entertainment',
    color: 'bg-yellow-500'
  },
  {
    id: 'news',
    name: 'News & Current Affairs',
    slug: 'news',
    description: 'News updates and current affairs programming',
    color: 'bg-red-500'
  },
  {
    id: 'documentary',
    name: 'Documentaries',
    slug: 'documentary',
    description: 'Documentary and factual programming',
    color: 'bg-indigo-500'
  }
] as const

export const NAVIGATION_ITEMS = [
  { name: 'Shows', href: '/shows' },
  { name: 'Events', href: '/events' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
] as const

export const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/@KanaTelevision',
  telegram: 'https://t.me/kana_televisions',
  instagram: '#',
  facebook: '#',
  twitter: '#'
} as const

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }
} as const
