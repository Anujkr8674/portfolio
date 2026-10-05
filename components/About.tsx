"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiMongodb, SiGithub,
  SiPostgresql, SiSupabase, SiTailwindcss, SiNodedotjs
} from "react-icons/si";

const TITLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Web Developer",
];

function TypewriterAbout() {
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

const OUTER_ORBIT_ICONS = [
  { Icon: SiTailwindcss, color: "text-[#06B6D4]", top: "50%", left: "100%" },
  { Icon: SiReact, color: "text-[#61DAFB]", top: "93.3%", left: "75%" },
  { Icon: SiMongodb, color: "text-[#47A248]", top: "93.3%", left: "25%" },
  { Icon: SiGithub, color: "text-white", top: "50%", left: "0%" },
  { Icon: SiNextdotjs, color: "text-white", top: "6.7%", left: "25%" },
  { Icon: SiNodedotjs, color: "text-[#339933]", top: "6.7%", left: "75%" },
];

const INNER_ORBIT_ICONS = [
  { Icon: SiTypescript, color: "text-[#3178C6]", top: "85.35%", left: "85.35%" },
  { Icon: SiPostgresql, color: "text-[#336791]", top: "85.35%", left: "14.65%" },
  { Icon: SiSupabase, color: "text-[#3ECF8E]", top: "14.65%", left: "14.65%" },
  { Icon: SiJavascript, color: "text-[#F7DF1E]", top: "14.65%", left: "85.35%" },
];

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative flex min-h-screen w-full items-center justify-center bg-black text-white overflow-hidden px-4 py-8 sm:px-6 sm:py-12 md:py-20">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-[125rem] max-h-[125rem] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-[125rem] max-h-[125rem] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" style={{ animationDelay: '4s', animationDuration: '8s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 sm:gap-8 md:gap-12 mx-auto md:pt-10">

        {/* Left: Orbiting Image Graphic & Developer Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center justify-between w-full"
        >
          {/* Top: Orbit */}
          <div className="relative flex h-[350px] w-full items-center justify-center overflow-visible sm:h-[400px] md:h-auto md:min-h-[480px]">
            {/* Outer Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border border-cyan-400/20 border-dashed pointer-events-none"
            >
              {/* Outer Orbit Icons */}
              {OUTER_ORBIT_ICONS.map((item, index) => (
                <div
                  key={`outer-${index}`}
                  className="absolute w-12 h-12 md:w-14 md:h-14 bg-[#0d1525] border border-cyan-400/30 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,212,255,0.2)] hover:scale-125 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] cursor-pointer pointer-events-auto group"
                  style={{ top: item.top, left: item.left }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <item.Icon className={`text-2xl md:text-3xl ${item.color} group-hover:drop-shadow-[0_0_10px_currentColor] transition-all`} />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Inner Orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[230px] h-[230px] md:w-[320px] md:h-[320px] rounded-full border border-cyan-400/40 border-dotted pointer-events-none"
            >
              {/* Inner Orbit Icons */}
              {INNER_ORBIT_ICONS.map((item, index) => (
                <div
                  key={`inner-${index}`}
                  className="absolute w-10 h-10 md:w-12 md:h-12 bg-[#0d1525] border border-cyan-400/30 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,212,255,0.2)] hover:scale-125 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] cursor-pointer pointer-events-auto group"
                  style={{ top: item.top, left: item.left }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <item.Icon className={`text-xl md:text-2xl ${item.color} group-hover:drop-shadow-[0_0_10px_currentColor] transition-all`} />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Inner Glow */}
            <div className="absolute w-[180px] h-[180px] md:w-[230px] md:h-[230px] rounded-full shadow-[0_0_50px_rgba(0,212,255,0.2)] border border-cyan-400/40 pointer-events-none" />

            {/* Profile Image with Golden Border */}
            <div className="rounded-full overflow-hidden flex items-center justify-center bg-[#0d1525] w-[170px] h-[170px] md:w-[220px] md:h-[220px] z-10 border-4 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.3)] relative group cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)]">
              <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay z-20 group-hover:bg-yellow-500/20 transition-colors duration-500"></div>
              <img
                src="/img/anuj.png"
                alt="Profile"
                className="w-full h-full object-cover relative z-10 object-top"
              />
            </div>
          </div>

          {/* Bottom: Styled Developer Note */}
          <div className="w-full mt-12 md:mt-auto relative max-w-[380px] mx-auto md:mx-0">
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400/70"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400/70"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400/70"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400/70"></div>

            <div className="bg-[#050508]/60 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-sm text-center shadow-[0_0_15px_rgba(0,212,255,0.05)] hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.1)] transition-all duration-300">
              {/* <h4 className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-cyan-400 mb-4 uppercase">
                Developer&apos;s Note
              </h4> */}
              <p className="text-gray-300 font-mono text-[12px] sm:text-[13px] leading-relaxed mb-5 italic">
                &ldquo;I don&apos;t just write code &mdash;<br />
                I build solutions that<br />
                solve real problems.&rdquo;
              </p>
              <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 uppercase">
                Build &bull; Learn &bull; Create
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center text-center md:items-start md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2 font-space">
            {PORTFOLIO_DATA.personal.name}
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-1 text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
            <TypewriterAbout /><span className="inline-block w-0.5 h-5 bg-cyan-400 align-middle animate-pulse"></span>
          </div>

          <p className="text-gray-400 leading-relaxed mb-8 max-w-lg text-sm sm:text-base text-justify">
            I’m a Full Stack Developer with 2+ years of experience building and deploying scalable, production-ready web applications using React.js, Next.js, Node.js, Express.js, and PHP. I specialize in developing responsive frontends, robust backend APIs, database-driven applications, authentication, third-party integrations, and deployment. With a Master’s degree in Computer Applications, I combine strong technical knowledge with practical problem-solving to build reliable, high-quality digital solutions.
          </p>

          <div className="flex justify-center md:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
            <div className="flex flex-col items-center justify-center border border-white/10 rounded-xl px-3 py-2 sm:px-5 sm:py-3 bg-white/5 backdrop-blur-sm min-w-[96px] sm:min-w-[110px] cursor-default hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] group">
              <span className="text-xs text-gray-400 mb-1 group-hover:text-cyan-300 transition-colors">Experience</span>
              <span className="text-sm font-bold text-white text-center">2+ Years</span>
            </div>
            <div className="flex flex-col items-center justify-center border border-white/10 rounded-xl px-3 py-2 sm:px-5 sm:py-3 bg-white/5 backdrop-blur-sm min-w-[96px] sm:min-w-[110px] cursor-default hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] group">
              <span className="text-xs text-gray-400 mb-1 group-hover:text-cyan-300 transition-colors">Specialty</span>
              <span className="text-sm font-bold text-white text-center">Full Stack</span>
            </div>
            <div className="flex flex-col items-center justify-center border border-white/10 rounded-xl px-3 py-2 sm:px-5 sm:py-3 bg-white/5 backdrop-blur-sm min-w-[96px] sm:min-w-[110px] cursor-default hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] group">
              <span className="text-xs text-gray-400 mb-1 group-hover:text-cyan-300 transition-colors">Focus</span>
              <span className="text-sm font-bold text-white text-center">Development</span>
            </div>
          </div>

          {/* Education Block */}
          <div className="w-full max-w-lg mb-8 text-left">
            <h3 className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase mb-4">Education</h3>
            <div className="flex flex-col gap-3">
              <div className="bg-[#0a0a0f]/80 border border-gray-800/50 rounded-xl p-4 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex justify-between items-start gap-2 flex-wrap">
                  <h4 className="text-white font-semibold text-sm">MCA — Master of Computer Applications</h4>
                  <span className="text-[11px] text-cyan-400 font-mono bg-cyan-400/10 px-2 py-0.5 rounded">CGPA 9.0</span>
                </div>
                <p className="text-gray-400 text-xs mt-1.5">Dr. Shyama Prasad Mukherjee University, Ranchi</p>
                <p className="text-gray-500 text-[11px] mt-1">2021 – 2023</p>
              </div>
              <div className="bg-[#0a0a0f]/80 border border-gray-800/50 rounded-xl p-4 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex justify-between items-start gap-2 flex-wrap">
                  <h4 className="text-white font-semibold text-sm">BCA — Bachelor of Computer Applications</h4>
                  <span className="text-[11px] text-cyan-400 font-mono bg-cyan-400/10 px-2 py-0.5 rounded">CGPA 8.26</span>
                </div>
                <p className="text-gray-400 text-xs mt-1.5">Dr. Shyama Prasad Mukherjee University, Ranchi</p>
                <p className="text-gray-500 text-[11px] mt-1">2018 – 2021</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
            <a
              href="#projects"
              className="group px-5 py-2 sm:px-6 sm:py-2.5 bg-white text-black font-semibold rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <div className="relative overflow-hidden flex items-center justify-center">
                <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">View Projects</span>
                <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">View Projects</span>
                <span className="invisible">View Projects</span>
              </div>
            </a>
            <a
              href="#contact"
              className="group px-5 py-2 sm:px-6 sm:py-2.5 border border-white/30 text-white font-semibold rounded-lg cursor-pointer hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              <div className="relative overflow-hidden flex items-center justify-center">
                <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">Get in Touch</span>
                <span className="absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">Get in Touch</span>
                <span className="invisible">Get in Touch</span>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
