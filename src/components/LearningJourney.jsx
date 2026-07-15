import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, Sparkles, BookOpen, Compass, TrendingUp, Cpu } from 'lucide-react';

// Learning Journey Milestones checklist
const milestones = [
  {
    icon: <BookOpen className="text-emerald-400" size={18} />,
    title: "Started Programming",
    date: "2023",
    description: "Learned basic programming paradigms, variables, loops, control structures, and written first scripts in C++.",
    color: "emerald"
  },
  {
    icon: <Compass className="text-teal-400" size={18} />,
    title: "Web Development Basics",
    date: "Early 2024",
    description: "Studied HTML5 structure, CSS3 grid layouts, Flexbox styling, and core JavaScript DOM manipulation.",
    color: "teal"
  },
  {
    icon: <Milestone className="text-emerald-500" size={18} />,
    title: "Started Python",
    date: "Mid 2024",
    description: "Expanded programming abilities with Python, mastering lists, dictionaries, script imports, and OOP paradigms.",
    color: "green"
  },
  {
    icon: <TrendingUp className="text-teal-400" size={18} />,
    title: "Started Data Science",
    date: "Late 2024",
    description: "Learned to handle tables with Pandas, clean missing data rows, and create plots using Matplotlib.",
    color: "mint"
  },
  {
    icon: <Cpu className="text-emerald-400" size={18} />,
    title: "Exploring Machine Learning",
    date: "Early 2025",
    description: "Studying Scikit-Learn pipelines, regression models, classification splits, and basic clustering algorithms.",
    color: "emerald"
  },
  {
    icon: <Sparkles className="text-teal-500" size={18} />,
    title: "Building Real-World Projects",
    date: "Present",
    description: "Developing custom React websites, integrating IoT hardware circuits, and building practical data analysis repositories.",
    color: "teal"
  }
];

export default function LearningJourney() {
  const getBorderColor = (color) => {
    switch (color) {
      case 'emerald': return 'border-emerald-400';
      case 'teal': return 'border-teal-400';
      case 'green': return 'border-green-400';
      case 'mint': return 'border-teal-300';
      default: return 'border-emerald-500';
    }
  };

  const getBgColor = (color) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-400';
      case 'teal': return 'bg-teal-400';
      case 'green': return 'bg-green-400';
      case 'mint': return 'bg-teal-300';
      default: return 'bg-emerald-500';
    }
  };

  return (
    <section id="learning-journey" className="py-20 bg-[#060913]/40 relative overflow-hidden border-t border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Journey</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-xs text-gray-500 tracking-wider font-mono mt-4">
            The roadmap of how I acquired programming, hardware, and analytical capabilities
          </p>
        </div>

        {/* Journey Grid */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Vertical central bar */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent -translate-x-[1px]" />

          <div className="space-y-12">
            {milestones.map((stone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={stone.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } items-start md:items-center`}
                >
                  {/* Circle light bulb on timeline node */}
                  <div className="absolute left-[24px] md:left-1/2 top-1.5 md:top-1/2 -translate-x-[9px] md:-translate-y-[8px] z-20 select-none">
                    <div className={`w-4 h-4 rounded-full bg-[#060913] border-2 flex items-center justify-center ${getBorderColor(stone.color)}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${getBgColor(stone.color)}`} />
                    </div>
                  </div>

                  {/* Empty spacer column */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Journey details Card */}
                  <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                    <div className="glassmorphism p-6 rounded-2xl hover:bg-white/4 transition-colors text-left relative flex items-start gap-4">
                      {/* Left icon bubble */}
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 shrink-0 select-none">
                        {stone.icon}
                      </div>

                      {/* Right Text */}
                      <div className="flex-grow">
                        <div className="flex items-center justify-between gap-2 mb-2 select-none">
                          <span className="text-[10px] font-mono text-emerald-400 font-medium tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/15">
                            {stone.date}
                          </span>
                          <span className="text-[9px] font-mono text-gray-600 uppercase tracking-wider">Milestone {index + 1}</span>
                        </div>
                        
                        <h3 className="text-base font-space font-semibold text-white mb-2">
                          {stone.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                          {stone.description}
                        </p>
                      </div>
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
