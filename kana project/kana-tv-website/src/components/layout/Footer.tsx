import Link from 'next/link'
import Image from 'next/image'
import { SOCIAL_LINKS } from '@/constants'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand - Kana TV Style */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-12">
                <Image
                  src="/Kana_TV.png"
                  alt="Kana TV Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-primary tracking-tight">kana.tv</span>
            </div>
            <p className="text-sm text-white/70 font-secondary leading-relaxed">
              Ethiopia's premier entertainment destination, bringing you the best in drama, variety, and educational content.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-kana-pink transition-colors font-secondary text-sm"
                aria-label="YouTube"
              >
                YouTube
              </a>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-kana-pink transition-colors font-secondary text-sm"
                aria-label="Telegram"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-secondary tracking-widest uppercase text-white/70">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shows" className="text-white/70 hover:text-white transition-colors font-secondary">All Shows</Link></li>
              <li><Link href="/events" className="text-white/70 hover:text-white transition-colors font-secondary">Events</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors font-secondary">Blog</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors font-secondary">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-sm font-secondary tracking-widest uppercase text-white/70">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shows/drama" className="text-white/70 hover:text-white transition-colors font-secondary">Drama</Link></li>
              <li><Link href="/shows/variety" className="text-white/70 hover:text-white transition-colors font-secondary">Variety Shows</Link></li>
              <li><Link href="/shows/educational" className="text-white/70 hover:text-white transition-colors font-secondary">Educational</Link></li>
              <li><Link href="/shows/kids" className="text-white/70 hover:text-white transition-colors font-secondary">Kids</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-secondary tracking-widest uppercase text-white/70">Get In Touch</h3>
            <div className="space-y-3 text-sm text-white/70 font-secondary">
              <p>Email: info@kana.tv</p>
              <p>Phone: +251 11 123 4567</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/50 font-secondary">&copy; 2025 Kana TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
