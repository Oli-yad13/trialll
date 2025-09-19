import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export { client, urlFor }

// Query functions
export async function getShows(): Promise<any[]> {
  const query = `*[_type == "show"] | order(_createdAt desc) {
    _id,
    title,
    description,
    type,
    status,
    schedule,
    youtubePlaylistUrl,
    thumbnail,
    featured,
    trending,
    latest,
    _createdAt,
    _updatedAt
  }`
  
  return await client.fetch(query)
}

export async function getFeaturedShows(): Promise<any[]> {
  const query = `*[_type == "show" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    title,
    description,
    type,
    status,
    schedule,
    youtubePlaylistUrl,
    thumbnail,
    featured,
    trending,
    latest,
    _createdAt,
    _updatedAt
  }`
  
  return await client.fetch(query)
}

export async function getTrendingContent(): Promise<any> {
  const query = `{
    "shows": *[_type == "show" && trending == true] | order(_createdAt desc) [0...4],
    "events": *[_type == "event" && featured == true] | order(date desc) [0...3],
    "blogPosts": *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3]
  }`
  
  return await client.fetch(query)
}

export async function getShowBySlug(slug: string): Promise<any> {
  const query = `*[_type == "show" && slug.current == "${slug}"][0] {
    _id,
    title,
    description,
    type,
    status,
    schedule,
    youtubePlaylistUrl,
    thumbnail,
    featured,
    trending,
    latest,
    _createdAt,
    _updatedAt
  }`
  
  return await client.fetch(query)
}
