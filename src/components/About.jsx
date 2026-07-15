import React from 'react';
import { Code2, BarChart2, Cpu, Globe, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const highlightCards = [
  {
    icon: <Globe className="text-emerald-400" size={24} />,
    title: "Web Development",
    desc: "Building clean front-end portals and interfaces using HTML, CSS, JavaScript, and React.",
    color: "cyan"
  },
  {
    icon: <BarChart2 className="text-teal-400" size={24} />,
    title: "Data Science Learner",
    desc: "Analyzing datasets, performing EDA, and extracting insights using Python, Pandas, and Matplotlib.",
    color: "purple"
  },
  {
    icon: <Code2 className="text-sky-400" size={24} />,
    title: "AI/ML Explorer",
    desc: "Learning regression, classification algorithms, and applying fundamental machine learning pipelines.",
    color: "blue"
  },
  {
    icon: <Cpu className="text-amber-400" size={24} />,
    title: "Arduino & IoT Projects",
    desc: "Integrating microcontrollers, sonar radar sweeps, and Bluetooth modules into small robotic builds.",
    color: "orange"
  },
  {
    icon: <Briefcase className="text-emerald-400" size={24} />,
    title: "Open to Opportunities",
    desc: "Actively seeking web development, IoT, or data analysis internships and hackathon teams.",
    color: "emerald"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#060913]/60 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-emerald-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Me</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Box */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <h3 className="text-xl font-space font-semibold text-gray-200 mb-4 tracking-wider">
              A Passion For Practical Creation
            </h3>
            
            <p className="text-gray-400 leading-relaxed font-sans mb-6">
              I am a B.Tech student interested in technology, programming, and building real-world projects. I enjoy learning by creating practical applications in Web Development, Data Science, AI/ML, and Arduino-based systems.
            </p>

            <p className="text-gray-400 leading-relaxed font-sans">
              My goal is to continuously improve my technical skills and use technology to solve useful real-world problems. I believe the best way to master a skill is to construct something tangible out of it.
            </p>

            {/* Micro stats banner */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5 font-space">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-emerald-400">B.Tech</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Pursuing Degree</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-teal-400">10+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Created Projects</p>
              </div>
            </div>
          </div>

          {/* Right Highlight Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlightCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glassmorphism p-6 rounded-2xl transition-all duration-300 ${
                  i === 4 ? 'md:col-span-2' : ''
                } ${
                  card.color === 'cyan' ? 'glow-hover-cyan' :
                  card.color === 'purple' ? 'glow-hover-purple' :
                  card.color === 'blue' ? 'hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] hover:border-sky-500/40' :
                  card.color === 'orange' ? 'hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:border-amber-500/40' :
                  'hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:border-emerald-500/40'
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Highlight</span>
                </div>
                <h4 className="text-base font-space font-medium text-white mb-2 tracking-wide">{card.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
