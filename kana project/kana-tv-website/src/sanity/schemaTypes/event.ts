import { defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
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
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'time',
      title: 'Event Time',
      type: 'string',
      description: 'e.g., "7:00 PM" or "All Day"'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Kana Warehouse" or "Online"'
    },
    {
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Concert', value: 'concert' },
          { title: 'Festival', value: 'festival' },
          { title: 'Special Broadcast', value: 'special' },
          { title: 'Warehouse Event', value: 'warehouse' },
          { title: 'Online Event', value: 'online' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage and featured sections'
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
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Link to event recording or live stream'
    },
    {
      name: 'ticketUrl',
      title: 'Ticket URL',
      type: 'url',
      description: 'Link to purchase tickets'
    },
    {
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
      description: 'Maximum number of attendees'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "Free", "$25", "From $15"'
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
      date: 'date',
      location: 'location',
      media: 'thumbnail'
    },
    prepare(selection) {
      const { title, type, date, location } = selection
      const eventDate = new Date(date).toLocaleDateString()
      return {
        title: title,
        subtitle: `${type} • ${eventDate} • ${location || 'TBA'}`,
        media: selection.media
      }
    }
  }
})
