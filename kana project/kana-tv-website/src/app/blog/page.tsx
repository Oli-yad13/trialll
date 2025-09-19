'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { ANIMATION_VARIANTS } from '@/constants'

// Mock blog data - will be replaced with CMS data
const blogPosts = [
  {
    id: '1',
    title: 'Welcome to the New Kana TV Website',
    excerpt: 'Discover all your favorite shows in one place with our brand new website. Experience the best of Ethiopian entertainment like never before.',
    author: 'Kana TV Team',
    publishedAt: '2025-01-15',
    featured: true,
    thumbnailUrl: '/api/placeholder/600/400',
    tags: ['announcement', 'website', 'update']
  },
  {
    id: '2',
    title: 'Behind the Scenes: Creating Lijes',
    excerpt: 'Get an exclusive look at how our flagship 2025 drama Lijes came to life. From script to screen, discover the creative process.',
    author: 'Production Team',
    publishedAt: '2025-01-10',
    featured: true,
    thumbnailUrl: '/api/placeholder/600/400',
    tags: ['behind-the-scenes', 'drama', 'production']
  },
  {
    id: '3',
    title: 'Kana Warehouse: A Venue Like No Other',
    excerpt: 'Explore the 13-meter high, 2000-capacity venue that hosts some of Ethiopia\'s biggest concerts and events.',
    author: 'Events Team',
    publishedAt: '2025-01-05',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    tags: ['venue', 'events', 'concerts']
  },
  {
    id: '4',
    title: 'The Art of Dubbing: Bringing International Content to Ethiopia',
    excerpt: 'Learn about our dubbing process and how we make international shows accessible to Ethiopian audiences.',
    author: 'Content Team',
    publishedAt: '2025-01-01',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    tags: ['dubbing', 'international', 'content']
  },
  {
    id: '5',
    title: 'Zare Ke Kana: A 5-Hour Entertainment Extravaganza',
    excerpt: 'Dive into the making of our Sunday tentpole show that combines film reunions, quizzes, cook-offs, and more.',
    author: 'Variety Team',
    publishedAt: '2024-12-28',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    tags: ['variety', 'sunday', 'entertainment']
  },
  {
    id: '6',
    title: 'Educational Programming: Empowering Through Knowledge',
    excerpt: 'Discover how our educational shows like Hiwote and #Sheqela are making a difference in Ethiopian communities.',
    author: 'Educational Team',
    publishedAt: '2024-12-25',
    featured: false,
    thumbnailUrl: '/api/placeholder/600/400',
    tags: ['educational', 'community', 'impact']
  }
]

const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0]
const regularPosts = blogPosts.filter(post => !post.featured)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Nike Style */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="gradient-text">Stories</span>
              <br />
              <span className="text-foreground">Behind the</span>
              <br />
              <span className="gradient-text">Screen</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Discover the stories, insights, and behind-the-scenes content that bring 
              Kana TV's programming to life. From production secrets to community impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Read Latest Posts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Subscribe to Updates
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post - Nike Style Large Card */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Story</h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Our most important stories and updates
            </p>
          </motion.div>

          <motion.article
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.scaleIn}
            className="group"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold gradient-text">K</span>
                      </div>
                      <p className="text-white/80 font-medium">Featured Post</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(featuredPost.publishedAt)}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User size={16} className="mr-2" />
                      {featuredPost.author}
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of stories, insights, and updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
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
                        <p className="text-white/80 text-sm">Blog Post</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                        {post.tags[0]}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User size={12} className="mr-1" />
                        {post.author}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                      >
                        Read
                        <ArrowRight size={12} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Nike Style */}
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
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest stories, show updates, and behind-the-scenes content delivered to your inbox.
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
