"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight, Film, Shield, Flame, Globe2, BookOpen } from "lucide-react";

export function HeroSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#050505]">
      {/* Background Animated Cyber Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D5FF40]/10 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />

      {/* Floating Geometric Neon Accents */}
      <div className="absolute top-28 right-12 w-24 h-24 border border-[#D5FF40]/20 rounded-2xl rotate-12 pointer-events-none animate-float hidden xl:block" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-white/10 rounded-full pointer-events-none animate-float [animation-delay:2s] hidden xl:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Wikipedia Bio */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#D5FF40]/30 shadow-[0_0_20px_rgba(213,255,64,0.12)] mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5FF40] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D5FF40]" />
            </span>
            <span className="text-xs font-mono font-medium tracking-wider text-[#D5FF40] uppercase">
              MAN OF MASSES &bull; FORBES CELEBRITY 100
            </span>
          </div>

          {/* Massive Headline */}
          <h1 className="font-space font-extrabold text-6xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tighter leading-[0.9] text-white uppercase mb-4">
            JR. NTR
            <span className="block text-2xl sm:text-3xl md:text-4xl font-sora font-semibold tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D5FF40] via-white to-white/60 mt-3 normal-case">
              Nandamuri Taraka Rama Rao Jr.
            </span>
          </h1>

          {/* Verified Wikipedia Description */}
          <p className="font-inter text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-8">
            Grandson of legendary matinee idol and Andhra Pradesh Chief Minister N. T. Rama Rao.
            A trained Kuchipudi dancer, polyglot, and global superstar celebrated across 30+ landmark films
            including <span className="text-[#D5FF40] font-semibold">RRR</span>, <span className="text-[#D5FF40] font-semibold">Devara</span>, and <span className="text-[#D5FF40] font-semibold">Simhadri</span>.
          </p>

          {/* Interactive Navigation CTAs (No video play icons) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12">
            <a
              id="hero-explore-biography"
              href="#biography"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#D5FF40] text-[#050505] font-space font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(213,255,64,0.4)] hover:shadow-[0_0_50px_rgba(213,255,64,0.7)] hover:-translate-y-1 overflow-hidden"
            >
              <BookOpen className="w-5 h-5 text-black" />
              <span>Read Biography</span>
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              id="hero-view-filmography"
              href="#filmography"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#111111] hover:bg-[#181818] border border-white/15 hover:border-[#D5FF40]/50 text-white font-space font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <Film className="w-5 h-5 text-[#D5FF40]" />
              <span>Landmark Filmography</span>
            </a>
          </div>

          {/* Pillar Metrics from Wikipedia */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-white/10 w-full max-w-xl">
            <div>
              <div className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-1">
                25<span className="text-[#D5FF40]">+</span>
              </div>
              <p className="text-xs font-mono text-white/50 uppercase tracking-wider mt-0.5">
                Years Legacy
              </p>
            </div>
            <div>
              <div className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-1">
                30<span className="text-[#D5FF40]">+</span>
              </div>
              <p className="text-xs font-mono text-white/50 uppercase tracking-wider mt-0.5">
                Feature Films
              </p>
            </div>
            <div>
              <div className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-1">
                ₹1.3K<span className="text-[#D5FF40]">Cr+</span>
              </div>
              <p className="text-xs font-mono text-white/50 uppercase tracking-wider mt-0.5">
                RRR Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Layered 3D Card Featuring User's Lion Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-[#1c1c1c] via-[#111111] to-[#0a0a0a] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group cursor-pointer"
          >
            {/* Neon Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-[#D5FF40]/30 opacity-60 group-hover:opacity-100 group-hover:border-[#D5FF40] transition-all duration-500 pointer-events-none group-hover:shadow-[0_0_35px_rgba(213,255,64,0.3)]" />

            {/* Ambient Blurred Glow Layer behind Card */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden -z-10 pointer-events-none">
              <Image
                src="/images/ntr/hero_portrait.jpg"
                alt="Ambient Glow"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-top filter blur-3xl opacity-40 scale-110"
              />
            </div>

            {/* Main Visual Image Collage */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0d0d0d]">
              <Image
                src="/images/ntr/hero_portrait.jpg"
                alt="Jr. NTR Official High Resolution Portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-top filter contrast-110 brightness-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 via-transparent to-[#050505]/30" />

              {/* Top Floating Badges */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#D5FF40]/40 text-xs font-mono text-[#D5FF40]">
                <Shield className="w-3.5 h-3.5" />
                <span>NANDAMURI DYNASTY</span>
              </div>

              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/80">
                <Globe2 className="w-3.5 h-3.5 text-[#D5FF40]" />
                <span>WORLDWIDE</span>
              </div>

              {/* Bottom Holographic HUD Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/15 group-hover:border-[#D5FF40]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D5FF40] animate-ping" />
                    <span className="text-xs font-mono text-[#D5FF40] font-bold tracking-wider">
                      DEVARA &bull; RRR &bull; WAR 2
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white/50">#TARAK</span>
                </div>

                <h3 className="font-space font-bold text-lg sm:text-xl text-white">
                  Young Tiger Jr. NTR
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 mt-1">
                  Revered across continents for electrifying performances, classical dance discipline, and monumental box office records.
                </p>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                  <span className="flex items-center gap-1 text-[#D5FF40]">
                    <Flame className="w-3.5 h-3.5 fill-[#D5FF40]" />
                    Academy Award Era
                  </span>
                  <span>50+ Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
