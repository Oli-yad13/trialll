"use client"

import { motion } from "framer-motion"

const partners = [
  {
    name: "Farmafrica",
    logo: "/logos/Farmafrica.svg"
  },
  {
    name: "Grofit", 
    logo: "/logos/Grofit.svg"
  },
  {
    name: "Innovit",
    logo: "/logos/Innovit.svg"
  },
  {
    name: "JDC",
    logo: "/logos/JDC.svg"
  },
  {
    name: "Yieldsapp",
    logo: "/logos/Yieldsapp.svg"
  }
]

export default function PartnersSection() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="text-sm text-gray-600 mb-6 font-medium"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
Trusted by Operators
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight max-w-6xl mx-auto">
            Trusted by leading operators<br />
            looking for real innovation
          </h2>
        </motion.div>

        {/* Partners Grid - Terminal Studios Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full relative"
        >
          {/* Partners Grid Container */}
          <div className="relative">
            {/* Top horizontal line */}
            <div className="absolute w-full h-px bg-gray-300 max-w-6xl mx-auto left-1/2 transform -translate-x-1/2" style={{top: '0'}}></div>
            
            {/* Bottom horizontal line */}
            <div className="absolute w-full h-px bg-gray-300 max-w-6xl mx-auto left-1/2 transform -translate-x-1/2" style={{bottom: '0'}}></div>
            
            <div className="grid grid-cols-5 max-w-6xl mx-auto relative">
              
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Vertical separator lines between logos */}
                  {index < partners.length - 1 && (
                    <div className="absolute pointer-events-none z-10" style={{right: '0', top: '0', bottom: '0'}}>
                      {/* Vertical line extending up and down from the separator */}
                      <div className="absolute w-px bg-gradient-to-t from-gray-300 to-transparent" style={{left: '0', bottom: '100%', height: '100px'}}></div>
                      <div className="absolute w-px bg-gray-300" style={{left: '0', top: '0', bottom: '0'}}></div>
                      <div className="absolute w-px bg-gradient-to-b from-gray-300 to-transparent" style={{left: '0', top: '100%', height: '100px'}}></div>
                    </div>
                  )}
                  {/* Individual Cell */}
                  <div 
                    className="flex items-center justify-center h-60 bg-white hover:bg-gray-50 transition-all duration-300 relative overflow-hidden"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                    }}
                    style={{
                      background: 'radial-gradient(circle 150px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 197, 94, 0.1) 0%, transparent 50%)'
                    }}
                  >
                    {/* Logo */}
                    <div className="text-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className={`w-auto mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${
                          partner.name === "Grofit" || partner.name === "Innovit" || partner.name === "Farmafrica" 
                            ? "h-12" 
                            : "h-20"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
