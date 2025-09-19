'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';

// Type declaration for TikTok embed
declare global {
  interface Window {
    tiktokEmbed?: {
      lib?: {
        render?: () => void;
      };
    };
  }
}

interface TikTokVideoCarouselProps {
  videos: string[];
}

// Extract TikTok video ID from URL
const getTikTokVideoId = (url: string): string => {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : '';
};

// Extract username from TikTok URL
const getTikTokUsername = (url: string): string => {
  const match = url.match(/@([^/]+)/);
  return match ? match[1] : 'username';
};

// Individual Video Card Component
function VideoCard({ 
  video, 
  index, 
  isActive, 
  isPreview = false,
  onClick 
}: { 
  video: string; 
  index: number; 
  isActive: boolean;
  isPreview?: boolean;
  onClick?: () => void;
}) {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getTikTokVideoId(video);
  const username = getTikTokUsername(video);

  useEffect(() => {
    if (videoRef.current && videoId && isActive) {
      try {
        // Create TikTok blockquote embed
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'tiktok-embed';
        blockquote.setAttribute('cite', video);
        blockquote.setAttribute('data-video-id', videoId);
        blockquote.style.maxWidth = '100%';
        blockquote.style.minWidth = '325px';
        blockquote.style.margin = '0';

        // Add section element (required by TikTok)
        const section = document.createElement('section');
        blockquote.appendChild(section);

        // Clear previous content and add blockquote
        videoRef.current.innerHTML = '';
        videoRef.current.appendChild(blockquote);

        // Load TikTok embed script if not already loaded
        if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
          const script = document.createElement('script');
          script.src = 'https://www.tiktok.com/embed.js';
          script.async = true;
          script.onerror = () => {
            console.warn('Failed to load TikTok embed script');
            setIsLoaded(true);
          };
          document.head.appendChild(script);

          script.onload = () => {
            try {
              if (window.tiktokEmbed?.lib?.render) {
                window.tiktokEmbed.lib.render();
              }
              setIsLoaded(true);
              setIsPlaying(true);
            } catch (error) {
              console.warn('TikTok embed render error:', error);
              setIsLoaded(true);
            }
          };
        } else {
          // If script already exists, trigger embed
          try {
            if (window.tiktokEmbed?.lib?.render) {
              window.tiktokEmbed.lib.render();
            }
          } catch (error) {
            console.warn('TikTok embed render error:', error);
          }
          setIsLoaded(true);
          setIsPlaying(true);
        }
      } catch (error) {
        console.warn('TikTok embed setup error:', error);
        setIsLoaded(true);
      }
    }
  }, [video, videoId, isActive]);

  return (
    <motion.div 
      className={`relative bg-black rounded-2xl overflow-hidden group cursor-pointer ${
        isPreview ? 'opacity-60 scale-95' : 'opacity-100 scale-100'
      }`}
      onClick={onClick}
      whileHover={isPreview ? { scale: 0.98, opacity: 0.8 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* TikTok Embed Container */}
      <div
        ref={videoRef}
        className={`w-full flex items-center justify-center ${
          isPreview ? 'h-48' : 'min-h-[600px]'
        }`}
      />

      {/* Preview Overlay for side videos */}
      {isPreview && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <Play size={20} />
            </div>
            <p className="text-sm font-medium">Video {index + 1}</p>
            <p className="text-white/70 text-xs">@{username}</p>
          </div>
        </div>
      )}

      {/* Loading State */}
      {!isLoaded && isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading Video {index + 1}</p>
            <p className="text-white/70 text-sm mt-2">@{username}</p>
          </div>
        </div>
      )}

      {/* Fallback for failed TikTok embeds */}
      {isLoaded && isActive && videoRef.current && videoRef.current.children.length === 0 && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play size={24} />
            </div>
            <p className="text-lg font-medium">Video {index + 1}</p>
            <p className="text-white/70 text-sm mt-2">@{username}</p>
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
            >
              Watch on TikTok
            </a>
          </div>
        </div>
      )}

      {/* Video Number Badge */}
      <div className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold z-10 ${
        isActive ? 'bg-black/70' : 'bg-white/20'
      }`}>
        {index + 1}
      </div>

      {/* Play/Pause Button for active video */}
      {isActive && isLoaded && (
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="w-8 h-8 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      )}

      {/* External Link for preview videos */}
      {isPreview && (
        <a
          href={video}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
        >
          <ExternalLink size={16} />
        </a>
      )}
    </motion.div>
  );
}

// Extend window type for TikTok embed
declare global {
  interface Window {
    tiktokEmbed?: {
      lib?: {
        render?: () => void;
      };
    };
  }
}

export default function TikTokVideoCarousel({ videos }: TikTokVideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, videos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Main Carousel Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 z-20 px-4 py-2 bg-black/70 hover:bg-black/90 rounded-full text-white text-sm font-medium transition-all duration-300 flex items-center gap-2"
        >
          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>

        {/* Main Video Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
          {/* Left Preview Video */}
          {videos.length > 1 && (
            <div className="hidden lg:block">
              <VideoCard
                video={videos[(currentIndex - 1 + videos.length) % videos.length]}
                index={(currentIndex - 1 + videos.length) % videos.length}
                isActive={false}
                isPreview={true}
                onClick={() => goToPrevious()}
              />
            </div>
          )}

          {/* Center Active Video */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <VideoCard
                  video={videos[currentIndex]}
                  index={currentIndex}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Preview Video */}
          {videos.length > 2 && (
            <div className="hidden lg:block">
              <VideoCard
                video={videos[(currentIndex + 1) % videos.length]}
                index={(currentIndex + 1) % videos.length}
                isActive={false}
                isPreview={true}
                onClick={() => goToNext()}
              />
            </div>
          )}
        </div>

        {/* Video Thumbnails Navigation */}
        <div className="flex justify-center mt-8 gap-3">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVideo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-birrama-blue scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Video Links Section */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-6" style={{ color: '#294C60' }}>
          Watch on TikTok
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium transition-colors group"
            >
              <span>Video {index + 1}</span>
              <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
