"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Cloud, Droplets, Link, TrendingDown } from "lucide-react"
import Image from "next/image"

const problemSections = [
  {
    id: "01",
    title: "African Agriculture is Operating in an Information Vacuum",
    subtitle: "The Foundation of Food Security Under Threat",
    description: "Africa's 300 million smallholder farmers are the backbone of the continent's food security. Yet, they are forced to make critical, high-stakes decisions based on guesswork, relying on generational knowledge that is being rendered obsolete by an unpredictable climate. This isn't just a risk to individual livelihoods; it's a systemic threat to the entire agrifood value chain.",
    image: "/placeholder-01.jpg",
    bgColor: "from-red-900/20 to-orange-900/20"
  },
  {
    id: "02", 
    title: "Climate Uncertainty",
    subtitle: "When Traditional Wisdom Fails",
    description: "Erratic rainfall, prolonged droughts, and unpredictable temperature shifts have broken traditional farming cycles. A single unexpected dry spell or pest outbreak can wipe out an entire season's profit, creating a cycle of debt and food insecurity.",
    icon: Cloud,
    image: "/placeholder-02.jpg",
    bgColor: "from-blue-900/20 to-slate-900/20"
  },
  {
    id: "03",
    title: "Resource Inefficiency", 
    subtitle: "Wasted Resources, Diminished Returns",
    description: "Without precise data, critical resources like water and fertilizer are wasted. Over-irrigation depletes scarce water sources, while under-application stunts growth. This operational guesswork leads to higher costs, lower yields, and unnecessary environmental strain.",
    icon: Droplets,
    image: "/placeholder-03.jpg",
    bgColor: "from-green-900/20 to-teal-900/20"
  },
  {
    id: "04",
    title: "Market Disconnection",
    subtitle: "Operating Blind in a Connected World",
    description: "Farmers lack access to real-time market data, forcing them to sell to intermediaries at suboptimal prices. They operate blind, unable to align their planting and harvesting with market demand, leaving significant value on the table.",
    icon: Link,
    image: "/placeholder-04.jpg",
    bgColor: "from-purple-900/20 to-indigo-900/20"
  }
]

export default function CinematicProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Calculate which section should be active based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Use the full scroll progress for more even distribution
      const sectionIndex = Math.floor(progress * problemSections.length)
      const clampedIndex = Math.min(Math.max(sectionIndex, 0), problemSections.length - 1)
      setActiveSection(clampedIndex)
    })
    
    return unsubscribe
  }, [scrollYProgress])

  return (
    <section 
      id="how-it-works"
      ref={containerRef}
      className="min-h-[400vh] bg-white text-black relative"
    >
      {/* Sticky Video Container - Right Side */}
      <div className="sticky top-0 float-right w-1/2 h-screen flex items-center justify-center z-10">
        <div className="relative w-4/5 h-4/5">
          {/* Rectangular Video Frame with Left Curved Notch */}
          <div 
            className="w-full h-full relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
            style={{
              clipPath: 'polygon(40px 0, 100% 0, 100% 100%, 40px 100%, 40px 90%, 20px 85%, 20px 15%, 40px 10%)'
            }}
          >
            {/* Image Content */}
            {problemSections.map((section, index) => (
              <motion.div
                key={section.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeSection === index ? 1 : 0,
                  scale: activeSection === index ? 1 : 0.95
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src={section.image}
                  alt={`Problem Section ${section.id}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                
                {/* Image Overlay with Section Theme */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.bgColor}`} />
              </motion.div>
            ))}
            
            {/* Frame Border Effect */}
            <div 
              className="absolute inset-0 border-4 border-black/30"
              style={{
                clipPath: 'polygon(40px 0, 100% 0, 100% 100%, 40px 100%, 40px 90%, 20px 85%, 20px 15%, 40px 10%)'
              }}
            />
          </div>
          
        </div>
      </div>

      {/* Scrolling Text Content - Left Side */}
      <div className="w-1/2 relative z-20">
        {problemSections.map((section, index) => (
          <div 
            key={section.id}
            className="min-h-screen flex items-center justify-center px-12 py-24"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-2xl"
            >
              {/* Section Number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center mb-6"
              >
                <div className="text-8xl font-black text-black/20 mr-4">
                  {section.id}
                </div>
                {section.icon && (
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-black" />
                  </div>
                )}
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
              >
                {section.title}
              </motion.h2>

              {/* Subtitle */}
              {section.subtitle && (
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-xl text-gray-600 font-medium mb-8"
                >
                  {section.subtitle}
                </motion.h3>
              )}

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-xl leading-relaxed text-gray-700"
              >
                {section.description}
              </motion.p>

              {/* Progress Indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="h-1 bg-gradient-to-r from-green-500 to-blue-500 mt-8 rounded-full"
              />
            </motion.div>
          </div>
        ))}
      </div>

    </section>

  )
}