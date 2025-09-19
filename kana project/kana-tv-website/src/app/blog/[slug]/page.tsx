'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { ANIMATION_VARIANTS } from '@/constants'

// Mock blog post data - will be replaced with CMS data
const blogPost = {
  id: '1',
  title: 'Welcome to the New Kana TV Website',
  content: `
    <p>We're thrilled to announce the launch of our brand new website! This marks a significant milestone in Kana TV's digital journey, bringing you a more immersive and user-friendly experience.</p>
    
    <h2>A New Digital Experience</h2>
    <p>Our new website is designed with you in mind. Whether you're looking to catch up on your favorite shows, discover new content, or stay updated with the latest news, everything is now just a click away.</p>
    
    <h3>What's New?</h3>
    <ul>
      <li><strong>Enhanced Show Discovery:</strong> Browse our extensive library of dramas, variety shows, and educational content with ease.</li>
      <li><strong>Seamless YouTube Integration:</strong> Watch your favorite shows directly through our integrated YouTube playlists.</li>
      <li><strong>Mobile-First Design:</strong> Enjoy a perfect viewing experience on any device, anywhere.</li>
      <li><strong>Real-Time Updates:</strong> Stay informed with our latest news, events, and show announcements.</li>
    </ul>
    
    <h2>Behind the Design</h2>
    <p>We've drawn inspiration from some of the world's most innovative digital experiences, combining the clean, minimalist aesthetic of Radical Face with the bold, impactful design language of Nike. The result is a website that's both beautiful and functional.</p>
    
    <h3>Technical Excellence</h3>
    <p>Built with modern web technologies including Next.js, Tailwind CSS, and Framer Motion, our website delivers lightning-fast performance and smooth animations that enhance your browsing experience.</p>
    
    <h2>What's Next?</h2>
    <p>This is just the beginning. We're constantly working to improve your experience with new features, content, and functionality. Stay tuned for exciting updates!</p>
    
    <p>Thank you for being part of the Kana TV family. We can't wait to share this new journey with you.</p>
  `,
  author: 'Kana TV Team',
  publishedAt: '2025-01-15',
  readTime: '5 min read',
  tags: ['announcement', 'website', 'update'],
  featured: true,
  thumbnailUrl: '/api/placeholder/800/400'
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section - Nike Style */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={ANIMATION_VARIANTS.fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {blogPost.tags[0]}
              </span>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar size={16} className="mr-2" />
                {formatDate(blogPost.publishedAt)}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock size={16} className="mr-2" />
                {blogPost.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">{blogPost.title}</span>
            </h1>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center text-muted-foreground">
                <User size={16} className="mr-2" />
                By {blogPost.author}
              </div>
              <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Share2 size={16} className="mr-2" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="max-w-4xl mx-auto"
          >
            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl mb-12 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl font-bold gradient-text">K</span>
                  </div>
                  <p className="text-white/80 font-medium">Featured Article</p>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continue exploring with these related articles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((index) => (
              <motion.article
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  ...ANIMATION_VARIANTS.fadeIn,
                  transition: { delay: index * 0.1 }
                }}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-lg font-bold gradient-text">K</span>
                        </div>
                        <p className="text-white/80 text-sm">Related Post</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      Related Article {index}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      This is a related article that provides additional context and information about the topic.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(blogPost.publishedAt)}
                      </div>
                      <Link
                        href={`/blog/related-${index}`}
                        className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enjoyed This Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to get more stories like this delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
