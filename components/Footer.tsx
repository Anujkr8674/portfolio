import React from "react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#050508] py-8 px-6 flex justify-center items-center border-t border-white/5">
      <p className="text-white/40 text-sm font-medium tracking-wide text-center">
        &copy; {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
