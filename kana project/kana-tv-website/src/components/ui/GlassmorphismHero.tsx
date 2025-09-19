'use client'

import { Component } from '@/components/raycast-animated-background'

export default function GlassmorphismHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Raycast Animated Background */}
      <div className="absolute inset-0 w-full h-full px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="w-full h-full overflow-hidden">
          <Component />
        </div>
      </div>
    </div>
  )
}