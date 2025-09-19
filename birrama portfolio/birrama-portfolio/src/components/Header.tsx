'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [currentWord, setCurrentWord] = useState('healthcare communication');

  useEffect(() => {
    const words = ['healthcare communication', 'healthcare financing', 'healthcare optimization'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[currentIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        maskImage: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)'
      }}
    >
      <div className="w-full flex items-center justify-between py-6 px-8 lg:px-16">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <Image
                src="/Birrama logo.png"
                alt="Birrama Logo"
                width={200}
                height={60}
                className="h-12 lg:h-16 w-auto"
                priority
              />
            </Link>
          </motion.div>

          <div className="flex items-center ml-4">
            <span className="text-white/60 text-2xl lg:text-3xl font-light">{'{'}</span>
            <div className="min-w-[200px] lg:min-w-[250px] text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  className="gradient-text text-2xl lg:text-3xl font-semibold"
                  initial={{ opacity: 0, y: 10, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -10, rotateX: 90 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-white/60 text-2xl lg:text-3xl font-light">{'}'}</span>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/contact"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors backdrop-blur-sm border border-white/20"
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}