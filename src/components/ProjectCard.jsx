import React, { useRef, useState } from 'react';
import { Github, ExternalLink, ArrowRight, Layers, CircleCheck, Play, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [shadowStyle, setShadowStyle] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Calculate rotation angles (max 12 degrees)
    const rotateX = -normalizedY * 12;
    const rotateY = normalizedX * 12;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setShadowStyle(`0 20px 40px rgba(0, 0, 0, 0.4), 
      ${-normalizedX * 15}px ${-normalizedY * 15}px 30px rgba(16, 185, 129, 0.1),
      ${normalizedX * 15}px ${normalizedY * 15}px 30px rgba(20, 184, 166, 0.1)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setShadowStyle('');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CircleCheck size={14} className="text-emerald-400" />;
      case 'In Progress':
        return <Play size={14} className="text-cyan-400 animate-pulse" />;
      default:
        return <Hammer size={14} className="text-amber-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'In Progress':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      default:
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    }
  };

  // Safe checks for arrays
  const technologies = project?.technologies || [];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform: transformStyle, 
        boxShadow: shadowStyle,
        transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out'
      }}
      className="glassmorphism rounded-2xl overflow-hidden flex flex-col h-full group/card select-none"
    >
      {/* Project Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={project?.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"}
          alt={project?.title}
          className="w-full h-full object-cover opacity-60 group-hover/card:opacity-85 group-hover/card:scale-105 transition-all duration-500"
          loading="lazy"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-[#060913]/80 text-cyan-400 border border-cyan-500/20 backdrop-blur-md">
            <Layers size={10} />
            {project?.category}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider border backdrop-blur-md ${getStatusColor(project?.status)}`}>
            {getStatusIcon(project?.status)}
            {project?.status}
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-space font-semibold text-white mb-2 group-hover/card:text-cyan-400 transition-colors duration-300">
          {project?.title}
        </h3>
        
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow font-sans">
          {project?.description}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-[10px] font-mono text-gray-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Actions Button Bar */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          {project?.githubUrl && project?.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="GitHub Repository"
            >
              <Github size={16} />
            </a>
          )}

          {project?.liveDemoUrl && project?.liveDemoUrl !== '#' && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}

          <Link
            to={`/project/${project?.slug}`}
            className="ml-auto flex items-center gap-1 px-3 py-2 bg-white/5 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg text-xs font-space font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer"
          >
            Details
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
