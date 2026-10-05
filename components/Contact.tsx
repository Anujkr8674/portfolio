"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let { name, value } = e.target;
    
    if (name === 'phone') {
      value = value.replace(/\D/g, '');
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: "Please fill in all required fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: "Please enter a valid email address." });
      return;
    }

    if (formData.phone && formData.phone.length !== 10) {
      setStatus({ type: 'error', message: "Contact number must be exactly 10 digits." });
      return;
    }
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: "Message sent successfully! Please check your email." });
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus({ type: 'error', message: data.error || "Failed to send message." });
      }
    } catch (err) {
      setStatus({ type: 'error', message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setStatus({ type: null, message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-20">
      {/* Background Blurs and Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-[125rem] max-h-[125rem] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-20 sm:opacity-10 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-32 -right-32 w-[70vw] sm:h-[50vw] md:w-[40vw] sm:w-[50vw] md:h-[40vw] max-w-[125rem] max-h-[125rem] rounded-full bg-gradient-to-r from-[#302B63] via-[#00BF8F] to-[#1cd8d2] opacity-20 sm:opacity-10 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" style={{ animationDelay: '4s', animationDuration: '8s' }}></div>

        {/* Floating Stars */}
        {mounted && renderStars()}
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mx-auto">

        {/* Left Side Image */}
        <div className="flex-1 hidden md:flex items-center justify-center group">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[320px] md:w-[450px] aspect-square flex items-center justify-center overflow-visible"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/30 transition-colors duration-700"></div>

            <img
              src="/img/cotact.png"
              alt="Contact 3D Graphic"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_25px_rgba(99,102,241,0.4)] group-hover:drop-shadow-[0_0_50px_rgba(99,102,241,0.8)] transition-all duration-700 ease-out group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>

        {/* Right Form Card */}
        <div className="flex-1 w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-[#0a0a12]/90 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
          >
            <h2 className="text-3xl font-bold text-white mb-1 font-space">Get in Touch</h2>
            <p className="text-gray-500 text-sm mb-8">
              Have a question or a project in mind? Let's talk about it.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">
                      Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name "
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">
                      Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">
                      Contact No
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Contact No"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                    >
                      <option value="" disabled className="bg-[#0a0a12] text-gray-500">Select a service</option>
                      <option value="Full Stack Web App" className="bg-[#0a0a12] text-gray-200">Full Stack Web App</option>
                      <option value="Frontend Development" className="bg-[#0a0a12] text-gray-200">Frontend Development</option>
                      <option value="Backend / API" className="bg-[#0a0a12] text-gray-200">Backend / API</option>
                      <option value="UI/UX Design" className="bg-[#0a0a12] text-gray-200">UI/UX Design</option>
                      <option value="Consultation" className="bg-[#0a0a12] text-gray-200">Consultation</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-widest text-gray-400 mb-2">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 resize-none focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                />
              </div>

              <button disabled={loading} type="submit" className="group relative cursor-pointer w-full overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-semibold text-[15px] py-4 rounded-2xl shadow-[0_4px_24px_rgba(99,102,241,0.5)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.6)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                <div className="relative overflow-hidden flex items-center justify-center">
                  <span className="absolute flex items-center gap-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[150%]">
                    {loading ? "Sending..." : "Send Message"} {loading ? "" : <Send size={18} />}
                  </span>
                  <span className="absolute flex items-center gap-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-[150%] group-hover:translate-y-0">
                    {loading ? "Sending..." : "Send Message"} {loading ? "" : <Send size={18} className="group-hover:rotate-12 transition-transform duration-300" />}
                  </span>
                  <span className="invisible flex items-center gap-2">
                    {loading ? "Sending..." : "Send Message"} {loading ? "" : <Send size={18} />}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
              </button>
            </form>

            {/* Popup Notification Modal */}
            {(status.message || loading) && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className={`relative w-full max-w-sm overflow-hidden rounded-3xl border ${loading
                      ? 'bg-[#0a0a0f] border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.15)]'
                      : status.type === 'success'
                        ? 'bg-[#0a0a0f] border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.15)]'
                        : 'bg-[#0a0a0f] border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.15)]'
                    } p-8 text-center`}
                >
                  <div className="flex justify-center mb-6">
                    {loading ? (
                      <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                        <svg className="animate-spin text-indigo-500" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      </div>
                    ) : status.type === 'success' ? (
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                      </div>
                    )}
                  </div>

                  <h3 className={`text-2xl font-bold mb-3 font-space ${loading ? 'text-indigo-400' : status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {loading ? 'Sending...' : status.type === 'success' ? 'Success!' : 'Oops!'}
                  </h3>
                  <p className="text-gray-400 mb-8">
                    {loading ? "Please wait while we send your message." : status.message}
                  </p>

                  {!loading && (
                    <button
                      onClick={() => setStatus({ type: null, message: '' })}
                      className={`w-full py-3 rounded-xl font-semibold transition-colors ${status.type === 'success'
                          ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/30'
                          : 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30'
                        }`}
                    >
                      Close
                    </button>
                  )}

                  {/* Progress bar at the bottom */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-white/5 overflow-hidden">
                    {loading ? (
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="h-full w-1/2 bg-indigo-500"
                      />
                    ) : (
                      <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 6, ease: "linear" }}
                        className={`h-full ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            )}

          </motion.div>
        </div>

      </div>
    </section>
  );
}
