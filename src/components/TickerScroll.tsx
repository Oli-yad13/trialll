'use client';

import { useEffect, useRef, useState, useCallback, useMemo, memo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface TickerItem {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  logo?: string;
  color?: string;
  height?: 'small' | 'medium' | 'large';
}

interface TickerScrollProps {
  items: TickerItem[] | TickerItem[][];
  speed?: number | number[];
  columns?: number;
  className?: string;
}

// Create a single column with proper infinite duplication
const TickerColumn = memo(function TickerColumn({
  items,
  speed,
  direction,
  className
}: {
  items: TickerItem[];
  speed: number;
  direction: 'up' | 'down';
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [childrenSize, setChildrenSize] = useState(0);
  const offset = useMotionValue(0);

  const transform = useTransform(offset, (value) =>
    direction === 'down' ? `translate3d(0, ${value}px, 0)` : `translate3d(0, -${value}px, 0)`
  );

  const duplicatedItems = useMemo(() => {
    // Fixed duplicate count for better performance
    const duplicateCount = 3; // Always use 3 duplicates for seamless loop
    return Array(duplicateCount).fill(items).flat();
  }, [items]);

  const updateChildrenSize = useCallback(() => {
    if (containerRef.current && items.length > 0) {
      const firstChild = containerRef.current.children[0] as HTMLElement;
      if (firstChild) {
        // Calculate based on single item height + gap
        const itemHeight = firstChild.offsetHeight + 24; // gap-6
        const totalHeight = itemHeight * items.length;
        setChildrenSize(totalHeight);
      }
    }
  }, [items.length]);

  useEffect(() => {
    // Use a small delay to ensure DOM is ready
    const timer = setTimeout(updateChildrenSize, 10);
    return () => clearTimeout(timer);
  }, [updateChildrenSize]);

  useEffect(() => {
    // Throttled resize listener for performance
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateChildrenSize, 100);
    };

    window.addEventListener('resize', throttledResize, { passive: true });
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(resizeTimeout);
    };
  }, [updateChildrenSize]);

  useEffect(() => {
    if (!childrenSize) return;

    // Start animation immediately
    let targetOffset = direction === 'down' ? -childrenSize : 0;
    let currentOffset = direction === 'down' ? -childrenSize : 0;
    let animationFrameId: number | null = null;
    let lastTime = 0;

    const updateOffset = (currentTime: number) => {
      if (lastTime === 0) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Use deltaTime for consistent speed regardless of frame rate
      const frameSpeed = speed * (deltaTime / 16.67); // Normalize to 60fps
      targetOffset += frameSpeed;

      // Faster interpolation for more responsive animation
      currentOffset += (targetOffset - currentOffset) * 0.2;

      // Reset boundaries for seamless loop
      if (direction === 'down') {
        if (currentOffset >= 0) {
          currentOffset -= childrenSize;
          targetOffset -= childrenSize;
        }
      } else {
        if (currentOffset >= childrenSize) {
          currentOffset -= childrenSize;
          targetOffset -= childrenSize;
        }
      }

      offset.set(currentOffset);
      animationFrameId = requestAnimationFrame(updateOffset);
    };

    // Start animation immediately
    animationFrameId = requestAnimationFrame(updateOffset);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed, direction, childrenSize, offset]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        ref={containerRef}
        className="flex flex-col gap-6"
        style={{
          transform,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <TickerCard
            key={`${item.id}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
});

export default memo(function TickerScroll({
  items,
  speed = 1,
  columns = 3,
  className = ''
}: TickerScrollProps) {
  // Memoize direction calculation
  const getDirection = useCallback((columnIndex: number) => {
    return columnIndex === 1 ? 'down' : 'up';
  }, []);

  // Memoize column array
  const columnArray = useMemo(() =>
    Array.from({ length: columns }, (_, columnIndex) => columnIndex),
    [columns]
  );

  // Handle both single array and array of arrays
  const getColumnItems = useCallback((columnIndex: number) => {
    if (Array.isArray(items[0])) {
      // If items is an array of arrays, get the specific column
      return (items as TickerItem[][])[columnIndex] || [];
    } else {
      // If items is a single array, use it for all columns
      return items as TickerItem[];
    }
  }, [items]);

  // Handle both single speed and array of speeds
  const getColumnSpeed = useCallback((columnIndex: number) => {
    if (Array.isArray(speed)) {
      // If speed is an array, get the specific column speed
      return speed[columnIndex] || speed[0] || 1;
    } else {
      // If speed is a single number, use it for all columns
      return speed || 1;
    }
  }, [speed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex gap-6 h-full">
        {columnArray.map((columnIndex) => (
          <TickerColumn
            key={columnIndex}
            items={getColumnItems(columnIndex)}
            speed={getColumnSpeed(columnIndex)}
            direction={getDirection(columnIndex)}
            className="flex-1 min-w-0"
          />
        ))}
      </div>
    </div>
  );
});

const TickerCard = memo(function TickerCard({ item, index }: { item: TickerItem; index: number }) {
  // Static height variants for better performance
  const heightVariants = {
    small: 'h-64',   // 256px
    medium: 'h-80',  // 320px
    large: 'h-96'    // 384px
  };

  // Optimized height calculation
  const cardHeight = item.height 
    ? heightVariants[item.height]
    : heightVariants[['large', 'medium', 'small'][index % 3] as keyof typeof heightVariants];

  return (
    <motion.div
      className={`rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg ${cardHeight} w-full bg-white`}
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)', // Force GPU layer
      }}
    >
      {/* Main Image */}
      {item.image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.image})`,
            willChange: 'auto',
          }}
        />
      )}

      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Logo overlay (minimal, top-left) */}
      {item.logo && (
        <div className="absolute top-4 left-4 z-10">
          <div className="text-white text-sm font-semibold uppercase tracking-wide bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            {item.logo}
          </div>
        </div>
      )}

      {/* Title overlay (bottom, if needed) */}
      {item.title && (
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-white text-lg font-semibold leading-tight drop-shadow-lg">
            {item.title}
          </h3>
        </div>
      )}

      {/* Hover effect */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </motion.div>
  );
});
