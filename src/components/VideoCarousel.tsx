'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import FramerAdvancedCarousel from './FramerAdvancedCarousel';

interface VideoCarouselProps {
  videos: string[];
}


// Individual Video Card Component
function VideoCard({ video, index, isActive }: { video: string; index: number; isActive?: boolean }) {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Check if it's a YouTube video
  const isYouTube = video.includes('youtube.com') || video.includes('youtu.be');
  // Check if it's a TikTok video
  const isTikTok = video.includes('tiktok.com');
  // Check if it's a local video
  const isLocalVideo = video.endsWith('.mp4');
  
  // Extract YouTube video ID
  const getYouTubeVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  // Extract TikTok video ID
  const getTikTokVideoId = (url: string): string => {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : '';
  };

  useEffect(() => {
    if (videoRef.current) {
      // Clear previous content
      videoRef.current.innerHTML = '';
      
      if (isYouTube) {
        // Create YouTube iframe embed
        const videoId = getYouTubeVideoId(video);
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=${isActive ? 1 : 0}&loop=1&playlist=${videoId}&mute=${!isActive ? 1 : 0}&controls=1&rel=0&modestbranding=1`;
        iframe.width = '100%';
        iframe.height = '600';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.style.borderRadius = '12px';
        iframe.style.border = 'none';

        videoRef.current.appendChild(iframe);
        iframe.onload = () => setIsLoaded(true);
        iframe.onerror = () => {
          console.warn('Failed to load YouTube iframe');
          setIsLoaded(true);
        };
      } else if (isTikTok) {
        // Create TikTok iframe embed
        const videoId = getTikTokVideoId(video);
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.tiktok.com/embed/${videoId}`;
        iframe.width = '100%';
        iframe.height = '600';
        iframe.frameBorder = '0';
        iframe.scrolling = 'no';
        iframe.allowFullscreen = true;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.style.borderRadius = '12px';
        iframe.style.border = 'none';

        videoRef.current.appendChild(iframe);
        iframe.onload = () => setIsLoaded(true);
        iframe.onerror = () => {
          console.warn('Failed to load TikTok iframe');
          setIsLoaded(true);
        };
      } else if (isLocalVideo) {
        // Create local video element
        const videoElement = document.createElement('video');
        videoElement.src = video;
        videoElement.width = 100;
        videoElement.height = 600;
        videoElement.controls = true;
        videoElement.loop = true;
        videoElement.muted = !isActive;
        videoElement.autoplay = isActive || false;
        videoElement.playsInline = true;
        videoElement.style.width = '100%';
        videoElement.style.height = '600px';
        videoElement.style.objectFit = 'cover';
        videoElement.style.borderRadius = '12px';

        videoRef.current.appendChild(videoElement);
        videoElement.onloadeddata = () => setIsLoaded(true);
        videoElement.onerror = () => {
          console.warn('Failed to load local video');
          setIsLoaded(true);
        };
      } else {
        // Fallback for other video types
        setIsLoaded(true);
      }

      // Fallback timeout
      setTimeout(() => setIsLoaded(true), 3000);
    }
  }, [video, isActive, isYouTube, isTikTok, isLocalVideo]);

  return (
    <div className={`relative bg-black rounded-2xl overflow-hidden group shadow-2xl transition-all duration-500 ${
      isActive ? 'ring-4 ring-birrama-blue ring-opacity-50' : ''
    }`}>
      {/* TikTok Embed Container */}
      <div
        ref={videoRef}
        className="w-full h-full flex items-center justify-center min-h-[600px]"
      />

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading Video {index + 1}</p>
            <p className="text-white/70 text-sm mt-2">
              {isYouTube ? 'YouTube' : isTikTok ? 'TikTok' : isLocalVideo ? 'Local Video' : 'Video'}
            </p>
          </div>
        </div>
      )}

      {/* Fallback for failed video loads */}
      {isLoaded && videoRef.current && videoRef.current.children.length === 0 && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play size={24} />
            </div>
            <p className="text-lg font-medium">Video {index + 1}</p>
            <p className="text-white/70 text-sm mt-2">
              {isYouTube ? 'YouTube Video' : isTikTok ? 'TikTok Video' : isLocalVideo ? 'Local Video' : 'Video'}
            </p>
            {(isYouTube || isTikTok) && (
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
              >
                Watch on {isYouTube ? 'YouTube' : 'TikTok'}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Video Number Badge */}
      <div className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold z-10 shadow-lg transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-birrama-blue to-birrama-blue-dark scale-110' 
          : 'bg-black/70'
      }`}>
        {index + 1}
      </div>

      {/* Active Video Indicator */}
      {isActive && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-birrama-blue to-birrama-blue-dark text-white px-3 py-1 rounded-full text-xs font-semibold z-10 shadow-lg animate-pulse">
          PLAYING
        </div>
      )}

      {/* External Link for YouTube and TikTok videos */}
      {(isYouTube || isTikTok) && (
        <a
          href={video}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 w-8 h-8 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors z-10"
        >
          <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}


export default function VideoCarousel({ videos }: VideoCarouselProps) {
  return (
    <div className="max-w-8xl mx-auto">
      {/* Framer Advanced Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 group"
      >
        <FramerAdvancedCarousel
          widthMode="columns"
          widthColumns={1}
          loop={true}
          showDots={true}
          arrows={{
            showArrows: true,
            iconColor: '#ffffff',
            iconSize: 32
          }}
          autoplay={{
            enabled: false,
            delay: 8000
          }}
          spaceBetween={0}
          effectEnabled={true}
          activeScale={1.0}
          inactiveOpacity={0.3}
          inactiveScale={0.8}
          centeredSlides={true}
          className="h-[800px]"
        >
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              video={video}
              index={index}
            />
          ))}
        </FramerAdvancedCarousel>
      </motion.div>

    </div>
  );
}