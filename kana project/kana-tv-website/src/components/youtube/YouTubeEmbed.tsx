'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface YouTubeEmbedProps {
  playlistUrl: string
  title: string
  className?: string
  autoplay?: boolean
  lazy?: boolean
}

export default function YouTubeEmbed({
  playlistUrl,
  title,
  className,
  autoplay = false,
  lazy = true
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(!lazy)
  const containerRef = useRef<HTMLDivElement>(null)

  // Extract playlist ID from URL
  const getPlaylistId = (url: string) => {
    const match = url.match(/[?&]list=([^&]+)/)
    return match ? match[1] : null
  }

  const playlistId = getPlaylistId(playlistUrl)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || !containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [lazy])

  const handleLoad = () => {
    setIsLoading(false)
    setIsLoaded(true)
  }

  const handleClick = () => {
    if (!isLoaded) {
      setIsLoading(true)
    }
  }

  if (!playlistId) {
    return (
      <div className={cn('flex items-center justify-center h-64 bg-muted rounded-lg', className)}>
        <p className="text-muted-foreground">Invalid playlist URL</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {!isVisible ? (
        <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
          <div className="text-center">
            <Play size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Click to load playlist</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg z-10">
              <Loader2 size={32} className="animate-spin text-primary" />
            </div>
          )}
          
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`}
            title={title}
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleLoad}
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  )
}
