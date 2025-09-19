'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAVIGATION_ITEMS } from '@/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at top - show navbar
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky top-0 z-50 w-full bg-stone-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center relative">
          {/* Dotted line at bottom of navbar - full screen width */}
          <div className="absolute -bottom-2 -left-4 -right-4 sm:-left-6 sm:-right-6 lg:-left-8 lg:-right-8 h-px">
            <div className="w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 14px)',
              backgroundSize: '14px 1px'
            }}></div>
          </div>
          {/* Logo - Left aligned */}
          <Link href="/" className="absolute left-0 flex items-center">
            <div className="relative h-16 w-20">
              <Image
                src="/Kana_TV.png"
                alt="Kana TV Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-16">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group text-sm md:text-base lg:text-lg font-bold text-black font-primary tracking-wide uppercase"
              >
                {item.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:right-auto group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* Right side - YouTube */}
          <div className="absolute right-0">
            <a
              href="https://youtube.com/@KanaTelevision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black/70 hover:text-black transition-colors font-secondary tracking-wide uppercase"
            >
              YouTube
            </a>
          </div>

          {/* Dotted line from logo to YouTube - full screen width */}
          <div className="absolute -top-2 -left-4 -right-4 sm:-left-6 sm:-right-6 lg:-left-8 lg:-right-8 h-px">
            <div className="w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 14px)',
              backgroundSize: '14px 1px'
            }}></div>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-0 p-1 touch-target"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-black/10 pt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group text-lg font-bold text-black font-primary tracking-wide uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:right-auto group-hover:left-0"></span>
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
