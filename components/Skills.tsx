"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  SiHtml5, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiMongodb, SiMysql, SiJsonwebtokens,
  SiPostgresql, SiSupabase, SiVercel
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaRobot, FaBrain, FaServer, FaCloud } from "react-icons/fa";

const iconMap: Record<string, any> = {
  "HTML5 & CSS3": SiHtml5,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "PHP": SiPhp,
  "Laravel": SiLaravel,
  "REST APIs": TbApi,
  "JWT": SiJsonwebtokens,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "Claude Code": FaRobot,
  "ChatGPT": FaRobot,
  "Anthropic": FaBrain,
  "Perplexity AI": FaRobot,
  "Hostinger": FaCloud,
  "cPanel": FaServer,
  "Vercel": SiVercel,
  "VPS": FaServer,
};

const colorMap: Record<string, string> = {
  "HTML5 & CSS3": "text-orange-500",
  "JavaScript": "text-[#F7DF1E]",
  "TypeScript": "text-[#3178C6]",
  "React.js": "text-[#61DAFB]",
  "Next.js": "text-white",
  "Tailwind CSS": "text-[#06B6D4]",
  "Node.js": "text-[#339933]",
  "Express.js": "text-gray-300",
  "PHP": "text-[#777BB4]",
  "Laravel": "text-[#FF2D20]",
  "REST APIs": "text-blue-400",
  "JWT": "text-pink-500",
  "MongoDB": "text-[#47A248]",
  "MySQL": "text-[#4479A1]",
  "PostgreSQL": "text-[#336791]",
  "Supabase": "text-[#3ECF8E]",
  "Claude Code": "text-purple-400",
  "ChatGPT": "text-[#10a37f]",
  "Anthropic": "text-orange-400",
  "Perplexity AI": "text-indigo-400",
  "Hostinger": "text-purple-500",
  "cPanel": "text-orange-500",
  "Vercel": "text-white",
  "VPS": "text-blue-300",
};

const descMap: Record<string, string> = {
  "HTML5 & CSS3": "Web Structure",
  "JavaScript": "ES6+ Modern Syntax",
  "TypeScript": "Typed JavaScript",
  "React.js": "UI Component Library",
  "Next.js": "React Framework",
  "Tailwind CSS": "Utility First CSS",
  "Node.js": "Server-Side Runtime",
  "Express.js": "Backend Framework",
  "PHP": "Server Scripting",
  "Laravel": "PHP Framework",
  "REST APIs": "API Development",
  "JWT": "Auth & Security",
  "MongoDB": "NoSQL Database",
  "MySQL": "Relational Database",
  "PostgreSQL": "Relational DB",
  "Supabase": "Firebase Alternative",
  "Claude Code": "AI Code Gen",
  "ChatGPT": "LLM Assistant",
  "Anthropic": "Claude AI",
  "Perplexity AI": "Search Engine AI",
  "Hostinger": "Web Hosting",
  "cPanel": "Control Panel",
  "Vercel": "Edge Network",
  "VPS": "Virtual Server",
};

const MarqueeRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
  return (
    <div className="flex w-full overflow-hidden pause-on-hover py-4 relative">
      {/* Gradient Fades for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none"></div>

      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map((skill, index) => {
          const Icon = iconMap[skill.name] || SiJavascript;
          const colorClass = colorMap[skill.name] || "text-cyan-400";
          const desc = descMap[skill.name] || `${skill.level}% Mastery`;

          return (
            <div key={`${skill.name}-${index}`} className="mx-3 md:mx-4 flex-shrink-0" style={{ perspective: "1000px" }}>
              {/* Static wrapper catches hover and handles scaling */}
              <motion.div
                whileHover="hover"
                variants={{ hover: { scale: 1.1 } }}
                transition={{ duration: 0.3 }}
                className="relative w-[150px] h-[150px] md:w-[170px] md:h-[170px] group cursor-default z-20"
              >
                {/* Inner card handles only the 3D rotation */}
                <motion.div
                  variants={{ hover: { rotateY: 360 } }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-5 border border-white/5 bg-[#0e0e13] rounded-3xl group-hover:bg-[#15151e] group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/60 rounded-2xl mb-4 group-hover:-translate-y-1 transition-transform duration-300 shadow-inner">
                    <Icon className={`text-3xl md:text-4xl ${colorClass}`} />
                  </div>

                  <h3 className="text-white text-[14px] md:text-[15px] font-bold text-center leading-tight mb-1 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-gray-500 text-[11px] md:text-xs font-medium text-center leading-snug group-hover:text-gray-400 transition-colors duration-300">
                    {desc}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Skills() {
  // @ts-ignore
  const aiSkills = PORTFOLIO_DATA.skills.ai || [];
  // @ts-ignore
  const hostingSkills = PORTFOLIO_DATA.skills.hosting || [];
  const allSkills = PORTFOLIO_DATA.skills.frontend.concat(PORTFOLIO_DATA.skills.backend, PORTFOLIO_DATA.skills.database);

  // Split regular skills into two balanced rows
  const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section id="skills" className="w-full bg-[#0a0a0f] py-24 overflow-hidden relative">
      <div className="max-w-[100vw] mx-auto">
        <div className="text-center mb-16 px-6 relative z-10">
          <span className="text-indigo-500 text-xs tracking-[4px] uppercase mb-3 block font-semibold">What I Work With</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 font-space tracking-tight">Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Technologies</span></h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            A curated set of tools I use to build modern, scalable, and performant web applications
          </p>
        </div>

        {/* Web Development Section */}
        <div className="flex flex-col gap-6 md:gap-8 mt-10 w-full relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-center text-cyan-400 mb-2 font-space tracking-wider uppercase text-opacity-80">Web Development</h3>
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse={true} />
        </div>

        {/* Server Management & Hosting Section */}
        {hostingSkills.length > 0 && (
          <div className="flex flex-col gap-6 md:gap-8 mt-16 w-full relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-center text-indigo-400 mb-2 font-space tracking-wider uppercase text-opacity-80">Hosting & Deployment</h3>
            <MarqueeRow items={[...hostingSkills, ...hostingSkills]} />
          </div>
        )}

        {/* AI Automation Section */}
        {aiSkills.length > 0 && (
          <div className="flex flex-col gap-6 md:gap-8 mt-16 w-full relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-center text-purple-400 mb-2 font-space tracking-wider uppercase text-opacity-80">AI Automation</h3>
            <MarqueeRow items={[...aiSkills, ...aiSkills]} reverse={true} />
          </div>
        )}

        {/* Stats banner from reference */}
        <div className="mt-28 flex justify-between sm:justify-center gap-x-2 sm:gap-x-12 md:gap-x-16 px-4 sm:px-6 relative z-10 w-full max-w-4xl mx-auto">
          <div className="text-center flex-1 sm:flex-none">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">2+</h4>
            <p className="text-white/40 text-[9px] sm:text-sm md:text-base mt-1 sm:mt-2 uppercase tracking-widest font-semibold leading-tight">Years<br className="sm:hidden" /> Experience</p>
          </div>
          <div className="text-center flex-1 sm:flex-none">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">15+</h4>
            <p className="text-white/40 text-[9px] sm:text-sm md:text-base mt-1 sm:mt-2 uppercase tracking-widest font-semibold leading-tight">Projects<br className="sm:hidden" /> Built</p>
          </div>
          <div className="text-center flex-1 sm:flex-none">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{allSkills.length + aiSkills.length + hostingSkills.length}+</h4>
            <p className="text-white/40 text-[9px] sm:text-sm md:text-base mt-1 sm:mt-2 uppercase tracking-widest font-semibold leading-tight">Technologies</p>
          </div>
        </div>

      </div>
    </section>
  );
}
