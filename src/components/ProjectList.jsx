import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Search, Grid, List, Layers, ArrowUpRight, Github, ExternalLink, CircleCheck, Play, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CATEGORIES = ["All", "Web Development", "Data Science", "Machine Learning", "Arduino / IoT"];

export default function ProjectList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  // Filter and Sort calculations using useMemo
  const filteredAndSorted = useMemo(() => {
    let result = [...projects];

    // 1. Search Query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p => p.title.toLowerCase().includes(q) || 
             p.description.toLowerCase().includes(q) ||
             (p.technologies || []).some(t => t.toLowerCase().includes(q))
      );
    }

    // 2. Category filter
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // 3. Sorting
    if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'status') {
      result.sort((a, b) => a.status.localeCompare(b.status));
    } else {
      // default: ID / index order
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CircleCheck size={12} className="text-emerald-400" />;
      case 'In Progress':
        return <Play size={12} className="text-teal-400 animate-pulse" />;
      default:
        return <Hammer size={12} className="text-amber-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'In Progress':
        return 'text-teal-400 bg-teal-500/10 border-teal-500/20';
      default:
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    }
  };

  return (
    <section id="project-list" className="py-20 bg-[#060913]/40 relative overflow-hidden border-t border-white/5">
      {/* Decorative gradient blur */}
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] rounded-full bg-emerald-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 select-none">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Archive</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-xs text-gray-500 tracking-wider font-mono mt-4">
            A searchable catalog of all my work, projects, and learning experiments
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="glassmorphism p-6 rounded-2xl mb-8 flex flex-col gap-6">
          {/* Top row: search + sort + view toggle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="lg:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by project name, tech stack, description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#060913]/65 border border-white/5 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all font-sans"
              />
            </div>

            {/* Sort Selector */}
            <div className="lg:col-span-4 flex items-center gap-2">
              <label className="text-xs font-space font-medium text-gray-500 uppercase tracking-wider select-none shrink-0">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-3 bg-[#060913]/65 border border-white/5 rounded-xl text-sm text-gray-300 focus:outline-none focus:border-emerald-500/50 transition-all font-space select-none"
              >
                <option value="default">Default (Recent First)</option>
                <option value="title">Alphabetical (A - Z)</option>
                <option value="status">Project Status</option>
              </select>
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="lg:col-span-2 flex items-center justify-end gap-2 border-l border-white/5 pl-4 select-none">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg border transition-all ${
                  viewMode === 'grid'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : 'border-white/5 text-gray-500 hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-lg border transition-all ${
                  viewMode === 'list'
                    ? 'border-teal-500/30 bg-teal-500/10 text-teal-400'
                    : 'border-white/5 text-gray-500 hover:text-white'
                }`}
                title="List View"
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Bottom row: category tabs */}
          <div className="flex flex-wrap items-center gap-2 select-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-space tracking-wider uppercase rounded-xl border transition-all ${
                  activeCategory === cat
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium'
                    : 'border-white/3 bg-white/2 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Display Container */}
        {filteredAndSorted.length === 0 ? (
          <div className="glassmorphism rounded-2xl p-12 text-center select-none animate-fade-in">
            <Layers className="mx-auto text-gray-500 mb-4 animate-bounce" size={40} />
            <h3 className="text-lg font-space font-medium text-white mb-2">No Projects Found</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
              We couldn't find matches for "{searchQuery}". Try altering your search keywords or resetting categories.
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View Layout */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredAndSorted.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* List View Layout */
          <div className="flex flex-col gap-3 font-sans">
            <AnimatePresence mode="popLayout">
              {filteredAndSorted.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glassmorphism p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-emerald-500/25 transition-all group"
                >
                  {/* Left block info */}
                  <div className="text-left flex-grow max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 mb-2 select-none">
                      <h3 className="text-lg font-space font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <span className="text-[9px] font-mono font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#060913] text-emerald-400 border border-emerald-500/10">
                        {project.category}
                      </span>
                      
                      <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-medium uppercase tracking-wider border ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mb-4 leading-relaxed font-sans line-clamp-2 md:line-clamp-1">
                      {project.description}
                    </p>

                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-1.5">
                      {(project.technologies || []).map(t => (
                        <span key={t} className="text-[9px] font-mono text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Right Block */}
                  <div className="flex items-center gap-3 shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-white/5 justify-end">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-gray-400 hover:text-white rounded-xl transition-colors cursor-pointer"
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-white/5 hover:border-teal-500/30 hover:bg-teal-500/5 text-gray-400 hover:text-white rounded-xl transition-colors cursor-pointer"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <Link
                      to={`/project/${project.slug}`}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-space font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer"
                    >
                      Details
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
