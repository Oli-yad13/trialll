"use client"

import { motion } from "framer-motion"
import { Database, Brain, MessageSquare } from "lucide-react"

export default function DataFlow() {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Organic Top Edge */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div 
          className="w-full h-20 bg-white"
          style={{
            clipPath: 'polygon(0 0, 0 100%, 10% 100%, 15% 80px, 85% 80px, 90% 100%, 100% 100%, 100% 0)'
          }}
        />
      </div>

      {/* Split Layout Container */}
      <div className="flex flex-col lg:flex-row h-screen pt-20">
        
        {/* Left Section - White Background with Text Content */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            {/* Main Heading */}
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              From Complex Data
              <br />
              to Simple Advice.
              <br />
              <span className="text-green-600">In Three Steps.</span>
            </h2>
          </motion.div>
        </div>

        {/* Right Section - Image Frame */}
        <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 relative flex items-center justify-center p-8">
          {/* Image Frame Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative w-full max-w-lg h-96 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden"
          >
            {/* Frame Border with Subtle Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
            
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-green-500 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-green-500 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-green-500 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-green-500 rounded-br-lg"></div>
            
            {/* Image Placeholder */}
            <div className="absolute inset-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">Your Image Here</p>
                <p className="text-sm text-gray-400 mt-1">Place your image in this frame</p>
              </div>
            </div>
            
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0'
              }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
