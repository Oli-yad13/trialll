'use client';

import { motion } from 'framer-motion';
import { memo, useEffect } from 'react';
import Link from 'next/link';
import TickerScroll from './TickerScroll';
import LogoCarousel from './LogoCarousel';

// Different content for each column - 5 boxes each (15 total)
const leftColumnItems = [
  {
    id: '1',
    title: 'Legehar General Hospital',
    logo: '',
    image: '/placeholder-01.png',
    height: 'large' as const,
  },
  {
    id: '2',
    title: 'Legehar General Hospital',
    logo: '',
    image: '/placeholder-02.png',
    height: 'medium' as const,
  },
  {
    id: '3',
    title: 'Legehar General Hospital',
    logo: '',
    image: '/placeholder-03.png',
    height: 'small' as const,
  },
  {
    id: '4',
    title: 'CSRC',
    logo: '',
    image: '/placeholder-04.png',
    height: 'large' as const,
  },
  {
    id: '5',
    title: 'SAS Pharmacies',
    logo: '',
    image: '/placeholder-05.png',
    height: 'medium' as const,
  },
];

const middleColumnItems = [
  {
    id: '6',
    title: 'SAS Pharmacies',
    logo: '',
    image: '/placeholder-06.png',
    height: 'medium' as const,
  },
  {
    id: '7',
    title: 'SAS Pharmacies',
    logo: '',
    image: '/placeholder-07.png',
    height: 'large' as const,
  },
  {
    id: '8',
    title: 'Momentous Pharmaceuticals PLC',
    logo: 'MOMENTOUS',
    image: '/placeholder-08.png',
    height: 'small' as const,
  },
  {
    id: '9',
    title: 'Smile Dental Clinic',
    logo: '',
    image: '/placeholder-09.png',
    height: 'medium' as const,
  },
  {
    id: '10',
    title: 'Smile Dental Clinic',
    logo: '',
    image: '/placeholder-10.png',
    height: 'large' as const,
  },
];

const rightColumnItems = [
  {
    id: '11',
    title: 'Legehar General Hospital',
    logo: '',
    image: '/placeholder-11.png',
    height: 'large' as const,
  },
  {
    id: '12',
    title: 'Heal Venture',
    logo: '',
    image: '/placeholder-12.png',
    height: 'medium' as const,
  },
  {
    id: '13',
    title: 'Serum Skin Care',
    logo: '',
    image: '/placeholder-13.png',
    height: 'small' as const,
  },
  {
    id: '14',
    title: 'Santim Pay',
    logo: '',
    image: '/placeholder-14.png',
    height: 'medium' as const,
  },
  {
    id: '15',
    title: 'Santim Pay',
    logo: '',
    image: '/placeholder-15.png',
    height: 'large' as const,
  },
];

export default memo(function Hero() {
  // Preload images for better performance
  useEffect(() => {
    const allImages = [
      ...leftColumnItems,
      ...middleColumnItems,
      ...rightColumnItems
    ].map(item => item.image).filter(Boolean);

    allImages.forEach(src => {
      const img = new Image();
      img.src = src as string;
    });
  }, []);

  // Scroll to Our Works section
  const scrollToOurWorks = () => {
    const ourWorksSection = document.getElementById('our-works');
    if (ourWorksSection) {
      ourWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#294C60' }}
      />
      
      {/* Left Side - Hero Content */}
      <div className="relative z-10 w-full lg:w-3/5 px-6 lg:px-8 xl:px-12 pt-24 lg:pt-32">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <motion.h1
            className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="block gradient-text italic">Good Health</span>
            <span className="block text-white">Deserves Great Messaging</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Bringing healthcare ideas to life through bold creative direction, 
            audience-focused messaging, and agile workflows designed to inform, 
            inspire, and drive measurable impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Demo
              </motion.button>
            </Link>
            
            <motion.button
              onClick={scrollToOurWorks}
              className="px-8 py-4 bg-gradient-to-r from-gradient-gold-500 to-gradient-gold-700 text-black font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white/60 text-sm mb-6 font-medium">
              Trusted by of Ethiopia&apos;s top brands
            </p>
            <LogoCarousel />
          </motion.div>
        </div>
      </div>

      {/* Right Side - TickerScroll */}
      <div className="hidden lg:block relative z-10 w-2/5 h-screen overflow-hidden">
        <div className="absolute inset-0 p-4">
          <TickerScroll
            items={[leftColumnItems, middleColumnItems, rightColumnItems]}
            speed={[0.2, 0.3, 0.3]}
            columns={3}
            className="w-full h-full"
          />
        </div>
        {/* Fade overlay at top to blend with navbar */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-birrama-blue via-birrama-blue/50 to-transparent pointer-events-none z-20" />
      </div>

      {/* Mobile TickerScroll */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        <div className="p-4 h-full">
          <TickerScroll
            items={[leftColumnItems, rightColumnItems]}
            speed={[0.25, 0.4]}
            columns={2}
            className="h-full"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-gradient-gold-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-birrama-blue/20 to-transparent rounded-full blur-2xl" />
    </section>
  );
});
