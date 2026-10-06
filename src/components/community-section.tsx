"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { INITIAL_FAN_TRIBUTES, FanTribute } from "@/data/ntr-data";
import { Heart, Sparkles, Flame, Users2, ShieldCheck, MapPin, Quote } from "lucide-react";

export function CommunitySection() {
  const [tributes, setTributes] = useState<FanTribute[]>(INITIAL_FAN_TRIBUTES);
  const [cheerCount, setCheerCount] = useState<number>(999842);

  const handleCheer = () => {
    setCheerCount((prev) => prev + 1);

    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.7 },
        colors: ["#D5FF40", "#ffffff", "#10B981", "#EAB308"],
      });
    } catch {
      // fallback
    }
  };

  const handleLike = (id: string) => {
    setTributes((prev) =>
      prev.map((t) => (t.id === id ? { ...t, likes: t.likes + 1 } : t))
    );
  };

  return (
    <section id="fan-wall" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Concert Crowd Atmosphere & Dynamic Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D5FF40]/10 via-[#050505] to-[#050505] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      {/* Ambient Blurred Glow Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#D5FF40]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#D5FF40]/30 text-xs font-mono text-[#D5FF40] mb-3">
            <Users2 className="w-3.5 h-3.5" />
            <span>GLOBAL BROTHERHOOD &amp; ADMIRATION</span>
          </div>
          <h2 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            Global Fan Community Wall
          </h2>
          <p className="font-inter text-base sm:text-lg text-white/60 mt-3">
            Voices of adoration echoing across continents — from Shibuya crossing in Tokyo to packed auditoriums across Hyderabad and Los Angeles.
          </p>

          {/* Interactive Cheer Button */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <button
              id="fan-cheer-btn"
              onClick={handleCheer}
              className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#D5FF40] hover:bg-[#b8e629] text-black font-space font-extrabold text-base sm:text-lg tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(213,255,64,0.45)] hover:shadow-[0_0_55px_rgba(213,255,64,0.7)] hover:scale-105"
            >
              <Flame className="w-6 h-6 fill-black animate-bounce" />
              <span>CHEER FOR TARAK (ROAR)</span>
              <Sparkles className="w-5 h-5 ml-1" />
            </button>
            <p className="font-mono text-xs text-white/50 mt-3">
              Total Cheers Recorded:{" "}
              <span className="text-[#D5FF40] font-bold">
                {cheerCount.toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        {/* Global Fan Tributes Grid (Clean Showcase, No Form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tributes.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-7 rounded-3xl bg-[#111111]/90 backdrop-blur-xl border border-white/10 hover:border-[#D5FF40]/50 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(213,255,64,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-space font-bold text-base text-white">
                      {item.name}
                    </span>
                    {item.verifiedFan && (
                      <span title="Verified Superfan">
                        <ShieldCheck className="w-4 h-4 text-[#D5FF40]" />
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-white/40">
                    {item.timestamp}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#D5FF40] mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <p className="font-inter text-sm text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-white/40">
                  #JaiNTR &bull; Global Fan
                </span>

                <button
                  onClick={() => handleLike(item.id)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-white/70 hover:text-red-400 transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 fill-red-500/20 text-red-500" />
                  <span>{item.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
