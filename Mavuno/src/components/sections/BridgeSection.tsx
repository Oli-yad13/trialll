"use client"

import { motion } from "framer-motion"

export default function BridgeSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden flex items-center justify-center">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Main Text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-8"
        >
          From Complex Data
          <br />
          to Simple Advice.
          <br />
          <span className="text-green-600">In Three Steps.</span>
        </motion.h2>

        {/* Remove subtitle since user only wants the main text */}
      </motion.div>
    </section>
  )
}
