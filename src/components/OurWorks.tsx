'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';

interface ProjectWithWorkAreas {
  name: string;
  oneLiner: string;
  workAreas?: string[];
  coverImage?: string;
  banner: string;
  slug: string;
}

const works = projects.map((project, index) => ({
  id: index + 1,
  title: project.name,
  subtitle: project.oneLiner,
  workAreas: (project as ProjectWithWorkAreas).workAreas || ['Creative Services'],
  image: (project as ProjectWithWorkAreas).coverImage || project.banner || `/placeholder-${String(index + 1).padStart(2, '0')}.png`,
  slug: project.slug
}));

export default function OurWorks() {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  return (
        <>
        <section id="our-works" className="bg-white py-20 lg:py-32">
      {/* Header */}
      <div className="text-center mb-16 lg:mb-24">
        <motion.h1
          className="text-4xl lg:text-6xl font-normal mb-8 leading-tight"
          style={{ color: '#294C60' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We make beautiful brands and digital
          <br />
          experiences.
        </motion.h1>
        <motion.div
          className="w-16 h-px bg-gray-400 mx-auto"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Works Grid */}
      <div className="px-8 lg:px-16">
        {/* First Row - 2 equal width cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {works.slice(0, 2).map((work, index) => (
            <Link key={work.id} href={`/projects/${work.slug}`}>
              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredWork(work.id)}
                onHoverEnd={() => setHoveredWork(null)}
              >
              {/* Card with Frame Border */}
              <div className="relative h-[720px] overflow-hidden bg-gray-100 border-4 border-gray-300 group-hover:border-birrama-blue transition-colors duration-300 rounded-2xl">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Frame Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Company Name */}
                <div className="absolute top-8 left-8 right-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {work.title}
                  </h3>
                </div>

                {/* Work Areas Tags - Bottom Frame */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-8 rounded-b-2xl">
                  <div className="flex flex-wrap gap-2">
                    {work.workAreas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="px-3 py-1 bg-gray-200 text-gray-800 text-sm font-medium rounded-full border border-gray-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredWork === work.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              </motion.div>
            </Link>
          ))}
        </div>

        {/* Remaining Rows - 3 cards each */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {works.slice(2).map((work, index) => (
            <Link key={work.id} href={`/projects/${work.slug}`}>
              <motion.div
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                onHoverStart={() => setHoveredWork(work.id)}
                onHoverEnd={() => setHoveredWork(null)}
              >
              {/* Card with Frame Border */}
              <div className="relative h-[720px] overflow-hidden bg-gray-100 border-4 border-gray-300 group-hover:border-birrama-blue transition-colors duration-300 rounded-2xl">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                {/* Frame Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Company Name */}
                <div className="absolute top-6 left-6 right-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    {work.title}
                  </h3>
                </div>

                {/* Work Areas Tags - Bottom Frame */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-b-2xl">
                  <div className="flex flex-wrap gap-1.5">
                    {work.workAreas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-full border border-gray-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredWork === work.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              </motion.div>
            </Link>
          ))}
        </div>
      </div>

    </section>

    {/* TV Commercial Footer */}
    <footer className="relative w-full h-[80vh] lg:h-[90vh] bg-black overflow-hidden -mx-8 lg:-mx-16">
      <video
        className="w-full h-full object-cover"
        controls
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
            onError={(e) => {
              console.error('Video error:', e);
              const target = e.target as HTMLVideoElement;
              console.error('Video error details:', target.error);
            }}
        onLoadStart={() => console.log('Video loading started')}
        onLoadedData={() => console.log('Video data loaded')}
        onCanPlay={() => console.log('Video can play')}
        onPlay={() => console.log('Video started playing')}
        onPause={() => console.log('Video paused')}
        onWaiting={() => console.log('Video waiting for data')}
        onStalled={() => console.log('Video stalled')}
      >
        <source src="/ACE.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </footer>
    </>
  );
}