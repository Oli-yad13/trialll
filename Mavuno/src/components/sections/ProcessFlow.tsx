"use client"

import { motion } from "framer-motion"
import { Smartphone, Satellite, CircuitBoard } from "lucide-react"
import { useEffect, useState } from "react"

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Hyperlocal field intelligence",
      subtitle: "starting at the ground",
      description: "Our solar-powered IRIF Capsule sits directly in your field, continuously monitoring critical variables. This provides the 'ground-truth' data that generic weather apps miss.",
      media: "/api/placeholder/600/400",
      type: "image"
    },
    {
      title: "Satellite-powered prediction",
      subtitle: "integrated with AI analysis", 
      description: "We fuse real-time sensor data with satellite imagery and weather forecasts. Our AI predicts future conditions with remarkable accuracy.",
      media: "/api/placeholder/600/400",
      type: "video"
    },
    {
      title: "Simple actionable guidance",
      subtitle: "delivered everywhere",
      description: "Complex analysis becomes clear advice delivered directly to any mobile phone. No apps, no internet, no confusion.",
      media: "/api/placeholder/600/400", 
      type: "image"
    }
  ]

  // Auto-advance steps for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="process-flow-section min-h-screen bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Layout - Terminal Industries Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start min-h-screen">
          
          {/* Left Content - Text Only */}
          <div className="space-y-12 pt-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="space-y-6"
                initial={{ opacity: 0.3, x: -50 }}
                animate={{ 
                  opacity: activeStep === index ? 1 : 0.3,
                  x: activeStep === index ? 0 : -20
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-2">
                  <h2 className="font-poppins text-4xl lg:text-5xl font-black text-black leading-tight">
                    {step.title}
                  </h2>
                  <h3 className="font-poppins text-2xl lg:text-3xl text-green-600 font-bold">
                    {step.subtitle}
                  </h3>
                </div>
                
                <p className="font-poppins text-xl text-gray-600 leading-relaxed max-w-lg">
                  {step.description}
                </p>
                
                {/* Step Indicator */}
                <div className="flex items-center space-x-3 pt-4">
                  {steps.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === activeStep ? 'w-8 bg-green-500' : 'w-4 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Visual - Custom Terminal Frame */}
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative w-full max-w-lg">
              {/* Custom Terminal-Style Frame */}
              <div className="relative">
                {/* Main Frame with Notched Shape */}
                <div className="relative bg-black rounded-lg overflow-hidden" style={{ height: '600px' }}>
                  {/* Custom Notched Clip Path */}
                  <div 
                    className="absolute inset-0 bg-black"
                    style={{
                      clipPath: `polygon(
                        0% 0%, 
                        100% 0%, 
                        100% 30%, 
                        90% 30%, 
                        90% 40%, 
                        80% 50%, 
                        90% 60%, 
                        90% 70%, 
                        100% 70%, 
                        100% 100%, 
                        0% 100%, 
                        0% 70%,
                        10% 70%,
                        10% 60%,
                        20% 50%,
                        10% 40%,
                        10% 30%,
                        0% 30%
                      )`
                    }}
                  />

                  {/* Content Container */}
                  <div className="absolute inset-4 rounded-lg overflow-hidden">
                    <motion.div
                      className="w-full h-full relative"
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Placeholder Content - Replace with actual images/videos */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center rounded-lg">
                        <div className="text-center space-y-4">
                          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                            <div className="text-green-400 text-3xl font-mono">
                              {activeStep + 1}
                            </div>
                          </div>
                          <div className="text-green-400 font-mono text-sm">
                            {steps[activeStep].type.toUpperCase()}_CONTENT
                          </div>
                        </div>
                      </div>

                      {/* Technical Overlay Elements */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Grid Overlay */}
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `
                              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: '30px 30px',
                            backgroundPosition: '0 0'
                          }}
                        />

                        {/* Corner Indicators */}
                        <div className="absolute top-4 left-4">
                          <div className="w-4 h-4 border-l-2 border-t-2 border-green-400"></div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="w-4 h-4 border-r-2 border-t-2 border-green-400"></div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="w-4 h-4 border-l-2 border-b-2 border-green-400"></div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <div className="w-4 h-4 border-r-2 border-b-2 border-green-400"></div>
                        </div>

                        {/* Status Indicator */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                          <motion.div 
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Frame Border Highlight */}
                  <div className="absolute inset-0 border-2 border-green-500/30 rounded-lg pointer-events-none"></div>
                </div>

                {/* Technical Labels */}
                <div className="absolute -top-8 left-0 text-green-600 font-mono text-sm">
                  MAVUNO_VISUAL_SYSTEM
                </div>
                <div className="absolute -bottom-8 right-0 text-gray-400 font-mono text-xs">
                  FRAME_{(activeStep + 1).toString().padStart(2, '0')}_ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}