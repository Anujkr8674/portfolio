"use client";

import React from "react";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand & Plan",
    subtitle: "Understanding the Requirements",
    description: "Analyze project requirements, user needs and business goals, then plan the application structure and development approach.",
    focus: "Requirements · Planning · Architecture",
  },
  {
    step: "02",
    title: "Design & Develop",
    subtitle: "Build the Application",
    description: "Develop responsive frontend interfaces and robust backend functionality with clean, maintainable and scalable code.",
    focus: "React · Next.js · Node.js · PHP",
  },
  {
    step: "03",
    title: "Integrate & Test",
    subtitle: "Connect & Validate",
    description: "Integrate APIs, databases, authentication and third-party services, followed by testing and performance checks.",
    focus: "REST APIs · PostgreSQL · MySQL · Authentication",
  },
  {
    step: "04",
    title: "Deploy & Maintain",
    subtitle: "Go Live & Improve",
    description: "Deploy applications to production, monitor functionality, fix issues and continuously maintain and improve the application.",
    focus: "Vercel · Hostinger · cPanel · VPS",
  }
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#050505] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Background Separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-cyan-500 text-xs tracking-[4px] uppercase mb-3 block font-semibold">How I Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 font-space tracking-tight">Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Process</span></h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            From understanding requirements to deploying and maintaining production-ready applications.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto mt-10 md:mt-20">
          
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-800/80 md:-translate-x-1/2 z-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Animated glowing particle on the line */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[100px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="flex flex-col gap-6 md:gap-0">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 1; 
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex w-full group py-4 md:py-10 flex-col md:items-center ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  
                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a0a0f] border border-gray-800 group-hover:border-cyan-500/50 flex items-center justify-center relative transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                      <span className="text-lg md:text-xl font-black text-cyan-400 font-space">{step.step}</span>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-md transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content Card Container */}
                  <div className={`w-full md:w-1/2 pl-20 pr-4 md:px-0 z-10 ${
                    isEven ? "md:pl-12 md:pr-0" : "md:pr-12 md:pl-0"
                  }`}>
                    <div className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:bg-cyan-900/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:-translate-y-1 text-left w-full group/card relative overflow-hidden">
                      
                      {/* Subtle hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <h3 className="text-lg font-bold text-white mb-2 font-space group-hover/card:text-cyan-300 transition-colors duration-300 relative z-10">
                        <span className="text-cyan-500 mr-2">—</span>
                        {step.title}
                      </h3>
                      
                      <h4 className="text-xs font-semibold text-gray-400 mb-4 tracking-widest uppercase relative z-10">
                        {step.subtitle}
                      </h4>
                      
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-6 group-hover/card:text-gray-300 transition-colors duration-300 relative z-10">
                        {step.description}
                      </p>

                      {/* Focus Line */}
                      <div className="mt-auto border-t border-gray-800/50 group-hover/card:border-cyan-900/50 pt-4 w-full transition-colors duration-300 relative z-10">
                        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] text-indigo-400 group-hover/card:text-cyan-400 uppercase leading-relaxed transition-colors duration-300">
                          <span className="text-gray-500 group-hover/card:text-gray-400 mr-1 block sm:inline mb-1 sm:mb-0 transition-colors duration-300">Focus:</span>
                          {step.focus}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Empty Half (for centering on desktop) */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
