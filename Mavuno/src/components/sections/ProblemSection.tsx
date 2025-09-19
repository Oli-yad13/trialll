"use client"

import { motion } from "framer-motion"
import { Cloud, Droplets, Link } from "lucide-react"

export default function ProblemSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/cracked-field.mp4" type="video/mp4" />
          <source src="/videos/cracked-field.webm" type="video/webm" />
          {/* Fallback background */}
        </video>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-12 leading-tight"
        >
          Agriculture is Operating in an{" "}
          <span className="text-red-500">Information Vacuum.</span>
        </motion.h2>

        {/* Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            Africa&apos;s 300 million smallholder farmers are the backbone of the continent&apos;s food security. 
            Yet, they are forced to make critical, high-stakes decisions based on guesswork, relying on 
            generational knowledge that is being rendered obsolete by an unpredictable climate. This isn&apos;t 
            just a risk to individual livelihoods; it&apos;s a systemic threat to the entire agrifood value chain.
          </p>
        </motion.div>

        {/* Three Column Problems */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Climate Uncertainty */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <Cloud className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">Climate Uncertainty</h3>
            <p className="text-gray-300 leading-relaxed">
              Erratic rainfall, prolonged droughts, and unpredictable temperature shifts have broken 
              traditional farming cycles. A single unexpected dry spell or pest outbreak can wipe out 
              an entire season&apos;s profit, creating a cycle of debt and food insecurity.
            </p>
          </motion.div>

          {/* Resource Inefficiency */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center relative">
                <Droplets className="w-8 h-8 text-white" />
                <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">×</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Resource Inefficiency</h3>
            <p className="text-gray-300 leading-relaxed">
              Without precise data, critical resources like water and fertilizer are wasted. Over-irrigation 
              depletes scarce water sources, while under-application stunts growth. This operational guesswork 
              leads to higher costs, lower yields, and unnecessary environmental strain.
            </p>
          </motion.div>

          {/* Market Disconnection */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <Link className="w-8 h-8 text-white transform rotate-45" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Market Disconnection</h3>
            <p className="text-gray-300 leading-relaxed">
              Farmers lack access to real-time market data, forcing them to sell to intermediaries at 
              suboptimal prices. They operate blind, unable to align their planting and harvesting with 
              market demand, leaving significant value on the table.
            </p>
          </motion.div>
        </div>

        {/* Concluding Transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-3xl md:text-4xl font-bold text-green-400 font-poppins">
            To build a resilient future, farming must move from guesswork to intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}