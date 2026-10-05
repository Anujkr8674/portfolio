"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

const TITLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Web Developer",
  "Software Engineer"
];

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.117.551 4.17 1.6 6L.103 24l6.113-1.603c1.787 1.002 3.791 1.53 5.815 1.53 6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm3.626 17.202c-.156.44-3.535 2.187-3.906 2.25-.371.063-2.313.25-5.36-2.796-3.047-3.047-2.859-4.984-2.796-5.36.062-.371 1.81-3.75 2.25-3.906.44-.156 1.453.64 1.766 1.156.312.516.484.78.187 1.25-.297.47-.64.734-.843 1.016-.203.28-.438.593-.156 1.078.28.484 1.25 2.062 2.687 3.344 1.437 1.28 2.875 1.671 3.344 1.89.47.22 1.015.016 1.265-.281.25-.297.875-1.047 1.125-1.422.25-.375.766-.344 1.188-.187.422.156 2.703 1.28 3.125 1.484.422.204.703.313.813.484.11.172.11.89-.047 1.33z"/>
  </svg>
);

function Typewriter() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % TITLES.length;
      const fullText = TITLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return <span>{text}</span>;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Transition WhatsApp button when scrolled down half the viewport height
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate deterministic stars to avoid hydration mismatch, or just use static positions if possible.
  // We'll generate an array of fixed values based on index to keep it deterministic.
  const renderStars = () => {
    return Array.from({ length: 120 }).map((_, i) => {
      const top = ((i * 17) % 100);
      const left = ((i * 23) % 100);
      const size = (i % 3) + 1.5;
      const duration = (i % 5) + 5;
      const delay = (i % 4);

      return (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            width: size,
            height: size,
            top: `${top}%`,
            left: `${left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.9, 0.1]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        />
      );
    });
  };

  return (
    <>
    <section id="home" className="w-full min-h-screen bg-black overflow-hidden relative flex items-center">
      {/* Background Blurs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-[125rem] max-h-[125rem] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-[125rem] max-h-[125rem] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" style={{ animationDelay: '4s', animationDuration: '8s' }}></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && renderStars()}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 pt-28 pb-10">
        <div className="flex flex-col justify-center text-left relative lg:pr-8 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[2.5rem] flex items-center"
          >
            {mounted && <Typewriter />}
            <span className="inline-block w-0.5 h-7 ml-1 bg-white animate-pulse"></span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
          >
            Hello, I'm
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white relative top-2 font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl lg:whitespace-nowrap font-space"
          >
            {PORTFOLIO_DATA.personal.name}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl lg:mx-0 leading-relaxed font-manrope text-justify"
          >
           Crafting modern web experiences where thoughtful design meets powerful technology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-start gap-5"
          >
            <a href="#projects" className="group relative px-6 py-2.5 rounded-full font-bold text-base text-white shadow-lg cursor-pointer bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-shadow">
               <div className="relative overflow-hidden flex items-center justify-center">
                 <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">View My Work</span>
                 <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">View My Work</span>
                 <span className="invisible">View My Work</span>
               </div>
            </a>
            <a href="/resume.pdf" className="group relative px-6 py-2.5 rounded-full font-bold text-base text-black bg-white shadow-lg cursor-pointer hover:bg-gray-100 transition-colors">
               <div className="relative overflow-hidden flex items-center justify-center">
                 <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">My Resume</span>
                 <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">My Resume</span>
                 <span className="invisible">My Resume</span>
               </div>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex gap-4 justify-start"
          >
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/25 transition-colors duration-200 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/25 transition-colors duration-200 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/25 transition-colors duration-200 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </motion.div>
        </div>
        
        {/* Right side Robot image */}
        <div className="relative hidden lg:flex items-center justify-center h-full group -mt-20">
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-[450px] flex items-center justify-center overflow-visible"
          >
            {/* Glow effect behind robot */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-[80px] rounded-full group-hover:bg-cyan-400/30 transition-colors duration-700"></div>
            
            <img 
              src="/img/robot.png" 
              alt="Robot 3D Mascot"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_25px_rgba(0,212,255,0.4)] group-hover:drop-shadow-[0_0_50px_rgba(0,212,255,0.8)] transition-all duration-700 ease-out group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Floating WhatsApp Button */}
    {mounted && (
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ 
          opacity: { duration: 0.5 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        href="https://wa.me/918674823125?text=Hello%20Anuj"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-shadow cursor-pointer"
      >
        <WhatsAppIcon size={28} />
      </motion.a>
    )}
    </>
  );
}
