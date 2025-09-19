"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Menu, X, Brain } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Main Navbar */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full z-50 pt-6"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center cursor-pointer"
              >
                <div className="relative w-48 h-48">
                  <Image
                    src="/Group 125.png"
                    alt="Mavuno AI Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {[
                { name: "HOW IT WORKS", href: "#how-it-works" },
                { name: "BENEFITS", href: "#benefits" },
                { name: "ABOUT", href: "/about" },
                { name: "CONTACT", href: "/contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <Link 
                    href={item.href}
                    className="font-poppins text-white font-bold text-sm border-2 border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-full text-white hover:bg-white/20 transition-colors border-2 border-white/30"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          scale: isMenuOpen ? 1 : 0.95,
          pointerEvents: isMenuOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 lg:hidden"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: isMenuOpen ? 0 : -100 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="relative top-20 mx-4 p-8 rounded-3xl shadow-2xl border border-white/20"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          {/* Navigation Items - Fixed positioning to prevent logo bleeding */}
          <nav className="flex flex-col items-start space-y-6 mt-20 ml-4">
            {[
              { name: "HOW IT WORKS", href: "#how-it-works" },
              { name: "BENEFITS", href: "#benefits" },
              { name: "ABOUT", href: "/about" },
              { name: "CONTACT", href: "/contact" }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="w-full"
              >
                <Link 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-poppins text-white font-black text-2xl border-2 border-white px-8 py-4 rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-left"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </motion.div>
    </>
  )
}