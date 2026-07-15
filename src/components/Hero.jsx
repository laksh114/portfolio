import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import AIOrb from './AIOrb';

const roles = [
  "Web Developer",
  "Data Science Learner",
  "AI/ML Enthusiast",
  "Tech Explorer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text details */}
        <div className="lg:col-span-7 flex flex-col items-start text-left select-none order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-emerald-300 tracking-wider">Hi, I'm Laksh Jangid 👋</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight font-space"
          >
            Turning Ideas Into<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              Digital Experiences.
            </span>
          </motion.h1>

          {/* Cycling Roles Widget */}
          <div className="h-10 sm:h-12 flex items-center mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-2xl sm:text-3xl font-space font-semibold tracking-wider text-emerald-400"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed font-sans"
          >
            I'm a B.Tech student passionate about building technology projects and learning Web Development, Data Science, Artificial Intelligence, Machine Learning, and IoT through practical experience.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 w-full mb-10"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-full font-space text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
            >
              Explore My Work
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-gray-300 hover:text-white rounded-full font-space text-sm tracking-wider uppercase transition-all duration-300"
            >
              Contact Me
            </button>

            {/* Resume Placeholder */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered! (Replace this link inside src/components/Hero.jsx)");
              }}
              className="px-6 py-3 border border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/5 text-teal-400 hover:text-white rounded-full font-space text-sm tracking-wider uppercase transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <a 
              href="https://github.com/laksh114"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            
            <a 
              href="https://linkedin.com"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-teal-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            <a 
              href="mailto:laksh@example.com"
              className="text-gray-400 hover:text-sky-400 transition-colors"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right side: 3D Data Sphere */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full aspect-square max-w-[450px]"
          >
            <AIOrb />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
