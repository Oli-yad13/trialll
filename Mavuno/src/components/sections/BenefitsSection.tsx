"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface Benefit {
  id: string
  title: string
  titleHighlight: string
  description: string
  image: string // Can be image or video path
}

const benefits: Benefit[] = [
  {
    id: "01",
    title: "A unified platform for total, data-driven",
    titleHighlight: "farm intelligence",
    description: "Deep integration of real-time sensor data, satellite imagery, and predictive weather models enables our AI to automate farm-specific analysis. It anticipates climate risks, optimizes resource allocation, and delivers actionable recommendations for irrigation, pest control, and yield enhancement. The system closes the loop by correlating this advice with observed outcomes, providing comprehensive performance insights for every hectare.",
    image: "/vid 1.mp4"
  },
  {
    id: "02", 
    title: "Radical accessibility for universal, inclusive",
    titleHighlight: "impact",
    description: "Our platform is engineered to deliver sophisticated AI insights through the most fundamental and reliable channels: SMS and USSD. This bypasses the need for smartphones or internet connectivity, ensuring every smallholder farmer can access critical, real-time intelligence. By communicating in local languages and using a simple, intuitive interface, we eliminate technology barriers and empower the most remote and resource-constrained users to make data-driven decisions with confidence.",
    image: "/vid 2.mp4"
  },
  {
    id: "03",
    title: "An integrated ecosystem for climate and financial",
    titleHighlight: "resilience", 
    description: "Mavuno moves beyond simple agronomic advice by connecting farm performance to economic outcomes. The platform facilitates direct market access, ensuring farmers receive fair prices for their produce. Furthermore, it serves as a gateway to essential financial services, integrating with MFI partners to offer tailored farm loans and with insurers to provide accessible crop insurance. This creates a holistic ecosystem that builds both climate resilience in the field and financial resilience for the farmer.",
    image: "/vid 3.mp4"
  }
]

export default function BenefitsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeBenefit, setActiveBenefit] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Calculate which benefit should be active based on scroll progress
  // Faster transition to third benefit - reduced scroll duration
  const benefitProgress = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 2, 2])
  
  // Debounced function to update active benefit
  const updateActiveBenefit = useCallback((newActive: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      if (newActive >= 0 && newActive < benefits.length && newActive !== activeBenefit) {
        setActiveBenefit(newActive)
      }
    }, 150) // 150ms delay to prevent rapid switching
  }, [activeBenefit])
  
  useEffect(() => {
    const unsubscribe = benefitProgress.onChange((value) => {
      const newActive = Math.floor(value)
      updateActiveBenefit(newActive)
    })
    return unsubscribe
  }, [benefitProgress, updateActiveBenefit])

  // Fallback: ensure at least the first benefit is visible
  useEffect(() => {
    setActiveBenefit(0)
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <section 
      id="benefits"
      ref={containerRef}
      className="relative h-[400vh]"
    >
      {/* Sticky container - fullscreen layout */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Progress Indicators - Terminal style */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50">
          <div className="flex flex-col space-y-1 sm:space-y-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={`progress-${benefit.id}`}
                className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 flex items-center justify-center text-white font-mono text-xs sm:text-sm transition-all duration-300 ${
                  activeBenefit === index 
                    ? 'bg-white/20 border-white/80' 
                    : 'bg-transparent border-white/30'
                }`}
              >
                {benefit.id}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Top 75% - Image/Video Area */}
        <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] overflow-hidden bg-black">
          {benefits.map((benefit, index) => (
            <motion.div
              key={`media-${benefit.id}`}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1, y: 50 }}
              animate={{ 
                opacity: activeBenefit === index ? 1 : 0,
                scale: activeBenefit === index ? 1 : 0.9,
                y: activeBenefit === index ? 0 : -50
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ zIndex: benefits.length - index }}
            >
              {benefit.image.endsWith('.mp4') ? (
                <video
                  src={benefit.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={benefit.image}
                  alt={`Benefit ${benefit.id} illustration`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}
              
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Bottom 25% - White Text Area */}
        <div className="h-[50vh] sm:h-[45vh] md:h-[40vh] lg:h-[35vh] bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 flex items-start justify-center pt-12 sm:pt-16 md:pt-20 min-h-[350px]">
          <div className="max-w-6xl mx-auto w-full relative">
            {/* Show the active benefit */}
            <motion.div
              key={`text-${benefits[activeBenefit]?.id}`}
              className="w-full flex flex-col lg:flex-row items-start gap-4 sm:gap-8 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Left Side - Benefit Number and Title */}
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <div className="mb-2 sm:mb-4">
                  <span className="text-sm sm:text-lg font-light text-gray-500 uppercase tracking-wide">
                    Benefit {benefits[activeBenefit]?.id}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
                  {benefits[activeBenefit]?.title}{" "}
                  <span className="text-green-600 underline decoration-green-600 decoration-2 underline-offset-4">
                    {benefits[activeBenefit]?.titleHighlight}
                  </span>
                </h3>
              </div>
              
              {/* Right Side - Description */}
              <div className="flex-1 w-full lg:w-1/2">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                  {benefits[activeBenefit]?.description}
                </p>
              </div>
            </motion.div>
            
            {/* Debug: Show current active benefit */}
            <div className="absolute top-4 right-4 text-xs text-gray-400">
              Active: {activeBenefit}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}