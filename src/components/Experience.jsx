import React from 'react';
import { Calendar, Briefcase, ChevronRight, Code } from 'lucide-react';
import { motion } from 'framer-motion';

// Experience Data Checklist.
const experienceData = [
  {
    role: "Freelance Web Developer & Project Builder",
    company: "Self-Employed / Freelance",
    duration: "2025 - Present",
    description: [
      "Designed and coded custom client portals and responsive business landing pages.",
      "Optimized site assets and CSS structures, reducing page load times by up to 25%.",
      "Collaborated with clients to translate designs and product layouts into functional React elements."
    ],
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git"],
    projectsCompleted: ["Cafe Order Management", "Smart Task Tracker"]
  },
  {
    role: "Independent IoT & Hardware Hobbyist",
    company: "Academic Projects & Labs",
    duration: "2024 - 2025",
    description: [
      "Engineered Arduino-based sonar tracking sweep systems and customized motor controls.",
      "Configured Bluetooth transceivers to pass coordinates wirelessly between microcontrollers and smartphones.",
      "Debugged electronic logic gates and wired circuit boards for four-wheel robot models."
    ],
    technologies: ["Arduino UNO", "C++ (IDE)", "HC-05 Bluetooth", "Ultrasonic Sensors", "PWM Signals"],
    projectsCompleted: ["Arduino Radar System", "Bluetooth Control Car"]
  },
  {
    role: "B.Tech Student & Coding Learner",
    company: "Engineering University",
    duration: "2023 - Present",
    description: [
      "Studying engineering fundamentals, object-oriented concepts, and basic data structures.",
      "Completed practical lab coursework for Python programming and exploratory database queries.",
      "Participated in regional university hackathons and internal programming workshops."
    ],
    technologies: ["Python", "SQL", "C++", "Jupyter Notebook", "Data Structures"],
    projectsCompleted: ["Data Cleaning Visualizer", "Predictive ML Model"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#060913]/60 relative overflow-hidden border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute left-1/4 top-1/3 w-[300px] h-[300px] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Experience</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-xs text-gray-500 tracking-wider font-mono mt-4">
            A chronological timeline of my internships, freelance builds, and engineering labs
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Vertical central bar */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent -translate-x-[1px]" />

          {/* Timeline Cards */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } items-start md:items-center`}
                >
                  {/* Timeline Glowing Node Dot */}
                  <div className="absolute left-[24px] md:left-1/2 top-1.5 md:top-1/2 -translate-x-[9px] md:-translate-y-[8px] z-20 select-none">
                    <div className="w-4 h-4 rounded-full bg-[#060913] border-2 border-emerald-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Empty spacer block to balance the columns on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Timeline Description Card Box */}
                  <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                    <div className="glassmorphism p-6 rounded-2xl glow-hover-purple text-left relative">
                      {/* Subtitle / Timeline Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        
                        <span className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                          <Briefcase size={12} />
                          {exp.company}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-lg font-space font-semibold text-white mb-3">
                        {exp.role}
                      </h3>

                      {/* List Description Bullet Points */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                            <ChevronRight size={14} className="text-teal-400 shrink-0 mt-0.5" />
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {/* Tech badges used in position */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.technologies.map(t => (
                          <span key={t} className="text-[9px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Projects completed in this position */}
                      {exp.projectsCompleted.length > 0 && (
                        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                          <span className="text-[9px] font-mono font-medium text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                            <Code size={10} /> Key Builds:
                          </span>
                          {exp.projectsCompleted.map(p => (
                            <span key={p} className="text-[9px] font-space text-gray-300 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
