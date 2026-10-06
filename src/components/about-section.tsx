"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MILESTONES } from "@/data/ntr-data";
import { Calendar, ChevronRight, Award, Sparkles, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const activeMilestone = MILESTONES[activeMilestoneIndex];

  return (
    <section id="biography" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#D5FF40]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-cyber opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#D5FF40]/30 text-xs font-mono text-[#D5FF40] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VERIFIED BIOGRAPHICAL RECORD</span>
            </div>
            <h2 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              Biography &amp; Life Journey
            </h2>
            <p className="font-inter text-base sm:text-lg text-white/60 max-w-2xl mt-3">
              From classical Kuchipudi stages and child actor honors to the 95th Academy Awards —
              explore the definitive milestones of Nandamuri Taraka Rama Rao Jr.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-white/40">
            <span>ERA</span>
            <span className="text-[#D5FF40] font-bold text-sm">
              0{activeMilestoneIndex + 1}
            </span>
            <span>/ 0{MILESTONES.length}</span>
          </div>
        </div>

        {/* Milestone Navigation Track (Pill Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {MILESTONES.map((m, idx) => {
            const isActive = idx === activeMilestoneIndex;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMilestoneIndex(idx)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl font-space text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2.5 border ${
                  isActive
                    ? "bg-[#D5FF40] text-[#050505] border-[#D5FF40] shadow-[0_0_20px_rgba(213,255,64,0.4)]"
                    : "bg-[#111111] text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-black" : "bg-[#D5FF40]"}`} />
                <span>{m.era}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? "bg-black/20 text-black" : "bg-white/5 text-white/40"}`}>
                  {m.year}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Milestone Spotlight Card */}
        <div className="relative rounded-3xl bg-[#111111] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Image Side with Ambient Blurred Glow */}
            <div className="lg:col-span-5 relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-black/60 border border-white/15 group shadow-2xl">
              {/* Blurred Ambient Image Underlay */}
              <div className="absolute inset-0 -z-10 filter blur-2xl opacity-50 scale-110 pointer-events-none">
                <Image
                  src={activeMilestone.image}
                  alt="Ambient Glow"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <Image
                src={activeMilestone.image}
                alt={activeMilestone.title}
                fill
                className="object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Tag Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#D5FF40]/50 text-[#D5FF40] text-xs font-mono font-medium">
                  {activeMilestone.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono">
                  {activeMilestone.year}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                  <Award className="w-4 h-4 text-[#D5FF40]" />
                  <span>{activeMilestone.tag}</span>
                </div>
                <span className="text-[11px] font-mono text-[#D5FF40]">WIKIPEDIA ARCHIVE</span>
              </div>
            </div>

            {/* Narrative Details Side */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{activeMilestone.year} &bull; {activeMilestone.era.toUpperCase()}</span>
                </div>

                <h3 className="font-space font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-4 leading-tight">
                  {activeMilestone.title}
                </h3>

                <p className="font-inter text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                  {activeMilestone.description}
                </p>

                {/* Cultural Impact Highlight Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#161616] border border-[#D5FF40]/25 mb-8">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D5FF40]" />
                    <span>Historical Industry Benchmark</span>
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                    {activeMilestone.impact}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {MILESTONES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMilestoneIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeMilestoneIndex
                          ? "w-8 bg-[#D5FF40]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to milestone ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    disabled={activeMilestoneIndex === 0}
                    onClick={() => setActiveMilestoneIndex(activeMilestoneIndex - 1)}
                    className="px-4 py-2 rounded-xl bg-[#181818] border border-white/10 text-xs font-space font-medium text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-white/30 transition-colors"
                  >
                    Previous Era
                  </button>
                  <button
                    disabled={activeMilestoneIndex === MILESTONES.length - 1}
                    onClick={() => setActiveMilestoneIndex(activeMilestoneIndex + 1)}
                    className="px-4 py-2 rounded-xl bg-[#D5FF40] text-black font-space font-bold text-xs flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#b8e629] transition-colors"
                  >
                    Next Era
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Grid Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {MILESTONES.slice(0, 6).map((m, index) => (
            <div
              key={m.id}
              onClick={() => setActiveMilestoneIndex(index)}
              className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeMilestoneIndex === index
                  ? "bg-[#181818] border-[#D5FF40]/60 shadow-[0_0_20px_rgba(213,255,64,0.15)]"
                  : "bg-[#111111]/70 border-white/5 hover:border-white/20 hover:bg-[#141414]"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
                <span>{m.year}</span>
                <span className="text-[#D5FF40] font-semibold">{m.tag}</span>
              </div>
              <h4 className="font-space font-bold text-sm sm:text-base text-white group-hover:text-[#D5FF40] transition-colors line-clamp-1">
                {m.title}
              </h4>
              <p className="text-xs text-white/60 line-clamp-2 mt-1">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
