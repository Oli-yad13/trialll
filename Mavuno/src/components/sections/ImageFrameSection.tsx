"use client"

import { motion } from "framer-motion"

export default function ImageFrameSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 l 0 -60 l 60 0 z m -1 1 l -58 0 l 0 58 l 58 0 l 0 -58 z' fill='%23f1f5f9' fill-opacity='0.3'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Problem Revealed
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            An Unpredictable
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Sky</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-b from-sky-300 via-sky-400 to-gray-600 relative">
                
                {/* Sky Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-400 to-slate-700" />
                
                {/* Clouds Animation */}
                <motion.div 
                  className="absolute top-8 left-8 w-16 h-8 bg-white rounded-full opacity-80"
                  animate={{ x: [0, 20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute top-16 right-12 w-20 h-10 bg-gray-200 rounded-full opacity-70"
                  animate={{ x: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                
                {/* Farmer Silhouette */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-20 bg-black opacity-60 rounded-t-full relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black opacity-60 rounded-full" />
                    <div className="absolute top-8 -left-4 w-8 h-2 bg-black opacity-60 rounded" />
                    <div className="absolute top-8 -right-4 w-8 h-2 bg-black opacity-60 rounded" />
                  </div>
                </div>
                
                {/* Ground/Soil */}
                <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-r from-amber-800 to-yellow-800" />
                
                {/* Cracked Soil Pattern */}
                <div className="absolute bottom-0 inset-x-0 h-8 opacity-40">
                  <svg className="w-full h-full" viewBox="0 0 200 20">
                    <path d="M0 10 L20 15 L40 8 L60 12 L80 6 L100 14 L120 9 L140 13 L160 7 L180 11 L200 10" 
                          stroke="#8B4513" strokeWidth="1" fill="none" />
                    <path d="M10 5 L30 18 M50 3 L70 16 M90 4 L110 17 M130 2 L150 15" 
                          stroke="#8B4513" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl border-4 border-white/20" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-6 h-6 bg-red-500 rounded-full"
              animate={{ scale: [1, 0.8, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Key Messages */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">For millions of farmers</strong>, the sky is a gamble.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Erratic rainfall</strong> and prolonged droughts make traditional wisdom an unreliable guide.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Yields are lost.</strong> Livelihoods are at risk.
                </p>
              </motion.div>
            </div>

            {/* Statistics or Impact Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Crop Loss from Weather</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-1">2B+</div>
                  <div className="text-sm text-gray-600">Affected Farmers</div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
        
        {/* Transition Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent"
          />
        </motion.div>
        
      </div>
    </section>
  )
}
