"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import WebGLGrid from "@/components/canvas/WebGLGrid"

export default function MavunoTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Scroll-based progress system
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"]
  })

  // Transform scroll progress to different states - faster transitions
  const sentenceOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0])
  const mavunoOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 1], [0, 1, 1, 1])
  const backgroundProgress = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const gridOpacity = useTransform(scrollYProgress, [0.5, 0.65], [1, 0]) // Shorter, smoother transition
  const mavunoScale = useTransform(scrollYProgress, [0.5, 0.7], [1, 1.3])
  
  const [backgroundColor, setBackgroundColor] = useState("#0a2d2d")
  const [textColor, setTextColor] = useState("#ffffff")
  const [gridIntensity, setGridIntensity] = useState(0)
  const [showGrid, setShowGrid] = useState(true)

  // Update background and text colors based on scroll progress
  useEffect(() => {
    const unsubscribe = backgroundProgress.on("change", (latest) => {
      if (latest > 0.1) {
        setBackgroundColor("#ffffff")
        setTextColor("#000000")
        setGridIntensity(0) // Keep grid intensity at 0 for white background
        setShowGrid(false) // Completely hide grid on white background
      } else {
        setBackgroundColor("#0a2d2d")
        setTextColor("#ffffff")
        setGridIntensity(0)
        setShowGrid(true) // Show grid on dark background
      }
    })

    return unsubscribe
  }, [backgroundProgress])

  // Sentence that spells MAVUNO with first letters
  const fullSentence = [
    "Mobilizing", "Africa's", "Vast", "Untapped", "Natural", "Output"
  ]

  return (
    <motion.section 
      ref={containerRef}
      className="h-[300vh] relative" // Reduced scroll distance for faster transitions
      style={{ 
        backgroundColor: backgroundColor,
        transition: "background-color 0.8s ease-in-out"
      }}
    >
      
      {/* Sticky content container */}
      <div className="sticky top-0 h-screen overflow-hidden">
      
      {/* Content Container - No scrolling, just centered */}
      <div className="absolute inset-0 flex items-center justify-center z-20">

      {/* WebGL Grid Background - controlled by scroll */}
      {showGrid && (
        <motion.div
          className="absolute inset-0"
          style={{ 
            zIndex: 10,
            opacity: gridOpacity
          }}
        >
          <WebGLGrid backgroundIntensity={gridIntensity} />
        </motion.div>
      )}
      
        
        
        {/* Subtle radial gradient overlay for depth */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.1) 100%)'
          }}
          animate={{
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main Content - Either Sentence OR MAVUNO */}
        <motion.div
          className="relative w-full max-w-6xl mx-auto text-center"
          style={{ minHeight: '200px' }}
        >
          {/* "That's the" text */}
          <motion.p
            style={{ color: textColor }}
            className="text-lg mb-8 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8 }}
          >
            That&apos;s the
          </motion.p>
          {/* Sentence Display - controlled by scroll */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              opacity: sentenceOpacity,
              scale: useTransform(sentenceOpacity, [0, 1], [0.8, 1])
            }}
          >
            <div className="flex justify-center items-center gap-6 md:gap-8 lg:gap-10 whitespace-nowrap">
              {fullSentence.map((word, wordIndex) => (
                <motion.div
                  key={`word-${wordIndex}`}
                  className="text-4xl md:text-6xl lg:text-7xl font-normal inline-block"
                  style={{ color: textColor }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MAVUNO Word Display - controlled by scroll */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              opacity: mavunoOpacity,
              scale: useTransform(mavunoOpacity, [0, 1], [0.8, 1])
            }}
          >
            <div className="text-center">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider"
                style={{ 
                  color: textColor,
                  scale: mavunoScale
                }}
              >
                MAVUNO
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </motion.section>
  )
}