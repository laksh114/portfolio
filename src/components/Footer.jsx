import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#060913] py-12 px-6 md:px-12 border-t border-white/5 relative z-10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Credits */}
        <div className="text-center md:text-left">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} • ALL RIGHTS RESERVED
          </p>
          <h3 className="text-sm font-space font-medium text-gray-300 mt-1">
            Designed & Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-semibold">Laksh Jangid</span>
          </h3>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/laksh114"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-emerald-400 transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:laksh@example.com"
            className="text-gray-500 hover:text-sky-400 transition-colors"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={handleScrollToTop}
          className="group flex items-center gap-1.5 px-3 py-2 border border-white/5 bg-white/3 hover:bg-white/5 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] text-gray-400 hover:text-emerald-400 rounded-lg text-xs font-space font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer"
          title="Scroll to top"
        >
          Top
          <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
