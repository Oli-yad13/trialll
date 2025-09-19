import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#052424] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo Section - Left */}
          <div className="lg:col-span-3 flex items-start">
            <Link href="/" className="block">
              <div className="relative w-40 h-40">
                <Image
                  src="/Group 125.png"
                  alt="Mavuno AI Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </Link>
          </div>

          {/* Technology Section */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6">
              TECHNOLOGY
            </h3>
            <nav className="space-y-4">
              <Link href="#how-it-works" className="block text-white hover:text-green-400 transition-colors text-lg">
                How It Works
              </Link>
              <Link href="#benefits" className="block text-white hover:text-green-400 transition-colors text-lg">
                Benefits
              </Link>
            </nav>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6">
              COMPANY
            </h3>
            <nav className="space-y-4">
              <Link href="/about" className="block text-white hover:text-green-400 transition-colors text-lg">
                About
              </Link>
              <Link href="/contact" className="block text-white hover:text-green-400 transition-colors text-lg">
                Contact
              </Link>
            </nav>
          </div>

          {/* Reach Us Section */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6">
              REACH US
            </h3>
            <div className="space-y-4">
              <p className="text-white text-lg">
                Ready for the future of agriculture?
              </p>
              <p className="text-white/60 text-base">
                Connect with our experts today.
              </p>
              
              {/* Social Media */}
              <div className="pt-4">
                <a 
                  href="https://www.linkedin.com/company/mavunoai/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-white hover:text-green-400 transition-colors text-base"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-white/40 text-sm">
              Copyright Mavuno AI © 2025 All Rights Reserved
            </p>
            <p className="text-white/40 text-sm">
              Made by{' '}
              <span className="text-white/60 font-medium">MAVUNO</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;