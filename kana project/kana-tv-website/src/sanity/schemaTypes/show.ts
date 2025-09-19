import { defineType } from 'sanity'

export default defineType({
  name: 'show',
  title: 'Show',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(500)
    },
    {
      name: 'type',
      title: 'Show Type',
      type: 'string',
      options: {
        list: [
          { title: 'Drama', value: 'drama' },
          { title: 'Variety Show', value: 'variety' },
          { title: 'Educational', value: 'educational' },
          { title: 'Kids', value: 'kids' },
          { title: 'Music & Entertainment', value: 'music' },
          { title: 'News & Current Affairs', value: 'news' },
          { title: 'Documentary', value: 'documentary' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Completed', value: 'completed' },
          { title: 'Upcoming', value: 'upcoming' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'string',
      description: 'e.g., "Mon–Fri, 7:00 PM" or "Weekly primetime slot"'
    },
    {
      name: 'youtubePlaylistUrl',
      title: 'YouTube Playlist URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.'
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage featured section'
    },
    {
      name: 'trending',
      title: 'Trending',
      type: 'boolean',
      description: 'Show in trending section'
    },
    {
      name: 'latest',
      title: 'Latest',
      type: 'boolean',
      description: 'Show in latest section'
    },
    {
      name: 'cast',
      title: 'Cast & Crew',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'role',
              title: 'Role',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom title for search engines (optional)'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Custom description for search engines (optional)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      status: 'status',
      media: 'thumbnail'
    },
    prepare(selection) {
      const { title, type, status } = selection
      return {
        title: title,
        subtitle: `${type} • ${status}`,
        media: selection.media
      }
    }
  }
})
