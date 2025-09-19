'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';

// Define the props for the component
interface AdvancedCarouselProps {
  children: React.ReactNode;
  heightType?: 'auto' | 'stretch' | 'rows';
  heightInset?: number;
  heightRows?: number;
  widthMode?: 'columns' | 'aspectRatio';
  widthColumns?: number;
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
  paginationInset?: string;
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

const AdvancedCarousel: React.FC<AdvancedCarouselProps> = (props) => {
  const {
    children,
    widthMode = 'columns',
    widthColumns = 2,
    loop = true,
    spaceBetween = 10,
    showDots = false,
    arrows = { showArrows: true },
    autoplay,
    centeredSlides = false,
    effectEnabled = false,
    coverflowEffect = false,
    crossfade = false,
    enableDrag = true,
    keyboardControl = false,
    initialIndex = 0,
    className = '',
    slideOverlap = 0,
    inactiveOpacity = 1,
    inactiveScale = 1,
    activeScale = 1,
  } = props;

  const swiperRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slidesPerView = widthMode === 'columns' ? widthColumns : 'auto';

  const effect = crossfade
    ? 'fade'
    : coverflowEffect
    ? 'coverflow'
    : effectEnabled
    ? 'creative'
    : 'slide';

  const creativeEffect = effectEnabled && !coverflowEffect ? {
    limitProgress: 8,
    prev: {
      translate: [`-${slideOverlap + Math.min(spaceBetween / (swiperRef.current?.width || 1000) * 100, 20)}%`, 0, 0],
      opacity: inactiveOpacity,
      scale: inactiveScale,
    },
    next: {
      translate: [`${slideOverlap + Math.min(spaceBetween / (swiperRef.current?.width || 1000) * 100, 20)}%`, 0, 0],
      opacity: inactiveOpacity,
      scale: inactiveScale,
    },
    active: {
      scale: activeScale,
    },
  } : {};

  const coverflowEffectProps = coverflowEffect ? {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  } : {};

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, EffectCoverflow, EffectCreative]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        centeredSlides={centeredSlides}
        effect={effect}
        creativeEffect={creativeEffect}
        coverflowEffect={coverflowEffectProps}
        fadeEffect={{ crossFade: crossfade }}
        autoplay={autoplay?.enabled ? { delay: autoplay.delay, disableOnInteraction: false } : false}
        keyboard={{ enabled: keyboardControl }}
        draggable={enableDrag}
        initialSlide={initialIndex}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="h-full"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {arrows.showArrows && (
        <>
          <div
            className={`swiper-button-prev custom-swiper-button left-4 ${!loop && isBeginning ? 'swiper-button-disabled' : ''}`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <i className={`ph-${arrows.iconType === 'caret' ? 'caret-left' : 'arrow-left'}`} style={{ color: arrows.iconColor, fontSize: arrows.iconSize, fontWeight: arrows.iconWeight }} />
          </div>
          <div
            className={`swiper-button-next custom-swiper-button right-4 ${!loop && isEnd ? 'swiper-button-disabled' : ''}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <i className={`ph-${arrows.iconType === 'caret' ? 'caret-right' : 'arrow-right'}`} style={{ color: arrows.iconColor, fontSize: arrows.iconSize, fontWeight: arrows.iconWeight }} />
          </div>
        </>
      )}

      {showDots && <div className="swiper-pagination"></div>}

      <style jsx global>{`
        .custom-swiper-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: opacity 0.3s;
        }
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .swiper-pagination-bullet {
          background: ${props.inactiveDotColor || 'rgba(255, 255, 255, 0.5)'} !important;
          width: ${props.dotSize || 10}px !important;
          height: ${props.dotSize || 10}px !important;
          margin: 0 ${props.dotGap || 4}px !important;
        }
        .swiper-pagination-bullet-active {
          background: ${props.activeDotColor || 'white'} !important;
        }
      `}</style>
    </div>
  );
};

export default AdvancedCarousel;
