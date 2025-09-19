import { type SchemaTypeDefinition } from 'sanity'

import show from './show'
import event from './event'
import blogPost from './blogPost'
import page from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [show, event, blogPost, page],
}