"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Mail, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Development Process", href: "#process" },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const renderStars = () => {
    return Array.from({ length: 50 }).map((_, i) => {
      const top = ((i * 17) % 100);
      const left = ((i * 23) % 100);
      const size = (i % 3) + 1.5;
      const duration = (i % 5) + 5;
      const delay = (i % 4);

      return (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{ width: size, height: size, top: `${top}%`, left: `${left}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.9, 0.1] }}
          transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "easeInOut" }}
        />
      );
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/5 shadow-lg" : "bg-transparent"}`}>
        <div className="flex items-center gap-2">
          <motion.a
            href="#home"
            className="text-xl md:text-2xl font-bold font-space tracking-wide cursor-pointer inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#a855f7] to-[#1cd8d2] bg-[length:200%_auto] hover:drop-shadow-[0_0_12px_rgba(28,216,210,0.6)] transition-all duration-300"
            >
              Anuj Kumar
            </motion.span>
          </motion.a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="relative text-sm text-white/60 hover:text-white transition-colors duration-200 py-1 whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden lg:flex items-center gap-2 group relative px-6 py-2.5 rounded-full font-bold text-sm text-white cursor-pointer border-2 border-[#1cd8d2] bg-transparent overflow-hidden hover:shadow-[0_0_20px_rgba(28,216,210,0.4)] transition-all hover:scale-105">
          {/* Hover background fill */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          
          <div className="relative z-10 overflow-hidden flex items-center justify-center">
            <span className="absolute flex items-center gap-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">Let's Talk <ArrowRight size={16} /></span>
            <span className="absolute flex items-center gap-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">Let's Talk <ArrowRight size={16} /></span>
            <span className="invisible flex items-center gap-2">Let's Talk <ArrowRight size={16} /></span>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative z-[60] text-2xl text-white/80 hover:text-white transition-colors duration-200 focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile App Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#050508] flex flex-col lg:hidden overflow-hidden"
          >
            {/* Background Blurs and Stars */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -left-32 w-[90vw] h-[90vw] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-20 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute -bottom-32 -right-32 w-[90vw] h-[90vw] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-20 blur-[100px] animate-pulse" style={{ animationDelay: '4s', animationDuration: '8s' }}></div>
              {mounted && renderStars()}
            </div>

            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="relative z-10 flex-1 flex flex-col justify-center gap-8 px-10"
            >
              {NAV_LINKS.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: 50 }
                  }}
                  className="text-3xl sm:text-4xl text-white font-space font-bold hover:text-[#1cd8d2] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative z-10 p-8 border-t border-white/10 flex flex-col gap-5 bg-black/40 backdrop-blur-md"
            >
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail size={16} />
                </span>
                <span className="text-sm font-medium">anujkumar.techdev@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone size={16} />
                </span>
                <span className="text-sm font-medium">+91 79039 58577</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                </span>
                <a href="https://github.com/Anujkr8674" target="_blank" rel="noreferrer" className="text-sm font-medium">github.com/Anujkr8674</a>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </span>
                <a href="https://www.linkedin.com/in/anuj-kumar57/" target="_blank" rel="noreferrer" className="text-sm font-medium">linkedin.com/in/anuj-kumar57</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
