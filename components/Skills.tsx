"use client";

import React, { useState, useRef, useEffect } from "react";
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

const SkillCard = ({ skill, desc, colorClass, Icon }: any) => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mx-2 sm:mx-3 md:mx-4 flex-shrink-0" style={{ perspective: "1000px" }}>
      <motion.div
        tabIndex={0}
        onHoverStart={() => { setIsHovered(true); setRotation(360); }}
        onHoverEnd={() => { setIsHovered(false); setRotation(0); }}
        onTap={() => setRotation(r => r === 0 ? 360 : 0)}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-[140px] h-[140px] md:w-[170px] md:h-[170px] cursor-pointer z-20 group"
      >
        <motion.div
          animate={{ rotateY: rotation }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className={`absolute inset-0 flex flex-col items-center justify-center p-4 md:p-5 border border-gray-800/80 bg-[#0a0a0f] rounded-2xl transition-[border-color,box-shadow,background-color] duration-500 overflow-hidden ${isHovered ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]' : ''}`}
        >
          {/* Subtle hover background gradient like Services */}
          <div className={`absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

          <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gray-900/80 rounded-full mb-3 md:mb-4 border border-gray-800 transition-all duration-500 ${isHovered ? 'scale-110 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.4)] border-cyan-400/30' : ''}`}>
            <Icon className={`text-2xl md:text-3xl ${colorClass}`} />
          </div>

          <h3 className={`relative z-10 text-[13px] md:text-[15px] font-bold text-center leading-tight mb-1 transition-colors duration-300 font-space ${isHovered ? 'text-cyan-300' : 'text-white'}`}>
            {skill.name}
          </h3>
          <span className={`relative z-10 text-[10px] md:text-xs font-medium text-center leading-snug transition-colors duration-300 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`}>
            {desc}
          </span>
          
          {/* Animated bottom border line on hover like Services */}
          <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
        </motion.div>
      </motion.div>
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let lastTime = performance.now();
    let accumulator = 0;
    const velocity = reverse ? -0.7 : 0.7; // pixels per frame

    // Pre-scroll to middle if reverse so we don't immediately hit 0
    if (reverse) el.scrollLeft = el.scrollWidth / 2;

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused && el) {
        accumulator += velocity * (delta / 16); 
        
        if (Math.abs(accumulator) >= 1) {
          el.scrollLeft += Math.trunc(accumulator);
          accumulator -= Math.trunc(accumulator);
        }

        const halfWidth = el.scrollWidth / 2;
        if (!reverse && el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else if (reverse && el.scrollLeft <= 0) {
          el.scrollLeft += halfWidth;
        }
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, reverse]);

  return (
    <div 
      className="flex w-full relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Gradient Fades for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none"></div>

      {/* Auto/Manual Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex w-full overflow-x-auto py-8 px-4 sm:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          ::-webkit-scrollbar { display: none; }
        `}} />
        <div className="flex w-max min-w-full">
          {[...items, ...items].map((skill, index) => {
            const Icon = iconMap[skill.name] || SiJavascript;
            const colorClass = colorMap[skill.name] || "text-cyan-400";
            const desc = descMap[skill.name] || `${skill.level}% Mastery`;

            return (
              <SkillCard 
                key={`${skill.name}-${index}`} 
                skill={skill} 
                desc={desc} 
                colorClass={colorClass} 
                Icon={Icon} 
              />
            );
          })}
        </div>
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
