"use client"

import { motion } from "framer-motion"

interface AnimatedGridProps {
  variant?: 'dark' | 'light'
}

export default function AnimatedGrid({ variant = 'dark' }: AnimatedGridProps) {
  const isLight = variant === 'light'
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Lines that approach but don't reach intersection dots */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.25)'} 1px, transparent 1px, transparent 12px, ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.25)'} 12px, ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.25)'} 68px, transparent 68px, transparent 80px),
            linear-gradient(90deg, ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.25)'} 1px, transparent 1px, transparent 12px, ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.25)'} 12px, ${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.25)'} 68px, transparent 68px, transparent 80px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0px 0px',
          clipPath: 'polygon(0 0, 0 0, 10% 0, 15% 20px, 85% 20px, 90% 0, 100% 0, 100% 100%, 0 100%)'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
          opacity: isLight ? [0.1, 0.2, 0.1] : [0.6, 1, 0.6]
        }}
        transition={{
          backgroundPosition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          },
          opacity: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      
      {/* Intersection Dots - At Line Crossings */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.6)'} 1.5px, transparent 1.5px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0px 0px',
          clipPath: 'polygon(0 0, 0 0, 10% 0, 15% 20px, 85% 20px, 90% 0, 100% 0, 100% 100%, 0 100%)'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
          opacity: isLight ? [0.05, 0.1, 0.05] : [0.4, 0.8, 0.4]
        }}
        transition={{
          backgroundPosition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          },
          opacity: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }
        }}
      />
      
    </div>
  )
}