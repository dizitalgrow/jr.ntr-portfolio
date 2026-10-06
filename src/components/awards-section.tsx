"use client";

import React, { useState } from "react";
import { AWARDS } from "@/data/ntr-data";
import { Trophy, Award as AwardIcon, Star, Globe, Crown } from "lucide-react";

export function AwardsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Academy & International", "Filmfare Awards", "Nandi & State", "SIIMA & Honors"];

  const filteredAwards = AWARDS.filter((award) => {
    if (selectedCategory === "All") return true;
    return award.category === selectedCategory;
  });

  return (
    <section id="awards" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Background Neon Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D5FF40]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#D5FF40]/30 text-xs font-mono text-[#D5FF40] mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>AUTHENTIC ACCOLADES RECORD</span>
          </div>
          <h2 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            Awards &amp; Honors Dashboard
          </h2>
          <p className="font-inter text-base sm:text-lg text-white/60 mt-3">
            State, national, and international honors verified through official film academy and award organization archives.
          </p>
        </div>

        {/* Achievement Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#D5FF40]/40 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(213,255,64,0.12)]">
            <div className="w-10 h-10 rounded-xl bg-[#D5FF40]/10 flex items-center justify-center text-[#D5FF40] mb-4 group-hover:scale-110 transition-transform">
              <Crown className="w-5 h-5" />
            </div>
            <div className="font-space font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              25<span className="text-[#D5FF40]">+</span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-2">
              Years in Industry
            </p>
            <span className="text-[11px] font-mono text-[#D5FF40] block mt-1">1997 — Present</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#D5FF40]/40 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(213,255,64,0.12)]">
            <div className="w-10 h-10 rounded-xl bg-[#D5FF40]/10 flex items-center justify-center text-[#D5FF40] mb-4 group-hover:scale-110 transition-transform">
              <Star className="w-5 h-5" />
            </div>
            <div className="font-space font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              30<span className="text-[#D5FF40]">+</span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-2">
              Feature Films
            </p>
            <span className="text-[11px] font-mono text-[#D5FF40] block mt-1">Unbroken Mass Stardom</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#D5FF40]/40 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(213,255,64,0.12)]">
            <div className="w-10 h-10 rounded-xl bg-[#D5FF40]/10 flex items-center justify-center text-[#D5FF40] mb-4 group-hover:scale-110 transition-transform">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="font-space font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              3x<span className="text-[#D5FF40]"></span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-2">
              Filmfare Awards
            </p>
            <span className="text-[11px] font-mono text-[#D5FF40] block mt-1">Filmfare South Best Actor</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#D5FF40]/40 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(213,255,64,0.12)]">
            <div className="w-10 h-10 rounded-xl bg-[#D5FF40]/10 flex items-center justify-center text-[#D5FF40] mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5" />
            </div>
            <div className="font-space font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              2x<span className="text-[#D5FF40]"></span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-2">
              Nandi Awards
            </p>
            <span className="text-[11px] font-mono text-[#D5FF40] block mt-1">State Government Honors</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-space font-semibold tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-[#D5FF40] text-black border-[#D5FF40] shadow-[0_0_20px_rgba(213,255,64,0.35)]"
                    : "bg-[#111111] text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((award) => (
            <div
              key={award.id}
              className="group relative p-6 sm:p-7 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#D5FF40]/60 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(213,255,64,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#181818] border border-white/10 text-[11px] font-mono text-[#D5FF40]">
                    {award.badge}
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    {award.filmOrYear}
                  </span>
                </div>

                <h3 className="font-space font-bold text-lg sm:text-xl text-white group-hover:text-[#D5FF40] transition-colors">
                  {award.title}
                </h3>
                <p className="text-xs font-mono text-white/40 mt-1 mb-3">
                  {award.awardName}
                </p>

                <p className="font-inter text-xs sm:text-sm text-white/70 leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40 group-hover:text-[#D5FF40] transition-colors">
                <span>VERIFIED RECORD</span>
                <AwardIcon className="w-4 h-4 text-[#D5FF40]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
