'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedShows } from '@/data/shows'
import AnimatedButton from '@/components/ui/AnimatedButton'
import GlassmorphismHero from '@/components/ui/GlassmorphismHero'
import { useEffect, useState, useRef } from 'react'

// Get data from comprehensive show catalog
const featuredShows = getFeaturedShows()

export default function HomePage() {
  const [cardsTransform, setCardsTransform] = useState({ translateY: 0, isFixed: false })
  const glassmorphismRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!glassmorphismRef.current || !cardsRef.current || !containerRef.current) return

      const scrollY = window.scrollY
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top + scrollY
      const containerHeight = containerRef.current.offsetHeight
      const cardsHeight = cardsRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      
      // Calculate the boundaries
      const raycastStart = containerTop
      const raycastEnd = containerTop + viewportHeight // Raycast section is exactly viewport height
      const availableSpace = viewportHeight - cardsHeight - 160 // 80px top + 80px bottom margin
      
      // Calculate the point where cards should stop at bottom of raycast
      const stopScrollPoint = raycastStart + viewportHeight - cardsHeight - 80 // Stop at bottom with 80px margin
      
      let opacity = 0
      let translateY = 0
      
      // Show cards when raycast section is in viewport
      const raycastTopInViewport = containerRect.top
      const raycastBottomInViewport = containerRect.bottom
      
      if (raycastBottomInViewport > 0 && raycastTopInViewport < viewportHeight) {
        opacity = 1
        
        if (scrollY <= raycastStart) {
          // Before raycast starts - cards stay at top position
          translateY = 0
        } else if (scrollY >= stopScrollPoint) {
          // Cards STOP at bottom of raycast with 80px breathing room
          translateY = availableSpace
        } else {
          // Cards move down proportionally between start and stop point
          const scrollProgress = scrollY - raycastStart
          const maxScroll = stopScrollPoint - raycastStart
          translateY = (scrollProgress / maxScroll) * availableSpace
        }
      } else if (raycastTopInViewport >= viewportHeight) {
        // Raycast is below viewport - cards not visible
        opacity = 0
        translateY = 0
      } else if (raycastBottomInViewport <= 0) {
        // Raycast is above viewport - cards stay at bottom and visible
        opacity = 1
        translateY = availableSpace
      }

      // Apply transform directly for better performance
      if (cardsRef.current) {
        cardsRef.current.style.opacity = opacity.toString()
        cardsRef.current.style.transform = `translateY(${translateY}px)`
      }

      setCardsTransform({ translateY, isFixed: false })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Title Section - Radical Face Scaling Approach */}
      <section className="py-8 bg-stone-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Side - KANA with Ge'ez text - Keep original structure */}
            <div className="flex items-baseline space-x-8 kana-title-scale">
              <h1 className="text-9xl md:text-[10rem] lg:text-[16rem] xl:text-[18rem] 2xl:text-[20rem] font-black text-black font-primary leading-none tracking-tight">
                KANA
              </h1>
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-secondary tracking-wide geez-text">
                ዉስጤ ነዉ
              </span>
            </div>

            {/* Right Side - Description and Button - Pushed further right */}
            <div className="text-left max-w-sm ml-auto -mt-8">
              <p className="text-xl font-medium text-black font-secondary tracking-wide mb-6">
                The official home of entertainment for all Ethiopians
              </p>
              <AnimatedButton>
                About us
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphism Hero Section with Smooth Sticky Cards */}
      <div className="relative min-h-[300vh]" ref={containerRef}>
        {/* Sticky raycast background */}
        <div className="sticky top-0 h-screen overflow-hidden" ref={glassmorphismRef}>
          <GlassmorphismHero />
        </div>

        {/* Cards that stay within raycast bounds */}
        <div
          ref={cardsRef}
          className="absolute left-24 z-20"
          style={{
            top: '80px',
          }}
        >
          <div className="space-y-2 max-w-3xl">
            {/* Latest Release */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                x: 32,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="bg-black text-white px-12 py-8 rounded-2xl cursor-pointer group relative overflow-hidden shadow-lg h-32 w-[32rem]"
            >
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-xs font-secondary tracking-widest uppercase text-white/60 italic">Latest Release</span>
              </div>
              <h3 className="text-lg font-bold font-primary text-white">
                Mixtape
              </h3>
              {/* Arrow on hover - Sharp shooting style */}
              <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
              </div>
            </motion.div>

            {/* Latest Blog */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                x: 32,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="bg-black text-white px-12 py-10 rounded-2xl cursor-pointer group relative overflow-hidden shadow-lg h-36 w-[32rem]"
            >
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-xs font-secondary tracking-widest uppercase text-white/60 italic">Latest Blog</span>
              </div>
              <h3 className="text-lg font-bold font-primary text-white leading-tight">
                When the way forwards is backwards
              </h3>
              {/* Arrow on hover - Sharp shooting style */}
              <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
              </div>
            </motion.div>

            {/* Latest Fiction */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                x: 32,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="bg-black text-white px-12 py-8 rounded-2xl cursor-pointer group relative overflow-hidden shadow-lg h-32 w-[32rem]"
            >
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs font-secondary tracking-widest uppercase text-white/60 italic">Latest Fiction</span>
              </div>
              <h3 className="text-lg font-bold font-primary text-white">
                Sisters
              </h3>
              {/* Arrow on hover - Sharp shooting style */}
              <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black font-secondary mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-black/70 font-secondary tracking-wide max-w-2xl mx-auto">
              Discover our most popular shows and latest releases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredShows.slice(0, 3).map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-stone-100 rounded-2xl overflow-hidden hover:bg-stone-200 transition-colors">
                  <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-lg font-bold text-white">K</span>
                        </div>
                        <p className="text-white/80 text-sm font-secondary">Featured Show</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-black text-white text-xs font-secondary tracking-wide uppercase rounded-2xl">
                        {show.type}
                      </span>
                      <span className="text-xs text-black/50 font-secondary">
                        {show.schedule}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-secondary text-black mb-2 group-hover:text-pink-600 transition-colors">
                      {show.title}
                    </h3>
                    <p className="text-sm text-black/70 font-secondary mb-4 line-clamp-2">
                      {show.description}
                    </p>
                    <Link
                      href={`/shows/${show.id}`}
                      className="inline-flex items-center text-black hover:text-pink-600 font-secondary text-sm font-medium transition-colors"
                    >
                      Watch Now
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-secondary mb-4">
              Join the mailing list
            </h2>
            <p className="text-lg text-white/80 font-secondary mb-8">
              &ldquo;I promise not to waste your time. I&apos;m well aware that we all get way too many marketing emails. I&apos;ll only write when I actually have something new to share.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-black placeholder:text-black/50 font-secondary focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-pink-600 text-white font-secondary font-medium hover:bg-pink-700 transition-colors"
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