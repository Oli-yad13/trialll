"use client"

import { motion } from "framer-motion"

export default function TypographyBridge() {
  return (
    <section className="bg-white flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Main Typography */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-6xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-gray-900 leading-tight tracking-normal">
          From Complex Data
          <br />
          to Simple Advice.
        </h2>
      </motion.div>

      {/* Subtle background elements for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}