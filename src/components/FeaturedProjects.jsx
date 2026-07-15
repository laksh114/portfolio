import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// Featured project IDs (1: Retail Sales, 2: To-Do List, 3: Data Cleaning, 8: Voice Assistant)
const FEATURED_IDS = [1, 2, 3, 8];

export default function FeaturedProjects() {
  const featured = projects.filter(p => FEATURED_IDS.includes(p.id));

  return (
    <section id="projects" className="py-20 bg-[#060913]/60 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Projects</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-xs text-gray-500 tracking-wider font-mono mt-4">
            A handpicked selection of my best engineering and programming accomplishments
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
