'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Ticket, ArrowRight } from 'lucide-react'
import { formatDate, formatTime } from '@/lib/utils'
import { ANIMATION_VARIANTS } from '@/constants'
import { kanaTvEvents, getEventsByType, getKanaWarehouseEvents, getUpcomingEvents } from '@/data/events'

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents()
  const warehouseEvents = getKanaWarehouseEvents()
  const concerts = getEventsByType('concert')
  const festivals = getEventsByType('festival')
  const specialEvents = getEventsByType('special')

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
              <span className="gradient-text">Events</span>
              <br />
              <span className="text-foreground">&</span>
              <br />
              <span className="gradient-text">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Join us for unforgettable concerts, festivals, and special events at Kana Warehouse 
              and beyond. Experience the best of Ethiopian entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                View Upcoming Events
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Kana Warehouse
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kana Warehouse Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kana Warehouse</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our iconic 13m-high column-free hall with 2000-capacity, hosting major concerts and festivals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {warehouseEvents.map((event, index) => (
              <motion.article
                key={event.id}
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
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <span className="text-2xl font-bold gradient-text">K</span>
                        </div>
                        <p className="text-white/80 font-medium">Kana Warehouse</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {event.type}
                      </span>
                      {event.featured && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {event.location}
                      </div>
                      {event.capacity && (
                        <div className="flex items-center">
                          <Users size={16} className="mr-2" />
                          {event.capacity} capacity
                        </div>
                      )}
                      {event.price && (
                        <div className="flex items-center">
                          <Ticket size={16} className="mr-2" />
                          {event.price}
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover different types of events and experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concerts */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.scaleIn}
              className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Concerts</h3>
              <p className="text-muted-foreground mb-4">
                Live music performances featuring top Ethiopian and international artists
              </p>
              <div className="text-2xl font-bold text-primary">{concerts.length}</div>
              <div className="text-sm text-muted-foreground">Upcoming Concerts</div>
            </motion.div>

            {/* Festivals */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.scaleIn}
              className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎪</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Festivals</h3>
              <p className="text-muted-foreground mb-4">
                Multi-day cultural festivals celebrating Ethiopian music and arts
              </p>
              <div className="text-2xl font-bold text-primary">{festivals.length}</div>
              <div className="text-sm text-muted-foreground">Upcoming Festivals</div>
            </motion.div>

            {/* Special Events */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.scaleIn}
              className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Events</h3>
              <p className="text-muted-foreground mb-4">
                Exclusive broadcasts, premieres, and special programming events
              </p>
              <div className="text-2xl font-bold text-primary">{specialEvents.length}</div>
              <div className="text-sm text-muted-foreground">Special Events</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Events List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete list of upcoming and past events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.article
                key={event.id}
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
                        <p className="text-white/80 text-sm">Event</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                        {event.type}
                      </span>
                      {event.featured && (
                        <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        {event.location}
                      </div>
                    </div>
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                    >
                      Learn More
                      <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
