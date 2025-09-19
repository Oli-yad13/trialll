"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Droplets, Microscope, Satellite, TrendingUp, Play } from "lucide-react"
import Image from "next/image"
import Header from "@/components/layout/Header"

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Agricultural fields aerial view"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <h1 className="font-poppins text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
                The Intelligence Behind the Harvest
              </h1>
            </motion.div>
            
            {/* Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12"
            >
              <p className="font-poppins text-xl text-white leading-relaxed max-w-3xl">
                Mavuno combines hyperlocal field sensors, satellite data, and predictive AI to deliver farm-specific intelligence. We translate complex data into simple, actionable advice for farmers.
              </p>
            </motion.div>
            
          </div>
        </div>
      </div>

      {/* Irregular Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div 
          className="w-full h-20 bg-white"
          style={{
            clipPath: 'polygon(0 100%, 0 0, 10% 0, 15% 20px, 85% 20px, 90% 0, 100% 0, 100% 100%)'
          }}
        />
      </div>
    </section>
  )
}