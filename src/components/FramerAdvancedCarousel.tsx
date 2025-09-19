'use client';

import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useAnimation } from 'framer-motion';

interface FramerAdvancedCarouselProps {
  children: React.ReactNode;
  widthMode?: 'columns' | 'aspectRatio';
  widthColumns?: number;
  aspectRatio?: number;
  heightType?: 'auto' | 'stretch' | 'rows';
  heightRows?: number;
  heightInset?: number;
  loop?: boolean;
  spaceBetween?: number;
  showDots?: boolean;
  dotContainerColor?: string;
  dotContainerBlur?: number;
  activeDotColor?: string;
  inactiveDotColor?: string;
  dotSize?: number;
  dotGap?: number;
  dotContainerPadding?: number;
  padding?: number;
  paddingPerSide?: boolean;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  arrows?: {
    showArrows: boolean;
    arrowsOnHover?: boolean;
    iconType?: 'caret' | 'arrow';
    iconColor?: string;
    iconSize?: number;
    iconWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
    arrowInset?: string;
  };
  keyboardControl?: boolean;
  centeredSlides?: boolean;
  effectEnabled?: boolean;
  activeScale?: number;
  inactiveOpacity?: number;
  inactiveScale?: number;
  coverflowEffect?: boolean;
  slideOverlap?: number;
  autoplay?: {
    enabled: boolean;
    delay: number;
  };
  crossfade?: boolean;
  enableDrag?: boolean;
  clickToNavigate?: boolean;
  initialIndex?: number;
  className?: string;
}

const FramerAdvancedCarousel: React.FC<FramerAdvancedCarouselProps> = (props) => {
  const {
    children,
    widthMode = 'columns',
    widthColumns = 2,
    aspectRatio = 16 / 9,
    heightType = 'auto',
    heightRows = 1,
    heightInset = 0,
    loop = true,
    spaceBetween = 10,
    showDots = false,
    dotContainerColor = 'rgba(0, 0, 0, 0.5)',
    dotContainerBlur = 10,
    activeDotColor = '#ffffff',
    inactiveDotColor = 'rgba(255, 255, 255, 0.5)',
    dotSize = 8,
    dotGap = 8,
    dotContainerPadding = 16,
    padding = 0,
    paddingPerSide = false,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    arrows = { showArrows: true },
    keyboardControl = false,
    centeredSlides = false,
    effectEnabled = false,
    activeScale = 1.1,
    inactiveOpacity = 0.6,
    inactiveScale = 0.9,
    coverflowEffect = false,
    slideOverlap = 0,
    autoplay,
    crossfade = false,
    enableDrag = true,
    clickToNavigate = true,
    initialIndex = 0,
    className = '',
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const childrenArray = React.Children.toArray(children);
  const totalSlides = childrenArray.length;
  const maxIndex = totalSlides - 1;

  // Calculate item width based on width mode
  const calculateItemWidth = useCallback(() => {
    if (!containerRef.current) return 0;
    
    const containerWidth = containerRef.current.offsetWidth;
    if (widthMode === 'columns') {
      return (containerWidth - (spaceBetween * (widthColumns - 1))) / widthColumns;
    } else {
      // aspectRatio mode
      return containerWidth / aspectRatio;
    }
  }, [widthMode, widthColumns, spaceBetween, aspectRatio]);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setItemWidth(calculateItemWidth());
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [calculateItemWidth]);

  // Motion values for smooth animation
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  // Calculate translateX based on current index
  const translateX = useTransform(springX, (value) => {
    if (centeredSlides) {
      const centerOffset = (containerWidth - itemWidth) / 2;
      return -value * (itemWidth + spaceBetween) + centerOffset;
    }
    return -value * (itemWidth + spaceBetween);
  });

  // Update beginning/end states
  useEffect(() => {
    setIsBeginning(currentIndex === 0);
    setIsEnd(currentIndex >= maxIndex);
  }, [currentIndex, maxIndex]);

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index > maxIndex) return;
    setCurrentIndex(index);
    x.set(index);
  }, [maxIndex, x]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else if (loop) {
      goToSlide(maxIndex);
    }
  }, [currentIndex, maxIndex, loop, goToSlide]);

  const goToNext = useCallback(() => {
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    } else if (loop) {
      goToSlide(0);
    }
  }, [currentIndex, maxIndex, loop, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    if (!keyboardControl) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyboardControl, goToPrevious, goToNext]);

  // Autoplay
  useEffect(() => {
    if (!autoplay?.enabled) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoplay.delay);

    return () => clearInterval(interval);
  }, [autoplay, goToNext]);

  // Initialize position
  useEffect(() => {
    x.set(initialIndex);
  }, [initialIndex, x]);

  // Drag handling
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (_event: unknown, info: { velocity: { x: number }, offset: { x: number } }) => {
    setIsDragging(false);
    
    if (!enableDrag) return;

    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 500) {
      if (velocity > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    } else if (Math.abs(offset) > threshold) {
      if (offset > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    } else {
      // Snap back to current position
      x.set(currentIndex);
    }
  };

  // Calculate padding
  const paddingValue = paddingPerSide
    ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
    : `${padding}px`;

  // Calculate height
  const heightValue = heightType === 'stretch' 
    ? '100%' 
    : heightType === 'rows' 
    ? `${heightRows * (itemWidth / aspectRatio) + heightInset}px`
    : 'auto';

  return (
    <div className={`relative ${className}`} style={{ padding: paddingValue }}>
      {/* Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ height: heightValue }}
      >
        {/* Slides Container */}
        <motion.div
          className="flex"
          style={{ x: translateX }}
          drag={enableDrag ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          dragElastic={0.1}
        >
          {childrenArray.map((child, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === currentIndex - 1;
            const isNext = index === currentIndex + 1;
            
            let scale = 1;
            let opacity = 1;
            let zIndex = 1;

            if (effectEnabled) {
              if (isActive) {
                scale = activeScale;
                opacity = 1;
                zIndex = 3;
              } else if (isPrev || isNext) {
                scale = inactiveScale;
                opacity = inactiveOpacity;
                zIndex = 2;
              } else {
                scale = inactiveScale * 0.9;
                opacity = inactiveOpacity * 0.3;
                zIndex = 1;
              }
            }

            return (
              <motion.div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: itemWidth,
                  marginRight: index < totalSlides - 1 ? spaceBetween : 0,
                  zIndex,
                }}
                animate={{
                  scale,
                  opacity,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                onClick={() => {
                  if (clickToNavigate) {
                    goToSlide(index);
                  }
                }}
              >
                {React.isValidElement(child)
                  ? React.cloneElement(child, { isActive, index } as React.Attributes)
                  : child
                }
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Arrows */}
        {arrows.showArrows && (
          <>
            <button
              onClick={goToPrevious}
              disabled={!loop && isBeginning}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                arrows.arrowsOnHover ? 'opacity-0 group-hover:opacity-100' : ''
              } ${
                !loop && isBeginning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
              }`}
              style={{
                backgroundColor: dotContainerColor,
                backdropFilter: `blur(${dotContainerBlur}px)`,
                color: arrows.iconColor || activeDotColor,
              }}
            >
              {arrows.iconType === 'caret' ? (
                <svg width={arrows.iconSize || 20} height={arrows.iconSize || 20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              ) : (
                <svg width={arrows.iconSize || 20} height={arrows.iconSize || 20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
              )}
            </button>

            <button
              onClick={goToNext}
              disabled={!loop && isEnd}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                arrows.arrowsOnHover ? 'opacity-0 group-hover:opacity-100' : ''
              } ${
                !loop && isEnd ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
              }`}
              style={{
                backgroundColor: dotContainerColor,
                backdropFilter: `blur(${dotContainerBlur}px)`,
                color: arrows.iconColor || activeDotColor,
              }}
            >
              {arrows.iconType === 'caret' ? (
                <svg width={arrows.iconSize || 20} height={arrows.iconSize || 20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              ) : (
                <svg width={arrows.iconSize || 20} height={arrows.iconSize || 20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 11v2h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z"/>
                </svg>
              )}
            </button>
          </>
        )}

        {/* Dots Navigation */}
        {showDots && (
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
            style={{
              backgroundColor: dotContainerColor,
              backdropFilter: `blur(${dotContainerBlur}px)`,
              padding: `${dotContainerPadding}px`,
              borderRadius: '20px',
            }}
          >
            {childrenArray.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="rounded-full transition-all duration-300 hover:scale-125"
                style={{
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: index === currentIndex ? activeDotColor : inactiveDotColor,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FramerAdvancedCarousel;
