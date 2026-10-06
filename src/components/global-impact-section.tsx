"use client";

import React, { useState } from "react";
import { GLOBAL_NODES, GlobalImpactNode } from "@/data/ntr-data";
import { Globe2, MapPin, Radio } from "lucide-react";

export function GlobalImpactSection() {
  const [activeNode, setActiveNode] = useState<GlobalImpactNode>(GLOBAL_NODES[0]);

  return (
    <section id="global-impact" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D5FF40]/5 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#D5FF40]/30 text-xs font-mono text-[#D5FF40]">
                <Globe2 className="w-3.5 h-3.5" />
                <span>THE GLOBAL PHENOMENON</span>
              </div>
              <a
                href="https://www.dizitalgrow.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-white/70 hover:text-[#D5FF40] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D5FF40]/40 transition-colors"
                title="Dizital Grow Official Website"
              >
                DIZITAL GROW WORLD MAP &bull; dizitalgrow.in ↗
              </a>
              <a
                href="https://www.instagram.com/dizitalgrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-[#D5FF40] hover:underline"
              >
                @dizitalgrow
              </a>
            </div>
            <h2 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              Global Cultural Footprint
            </h2>
            <p className="font-inter text-base sm:text-lg text-white/60 max-w-xl mt-3">
              Indian cinema superstar transcending continents — from Tokyo&apos;s record 1,000-day theatrical run to Hollywood&apos;s Oscar spotlight.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-[#111111] border border-white/10 flex items-center gap-2 text-xs font-mono text-[#D5FF40]">
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#D5FF40]" />
              <span>INTERNATIONAL REACH</span>
            </div>
          </div>
        </div>

        {/* Global Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-[#111111] border border-white/10">
            <span className="text-xs font-mono text-white/50 block">WORLDWIDE FOOTPRINT</span>
            <span className="font-space font-bold text-2xl sm:text-3xl text-white mt-1 block">
              120M<span className="text-[#D5FF40]">+</span> Audience
            </span>
            <span className="text-[11px] font-mono text-[#D5FF40] mt-1 block">Global Indian Diaspora</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#111111] border border-white/10">
            <span className="text-xs font-mono text-white/50 block">THEATRICAL CIRCUIT</span>
            <span className="font-space font-bold text-2xl sm:text-3xl text-white mt-1 block">
              50<span className="text-[#D5FF40]">+</span> Countries
            </span>
            <span className="text-[11px] font-mono text-[#D5FF40] mt-1 block">Simultaneous Releases</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#111111] border border-white/10">
            <span className="text-xs font-mono text-white/50 block">JAPAN THEATRICAL RUN</span>
            <span className="font-space font-bold text-2xl sm:text-3xl text-white mt-1 block">
              1,000<span className="text-[#D5FF40]">+</span> Days
            </span>
            <span className="text-[11px] font-mono text-[#D5FF40] mt-1 block">All-Time Indian Record</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#111111] border border-white/10">
            <span className="text-xs font-mono text-white/50 block">ACADEMY SPOTLIGHT</span>
            <span className="font-space font-bold text-2xl sm:text-3xl text-white mt-1 block">
              RRR <span className="text-[#D5FF40]">&amp;</span> Oscars
            </span>
            <span className="text-[11px] font-mono text-[#D5FF40] mt-1 block">Critics&apos; Choice Nominee</span>
          </div>
        </div>

        {/* Interactive Stylized World Map Container */}
        <div className="relative rounded-3xl bg-[#0e0e0e] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="relative w-full aspect-[2/1] min-h-[360px] sm:min-h-[460px] flex items-center justify-center">
            {/* Ambient Grid Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="world-grid-clean" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#world-grid-clean)" />
            </svg>

            {/* Stylized Continents SVG */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M150,80 Q250,90 280,140 Q220,180 200,260 Q160,240 120,180 Z"
                fill="#222"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <path
                d="M260,280 Q320,300 300,420 Q250,440 230,360 Z"
                fill="#1f1f1f"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              <path
                d="M460,80 Q560,90 540,160 Q480,180 440,140 Z"
                fill="#242424"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <path
                d="M470,180 Q560,200 540,340 Q470,360 450,260 Z"
                fill="#202020"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              <path
                d="M580,70 Q800,80 840,200 Q740,280 620,240 Z"
                fill="#262626"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
              />
              <path
                d="M780,330 Q880,340 860,420 Q780,430 760,370 Z"
                fill="#222"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />

              {/* Neon Connection Arcs */}
              <path
                d="M 680 260 Q 780 180 880 220"
                stroke="#D5FF40"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
                opacity="0.7"
              />
              <path
                d="M 680 260 Q 450 120 200 200"
                stroke="#D5FF40"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
                opacity="0.7"
              />
              <path
                d="M 680 260 Q 560 180 480 160"
                stroke="#D5FF40"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
                opacity="0.7"
              />
              <path
                d="M 680 260 Q 800 320 860 380"
                stroke="#D5FF40"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
                opacity="0.7"
              />
            </svg>

            {/* Glowing Country Hotspot Nodes */}
            {GLOBAL_NODES.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.coordinates.x}%`,
                    top: `${node.coordinates.y}%`,
                  }}
                  onClick={() => setActiveNode(node)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                >
                  <div
                    className={`absolute -inset-3 rounded-full transition-all duration-300 ${
                      isSelected
                        ? "bg-[#D5FF40]/30 animate-ping"
                        : "group-hover:bg-[#D5FF40]/20"
                    }`}
                  />

                  <div
                    className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      isSelected
                        ? "bg-[#D5FF40] text-black border-[#D5FF40] shadow-[0_0_25px_#D5FF40]"
                        : "bg-[#111111] text-[#D5FF40] border-[#D5FF40]/60 hover:scale-125"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 fill-current" />
                  </div>

                  <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-black/90 border border-white/10 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {node.country}
                  </div>
                </div>
              );
            })}

            {/* Region Detail Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-30 p-5 sm:p-6 rounded-2xl bg-black/90 backdrop-blur-xl border border-[#D5FF40]/40 shadow-[0_0_35px_rgba(213,255,64,0.15)] animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#D5FF40]/20 border border-[#D5FF40]/40 text-[#D5FF40] text-[11px] font-mono font-bold uppercase">
                  {activeNode.tag}
                </span>
                <span className="text-xs font-mono text-white/60">
                  {activeNode.city}
                </span>
              </div>

              <h4 className="font-space font-extrabold text-xl sm:text-2xl text-white">
                {activeNode.country}
              </h4>
              <p className="font-mono text-xs text-[#D5FF40] mt-0.5 mb-3 font-semibold">
                {activeNode.metric} &bull; {activeNode.headline}
              </p>

              <p className="font-inter text-xs sm:text-sm text-white/75 leading-relaxed">
                {activeNode.story}
              </p>
            </div>
          </div>

          {/* Region Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-white/10 scrollbar-none no-scrollbar">
            {GLOBAL_NODES.map((node) => {
              const isSelected = activeNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#D5FF40] text-black border-[#D5FF40] font-bold shadow-[0_0_15px_rgba(213,255,64,0.3)]"
                      : "bg-[#141414] text-white/60 border-white/5 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {node.country} ({node.metric})
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Impact Dizital Grow Footer */}
        <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#D5FF40]" />
            <span>Interactive Global Theatrical &amp; Streaming Analytics</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.dizitalgrow.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D5FF40] hover:underline font-semibold"
            >
              Engineered by Dizital Grow (dizitalgrow.in) &rarr;
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href="https://www.instagram.com/dizitalgrow/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#D5FF40]"
            >
              @dizitalgrow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
