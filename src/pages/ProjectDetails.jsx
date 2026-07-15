import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink, Cpu, Sparkles, AlertCircle, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectDetails() {
  const { slug } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find matching project
  const project = projects.find((p) => p.slug === slug);

  // Project not found fallback UI
  if (!project) {
    return (
      <div className="min-h-screen bg-[#060913] flex flex-col items-center justify-center px-6 select-none font-space text-center">
        <AlertCircle className="text-rose-500 mb-4 animate-bounce" size={48} />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Project Not Found</h2>
        <p className="text-sm text-gray-500 max-w-sm mb-8 leading-relaxed">
          The project slug "{slug}" does not map to any item in our records.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
        >
          <ArrowLeft size={14} />
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Safe checks for arrays
  const technologies = project.technologies || [];
  const features = project.features || [];
  const screenshots = project.screenshots || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#060913] text-left pt-28 pb-20 relative grid-bg"
    >
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-space font-medium tracking-widest text-gray-400 hover:text-emerald-400 uppercase mb-8 transition-colors select-none group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Project Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3 select-none">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-white/5 text-emerald-400 border border-white/5">
                <Layers size={10} />
                {project.category}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-white/5 text-teal-400 border border-white/5">
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space text-white leading-tight">
              {project.title}
            </h1>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
              {project.description}
            </p>
          </div>

          {/* Right Action Links */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 justify-start lg:justify-end select-none">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 text-gray-300 hover:text-white rounded-xl font-space text-xs tracking-widest uppercase transition-all duration-300"
              >
                <Github size={16} />
                Source Code
              </a>
            )}

            {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-xl font-space text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Image Banner */}
        <div className="w-full h-[250px] sm:h-[400px] rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-2xl relative select-none">
          <img
            src={project.image || "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1200&auto=format&fit=crop"}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent" />
        </div>

        {/* Two-Column Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 font-sans">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl font-space font-semibold text-white tracking-wider flex items-center gap-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Project Overview
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="space-y-4">
              <h2 className="text-xl font-space font-semibold text-white tracking-wider flex items-center gap-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                The Problem
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                To build an effective system, we must first define the core issue. This project solves key problems regarding reliability, workflow visibility, and data integrity by delivering a structured programmatic response tailored to the environment.
              </p>
            </div>

            {/* Challenges faced */}
            {project.challenges && (
              <div className="space-y-4">
                <h2 className="text-xl font-space font-semibold text-white tracking-wider flex items-center gap-2 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Technical Challenges
                </h2>
                <div className="glassmorphism p-6 rounded-2xl border-amber-500/10 bg-amber-500/2">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              </div>
            )}

            {/* Key Outcomes / Learnings */}
            {project.learnings && (
              <div className="space-y-4">
                <h2 className="text-xl font-space font-semibold text-white tracking-wider flex items-center gap-2 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Key Learnings
                </h2>
                <div className="glassmorphism p-6 rounded-2xl border-emerald-500/10 bg-emerald-500/2">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.learnings}
                  </p>
                </div>
              </div>
            )}

            {/* Screenshots Gallery */}
            {screenshots.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-space font-semibold text-white tracking-wider flex items-center gap-2 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Project Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
                  {screenshots.map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-white/5 shadow-lg max-h-[220px]">
                      <img src={src} alt="screenshot" className="w-full h-full object-cover hover:scale-102 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 select-none">
            {/* Tech Stack Box */}
            <div className="glassmorphism p-6 rounded-2xl">
              <h3 className="text-sm font-space font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu size={16} className="text-emerald-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map(t => (
                  <span key={t} className="text-xs font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/15 px-3 py-1.5 rounded-xl">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Features Checklist */}
            {features.length > 0 && (
              <div className="glassmorphism p-6 rounded-2xl">
                <h3 className="text-sm font-space font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-teal-400" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed text-left">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}
