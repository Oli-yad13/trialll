"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Minimum loading time of 2.5 seconds for the animation
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Wait for fade out animation before calling onComplete
      setTimeout(onComplete, 800)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Top Shutter */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 h-1/2 z-50 bg-white flex items-end justify-center"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            {/* Top half of logo */}
            <div className="relative z-10 pb-0 overflow-hidden h-48">
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.2 
                }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-96 h-96 mx-auto"
                  style={{ 
                    clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
                  }}
                >
                  <Image
                    src="/Group 125.png"
                    alt="Mavuno AI Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Shutter */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 right-0 h-1/2 z-50 bg-white flex items-start justify-center"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            {/* Bottom half of logo */}
            <div className="relative z-10 pt-0 overflow-hidden h-48">
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.2 
                }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-96 h-96 mx-auto -mt-48"
                  style={{ 
                    clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'
                  }}
                >
                  <Image
                    src="/Group 125.png"
                    alt="Mavuno AI Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}