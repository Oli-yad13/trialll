export interface Show {
  id: string
  title: string
  description: string
  type: 'drama' | 'variety' | 'educational' | 'kids' | 'music' | 'news' | 'documentary'
  status: 'ongoing' | 'completed' | 'upcoming'
  schedule?: string
  youtubePlaylistUrl: string
  thumbnailUrl?: string
  featured: boolean
  trending: boolean
  latest: boolean
  createdAt: string
  updatedAt: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location?: string
  type: 'concert' | 'festival' | 'special' | 'warehouse'
  featured: boolean
  thumbnailUrl?: string
  youtubeUrl?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  featured: boolean
  thumbnailUrl?: string
  tags: string[]
}

export interface Page {
  id: string
  title: string
  slug: string
  content: string
  seoTitle?: string
  seoDescription?: string
  published: boolean
}

export interface TrendingContent {
  shows: Show[]
  events: Event[]
  blogPosts: BlogPost[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  shows: Show[]
  featured: boolean
}
