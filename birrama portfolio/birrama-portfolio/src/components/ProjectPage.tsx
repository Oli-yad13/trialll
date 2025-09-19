'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import VideoCarousel from './VideoCarousel';

interface Project {
  slug: string;
  name: string;
  website: string;
  oneLiner: string;
  logo: string;
  banner: string;
  videos: string[];
  challenge: string;
  solution: string;
  result: string;
}

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="px-8 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Work</span>
            </Link>

            <Link
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gradient-gold-500 to-gradient-gold-700 text-black font-medium rounded-full hover:scale-105 transition-transform"
            >
              <span>Visit Site</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="relative h-[80vh] overflow-hidden">
          <Image
            src={project.banner}
            alt={project.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="px-8 lg:px-16 pb-16 w-full">
              <motion.div
                className="max-w-4xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-6">
                  {project.name}
                </h1>
                <p className="text-2xl lg:text-3xl text-white/90 font-light leading-relaxed">
                  {project.oneLiner}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-20 lg:py-32">
        <div className="px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Project Overview */}
            <motion.div
              className="grid lg:grid-cols-3 gap-16 lg:gap-24 mb-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#294C60' }}>
                  The Challenge
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#294C60' }}>
                  Our Solution
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#294C60' }}>
                  The Result
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {project.result}
                </p>
              </div>
            </motion.div>

            {/* Video Showcase */}
            {project.videos.length > 0 && (
              <motion.div
                className="mb-32"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl lg:text-6xl font-black mb-16 text-center" style={{ color: '#294C60' }}>
                  Campaign Videos
                </h2>
                <VideoCarousel videos={project.videos} />
              </motion.div>
            )}

            {/* Call to Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-black mb-8" style={{ color: '#294C60' }}>
                Ready to transform
                <br />
                <span className="gradient-text italic">your brand?</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-gradient-gold-500 to-gradient-gold-700 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform"
                >
                  Start Your Project
                </Link>

                <Link
                  href="/"
                  className="px-8 py-4 border-2 text-lg font-medium rounded-full hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#294C60', color: '#294C60' }}
                >
                  View More Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}