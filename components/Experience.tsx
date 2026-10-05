"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#050508] py-24 px-4 md:px-10 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-cyan-900/10 blur-[150px]"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-widest text-cyan-400 uppercase mb-3 block">MY EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-space">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Experience</span></h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Building and deploying production-ready web applications for real-world use cases.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 md:p-12 group hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] overflow-hidden"
        >
          {/* Subtle hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-space group-hover:text-cyan-300 transition-colors duration-300">
                  Full Stack Developer
                </h3>
                <h4 className="text-lg font-medium text-gray-300">
                  Eveda Online Services
                </h4>
              </div>
              <div className="inline-flex items-center">
                <span className="text-cyan-400 font-mono text-sm bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  Dec 2023 – Present
                </span>
              </div>
            </div>



            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Developed and deployed responsive web applications using React.js, Next.js, Node.js, Express.js and PHP.",
                "Built REST APIs, authentication systems, database integrations and third-party API integrations.",
                "Managed MySQL and PostgreSQL databases for production applications.",
                "Integrated payment, maps, SMS, authentication and ERP APIs.",
                "Deployed and maintained applications using Vercel, Hostinger, cPanel and VPS."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm md:text-base leading-relaxed group/item">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/item:bg-cyan-500 shrink-0 transition-colors duration-300 group-hover/item:shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  <span className="group-hover/item:text-gray-300 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-gray-800/50">
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Node.js", "Express.js", "PHP", "REST APIs", "MySQL", "PostgreSQL"].map((tech, i) => (
                  <span key={i} className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-cyan-900/20 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
