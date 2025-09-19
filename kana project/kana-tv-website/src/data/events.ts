import { Event } from '@/types'

export const kanaTvEvents: Event[] = [
  // KANA WAREHOUSE EVENTS
  {
    id: 'kana-warehouse-concert-2025',
    title: 'Kana Warehouse Concert 2025',
    description: 'Major concert event at Kana Warehouse featuring top Ethiopian artists and international acts.',
    date: '2025-03-15',
    time: '7:00 PM',
    location: 'Kana Warehouse',
    type: 'concert',
    featured: true,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example',
    capacity: 2000,
    price: 'From $25'
  },
  {
    id: 'kana-warehouse-festival-2025',
    title: 'Kana Warehouse Festival 2025',
    description: 'Annual music and cultural festival showcasing the best of Ethiopian entertainment.',
    date: '2025-06-20',
    time: 'All Day',
    location: 'Kana Warehouse',
    type: 'festival',
    featured: true,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example',
    capacity: 2000,
    price: 'From $15'
  },
  {
    id: 'kana-warehouse-special-event',
    title: 'Kana Warehouse Special Event',
    description: 'Exclusive event for partners and special guests at the iconic 13m-high column-free hall.',
    date: '2025-02-28',
    time: '8:00 PM',
    location: 'Kana Warehouse',
    type: 'warehouse',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    capacity: 2000,
    price: 'Invitation Only'
  },

  // SPECIAL BROADCASTS
  {
    id: 'zare-ke-kana-special',
    title: 'Zare Ke Kana Special Edition',
    description: 'Extended 8-hour special edition of the popular Sunday variety show with special guests.',
    date: '2025-02-14',
    time: '2:00 PM - 10:00 PM',
    location: 'Kana TV Studios',
    type: 'special',
    featured: true,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'lijes-premiere',
    title: 'Lijes Season 2 Premiere',
    description: 'Exclusive premiere of the second season of Kana\'s flagship local drama.',
    date: '2025-04-01',
    time: '8:00 PM',
    location: 'Kana TV Studios',
    type: 'special',
    featured: true,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'kana-anniversary',
    title: 'Kana TV Anniversary Celebration',
    description: 'Special celebration marking another year of Kana TV\'s success in Ethiopian entertainment.',
    date: '2025-05-15',
    time: '7:00 PM',
    location: 'Kana TV Studios',
    type: 'special',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example'
  },

  // ONLINE EVENTS
  {
    id: 'kana-live-session',
    title: 'Kana Live Session',
    description: 'Interactive live session with viewers, Q&A, and behind-the-scenes content.',
    date: '2025-01-25',
    time: '6:00 PM',
    location: 'Online',
    type: 'online',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'kana-workshop',
    title: 'Kana TV Production Workshop',
    description: 'Educational workshop for aspiring content creators and filmmakers.',
    date: '2025-03-10',
    time: '10:00 AM',
    location: 'Online',
    type: 'online',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example'
  },

  // REGULAR EVENTS
  {
    id: 'weekly-music-showcase',
    title: 'Weekly Music Showcase',
    description: 'Regular weekly showcase of new and emerging Ethiopian artists.',
    date: '2025-01-20',
    time: '9:00 PM',
    location: 'Kana TV Studios',
    type: 'concert',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'monthly-debate',
    title: 'Monthly Social Issues Debate',
    description: 'Special extended edition of Kesira Behuala tackling current social issues.',
    date: '2025-02-05',
    time: '8:00 PM',
    location: 'Kana TV Studios',
    type: 'special',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    youtubeUrl: 'https://www.youtube.com/watch?v=example'
  }
]

// Helper functions
export function getEventsByType(type: Event['type']): Event[] {
  return kanaTvEvents.filter(event => event.type === type)
}

export function getFeaturedEvents(): Event[] {
  return kanaTvEvents.filter(event => event.featured)
}

export function getUpcomingEvents(): Event[] {
  const now = new Date()
  return kanaTvEvents
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getEventById(id: string): Event | undefined {
  return kanaTvEvents.find(event => event.id === id)
}

export function getKanaWarehouseEvents(): Event[] {
  return kanaTvEvents.filter(event => event.location === 'Kana Warehouse')
}
