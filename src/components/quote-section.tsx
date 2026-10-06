"use client";

import React from "react";
import { Sparkles, Quote } from "lucide-react";

export function QuoteSection() {
  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t border-white/5 overflow-hidden flex items-center justify-center text-center">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#D5FF40]/10 blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Floating Quote Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#111111] border border-[#D5FF40]/40 flex items-center justify-center text-[#D5FF40] shadow-[0_0_30px_rgba(213,255,64,0.25)] mb-8 animate-float">
          <Quote className="w-8 h-8" />
        </div>

        {/* Huge Typography Quote */}
        <blockquote className="font-space font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tighter uppercase leading-[1.05] max-w-5xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            &ldquo;A Hero On Screen.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D5FF40] via-emerald-300 to-[#D5FF40] mt-2 drop-shadow-[0_0_35px_rgba(213,255,64,0.35)]">
            An Inspiration In Real Life.&rdquo;
          </span>
        </blockquote>

        {/* Decorative Divider & Seal */}
        <div className="mt-12 flex items-center gap-4">
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent to-[#D5FF40]/50" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#D5FF40]/40 text-xs font-mono text-[#D5FF40]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NANDAMURI TARAKA RAMA RAO JR.</span>
          </div>
          <div className="w-12 sm:w-24 h-px bg-gradient-to-l from-transparent to-[#D5FF40]/50" />
        </div>

        <p className="font-inter text-xs sm:text-sm text-white/50 tracking-widest uppercase mt-4">
          CARRYING FORWARD A CENTURY OF LEGENDARY CINEMA WITH UNCOMPROMISED HUMILITY
        </p>

        {/* Dizital Grow Digital Architecture Credit with Website & Instagram Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.dizitalgrow.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#181818] border border-white/10 hover:border-[#D5FF40] text-[11px] font-mono tracking-wider text-white hover:text-[#D5FF40] uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(213,255,64,0.25)] group"
          >
            <span>Digital Architecture &amp; Curation</span>
            <span className="text-[#D5FF40]">&bull;</span>
            <strong className="text-white font-bold">DIZITAL GROW (dizitalgrow.in)</strong>
            <span className="text-[#D5FF40]">&rarr;</span>
          </a>

          <a
            href="https://www.instagram.com/dizitalgrow/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#D5FF40]/30 hover:border-[#D5FF40] text-[11px] font-mono text-white/90 hover:text-[#D5FF40] transition-colors"
          >
            <span>@dizitalgrow on Instagram &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
