"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative flex min-h-screen w-full items-center justify-center bg-black text-white overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Blinking / Flicker Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -top-32 -left-32 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-[125rem] max-h-[125rem] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-[125rem] max-h-[125rem] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" 
          style={{ animationDelay: '4s', animationDuration: '8s' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Header section */}
        <div className="text-center mb-16 px-6">
          <span className="text-indigo-500 text-xs tracking-[4px] uppercase mb-3 block font-semibold">What I Do</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 font-space tracking-tight">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Expertise</span></h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Building modern, responsive and production-ready web applications from frontend to backend.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 max-w-5xl mx-auto">
          {PORTFOLIO_DATA.services.map((service, index) => {
            const techStack = (service as any).techStack;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0f] border border-gray-800/80 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 flex flex-col items-start text-left overflow-hidden cursor-pointer hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              {/* Subtle hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center justify-between w-full mb-6 relative z-10">
                <div className="text-4xl font-black text-gray-800/50 group-hover:text-cyan-900/50 transition-colors duration-500 font-space">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-900/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-500 border border-gray-800 group-hover:border-cyan-400/30">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-space relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                <span className="text-cyan-500 mr-2">—</span>
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-6 flex-grow">
                {service.description}
              </p>
              
              {techStack && (
                <div className="mt-auto relative z-10 border-t border-gray-800/50 pt-4 w-full">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-indigo-400 uppercase leading-loose">
                    {techStack}
                  </p>
                </div>
              )}
              
              {/* Animated bottom border line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
