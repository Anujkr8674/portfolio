"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.slice(0, 4);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur(); // Remove focus to stop browser scroll anchoring
    
    if (showAll) {
      // When shrinking, smooth scroll up to the 4th project first
      const fourthProject = document.getElementById("project-3");
      if (fourthProject) {
        const y = fourthProject.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
        
        // Wait for the smooth scroll to finish before actually removing the projects
        setTimeout(() => {
          setShowAll(false);
        }, 600); // 600ms allows the browser smooth scroll to mostly finish
      } else {
        setShowAll(false);
      }
    } else {
      // When expanding, firmly lock the scroll position
      const currentScrollY = window.scrollY;
      setShowAll(true);
      
      requestAnimationFrame(() => {
        window.scrollTo(0, currentScrollY);
      });
      setTimeout(() => {
        window.scrollTo(0, currentScrollY);
      }, 0);
    }
  };

  return (
    <section id="projects" className="relative w-full min-h-screen bg-[#050508] py-20 px-4 md:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-900/10 blur-[120px]"></div>
        <div className="absolute -right-[10%] top-2/3 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-indigo-900/10 blur-[100px]"></div>
      </div>
      
      <div className="text-center mb-14 relative z-10">
        <span className="text-[11px] font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">PORTFOLIO</span>
        <h2 className="text-5xl md:text-6xl font-black text-white font-space">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Works</span></h2>
        <p className="mt-3 text-white/40 text-base max-w-xl mx-auto">
          A selection of projects that showcase my passion for building scalable, interactive applications.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24 [overflow-anchor:none]">
        {displayedProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={index}
              id={`project-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 min-h-[450px]`}
            >
              {/* Image Side */}
              <div className="relative w-full lg:w-[58%] aspect-[16/9] lg:aspect-[16/10] max-h-[560px] shrink-0 group rounded-2xl overflow-hidden border border-white/10 bg-[#07070a]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[45%] flex flex-col gap-5">
                <span className="text-[11px] font-semibold tracking-widest text-white/30 uppercase">
                  0{index + 1} / 0{PORTFOLIO_DATA.projects.length}
                </span>
                
                <h3 className="text-4xl md:text-5xl font-black text-white leading-none font-space">
                  {project.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-[11px] font-semibold tracking-widest text-white/30 uppercase mb-1">Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-white/70 border border-white/10 bg-white/5 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 flex-wrap mt-4">
                  <a 
                    href={project.liveUrl} 
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black bg-white hover:scale-105 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    <div className="relative overflow-hidden flex items-center justify-center">
                      <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">Live Preview</span>
                      <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">Live Preview</span>
                      <span className="invisible">Live Preview</span>
                    </div>
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <div className="relative overflow-hidden flex items-center justify-center">
                      <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">Source Code</span>
                      <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">Source Code</span>
                      <span className="invisible">Source Code</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {PORTFOLIO_DATA.projects.length > 4 && (
        <div className="flex justify-center mt-20 relative z-10 [overflow-anchor:none]">
          <button 
            onClick={handleToggle}
            className="group flex items-center justify-center px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-105 transition-all duration-300"
          >
            <div className="relative overflow-hidden flex items-center justify-center">
              <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">
                {showAll ? "Show Less" : "View All Projects"}
              </span>
              <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">
                {showAll ? "Show Less" : "View All Projects"}
              </span>
              <span className="invisible">
                {showAll ? "Show Less" : "View All Projects"}
              </span>
            </div>
          </button>
        </div>
      )}
    </section>
  );
}
