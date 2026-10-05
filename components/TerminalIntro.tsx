"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

const TypewriterText = ({ text, delay, onComplete, speed = 30 }: { text: string, delay: number, onComplete?: () => void, speed?: number }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTimeout = setTimeout(() => {
      let charIndex = 0;
      
      const type = () => {
        if (charIndex <= text.length) {
          setDisplayText(text.slice(0, charIndex));
          charIndex++;
          timeoutId = setTimeout(type, speed);
        } else {
          if (onComplete) onComplete();
        }
      };
      
      type();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, delay, speed, onComplete]);

  return <span>{displayText}</span>;
};

export default function TerminalIntro() {
  const [showOverlay, setShowOverlay] = useState(true);
  
  // Animation states
  const [showTerm, setShowTerm] = useState(false);
  
  const [cmd1, setCmd1] = useState(false);
  const [out1, setOut1] = useState(false);
  
  const [cmd2, setCmd2] = useState(false);
  const [out2, setOut2] = useState(false);
  
  const [cmd3, setCmd3] = useState(false);
  const [out3, setOut3] = useState(false);
  
  const [cmd4, setCmd4] = useState(false);
  const [out4, setOut4] = useState(false);
  
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Lock scroll
    document.body.style.overflow = "hidden";

    if (prefersReduced) {
      // Instant display for accessibility
      setShowTerm(true);
      setCmd1(true); setOut1(true);
      setCmd2(true); setOut2(true);
      setCmd3(true); setOut3(true);
      setCmd4(true); setOut4(true);
      
      setTimeout(() => setExit(true), 1500);
      setTimeout(() => {
        setShowOverlay(false);
        document.body.style.overflow = "";
      }, 2000);
      return;
    }

    // Timings - Slowed down for readability
    const t1 = setTimeout(() => setShowTerm(true), 200);
    const t2 = setTimeout(() => setCmd1(true), 500);
    const t3 = setTimeout(() => setOut1(true), 1100);
    
    const t4 = setTimeout(() => setCmd2(true), 1600);
    const t5 = setTimeout(() => setOut2(true), 2200);
    
    const t6 = setTimeout(() => setCmd3(true), 2700);
    const t7 = setTimeout(() => setOut3(true), 3300);
    
    const t8 = setTimeout(() => setCmd4(true), 3800);
    const t9 = setTimeout(() => setOut4(true), 4200);
    
    // Give user time to read the final "✓ Portfolio ready"
    const t10 = setTimeout(() => setExit(true), 5200);
    const t11 = setTimeout(() => {
      setShowOverlay(false);
      document.body.style.overflow = "";
    }, 5700);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); clearTimeout(t8);
      clearTimeout(t9); clearTimeout(t10); clearTimeout(t11);
      document.body.style.overflow = "";
    };
  }, []);

  if (!showOverlay) return null;

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050508]"
        >
          {showTerm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-[calc(100vw-32px)] md:w-[650px] lg:w-[750px] max-w-[calc(100vw-64px)] shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1a1a2e] rounded-t-xl border border-white/10 border-b-0 shadow-lg">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-3 text-white/20 text-xs font-mono tracking-wider">bash -- portfolio</div>
              </div>
              
              {/* Terminal Body */}
              <div className="relative px-5 py-4 md:py-5 font-mono text-sm md:text-base leading-relaxed rounded-b-xl border border-white/10 bg-[#0a0a0f] shadow-2xl">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-b-xl bg-white"></div>
                
                <div className="flex flex-col gap-3 md:gap-4 relative z-10 text-gray-300">
                  
                  {/* Block 1: whoami */}
                  {cmd1 && (
                    <div>
                      <p>
                        <span className="text-green-400">anuj@portfolio</span>:<span className="text-blue-400">~</span>$ <TypewriterText text="whoami" delay={0} />
                      </p>
                      {out1 && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/80">
                          {PORTFOLIO_DATA.personal.name} — {PORTFOLIO_DATA.personal.role}
                        </motion.p>
                      )}
                    </div>
                  )}

                  {/* Block 2: git status */}
                  {cmd2 && (
                    <div>
                      <p>
                        <span className="text-green-400">anuj@portfolio</span>:<span className="text-blue-400">~</span>$ <TypewriterText text="git status" delay={0} />
                      </p>
                      {out2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                          <p className="text-emerald-400">✓ Projects loaded</p>
                          <p className="text-emerald-400">✓ Skills loaded</p>
                          <p className="text-emerald-400">✓ Experience loaded</p>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Block 3: git log */}
                  {cmd3 && (
                    <div>
                      <p>
                        <span className="text-green-400">anuj@portfolio</span>:<span className="text-blue-400">~</span>$ <TypewriterText text="git log --oneline -1" delay={0} />
                      </p>
                      {out3 && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/80">
                          feat: craft digital experiences 🚀
                        </motion.p>
                      )}
                    </div>
                  )}

                  {/* Block 4: npm run dev */}
                  {cmd4 && (
                    <div>
                      <p>
                        <span className="text-green-400">anuj@portfolio</span>:<span className="text-blue-400">~</span>$ <TypewriterText text="npm run dev" delay={0} />
                      </p>
                      {out4 && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400">
                          ✓ Portfolio ready
                        </motion.p>
                      )}
                    </div>
                  )}

                  {/* Blinking Cursor */}
                  {(!out4 || !exit) && (
                    <p className="flex items-center gap-2">
                      {out4 ? (
                        <>
                          <span className="text-green-400">anuj@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="w-2 h-4 bg-white/70 animate-pulse inline-block"></span>
                        </>
                      ) : (
                        <span className="w-2 h-4 bg-transparent inline-block"></span>
                      )}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
