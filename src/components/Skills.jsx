import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "Python", status: "Currently Using" },
      { name: "HTML", status: "Currently Using" },
      { name: "CSS", status: "Currently Using" },
      { name: "JavaScript", status: "Currently Learning" }
    ]
  },
  {
    category: "Data & Machine Learning",
    skills: [
      { name: "Pandas", status: "Currently Using" },
      { name: "Matplotlib", status: "Currently Using" },
      { name: "Basic Data Analysis", status: "Currently Using" },
      { name: "Machine Learning Fundamentals", status: "Currently Learning" }
    ]
  },
  {
    category: "Hardware",
    skills: [
      { name: "Arduino UNO", status: "Currently Using" },
      { name: "Sensors & Basic IoT", status: "Currently Using" },
      { name: "Basic Robotics", status: "Currently Learning" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", status: "Currently Using" },
      { name: "VS Code", status: "Currently Using" },
      { name: "Jupyter Notebook", status: "Currently Using" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#060913]/40 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-10 w-[300px] h-[300px] rounded-full bg-teal-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Skills</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-xs text-gray-500 tracking-wider font-mono mt-4">
            Honest representation of technologies I use and study
          </p>
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((catGroup, groupIdx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl glow-hover-purple flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5 select-none">
                  <h3 className="text-lg font-space font-medium text-white tracking-wider">
                    {catGroup.category}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/10">
                    Category {groupIdx + 1}
                  </span>
                </div>

                {/* Sub-groups */}
                <div className="space-y-6">
                  {/* Currently Using */}
                  <div>
                    <h4 className="text-[10px] font-mono font-medium text-emerald-400 uppercase tracking-[0.15em] mb-3 select-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Currently Using
                    </h4>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {catGroup.skills
                        .filter(s => s.status === "Currently Using")
                        .map(skill => (
                          <div
                            key={skill.name}
                            className="px-3.5 py-2 rounded-xl bg-white/3 border border-white/5 flex items-center gap-2 hover:border-emerald-500/20 hover:bg-emerald-500/3 transition-all duration-300 group"
                          >
                            <span className="text-xs sm:text-sm font-space text-gray-200 group-hover:text-emerald-300 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Currently Learning */}
                  {catGroup.skills.some(s => s.status === "Currently Learning") && (
                    <div>
                      <h4 className="text-[10px] font-mono font-medium text-amber-400 uppercase tracking-[0.15em] mb-3 select-none flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        Currently Learning
                      </h4>
                      
                      <div className="flex flex-wrap gap-2.5">
                        {catGroup.skills
                          .filter(s => s.status === "Currently Learning")
                          .map(skill => (
                            <div
                              key={skill.name}
                              className="px-3.5 py-2 rounded-xl bg-white/3 border border-white/5 flex items-center gap-2 hover:border-amber-500/20 hover:bg-amber-500/3 transition-all duration-300 group"
                            >
                              <span className="text-xs sm:text-sm font-space text-gray-400 group-hover:text-amber-300 transition-colors">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-8 pt-4 border-t border-white/5 select-none flex items-center justify-between">
                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Skill Set</span>
                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Laksh Jangid</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
