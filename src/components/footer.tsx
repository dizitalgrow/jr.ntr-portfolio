"use client";

import React from "react";
import { ArrowUp, Heart, Sparkles, Shield, Award, Film, Users, Globe } from "lucide-react";
import { TwitterIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "Jr. NTR on X (Twitter)", href: "https://x.com/tarak9999", icon: TwitterIcon, label: "@tarak9999" },
    { name: "Jr. NTR Official Instagram", href: "https://instagram.com/jrntr", icon: InstagramIcon, label: "@jrntr" },
    { name: "Dizital Grow Official Website", href: "https://www.dizitalgrow.in/", icon: Globe, label: "dizitalgrow.in", isDizitalGrow: true },
    { name: "Dizital Grow Official Instagram", href: "https://www.instagram.com/dizitalgrow/", icon: InstagramIcon, label: "@dizitalgrow", isDizitalGrow: true },
  ];

  return (
    <footer className="relative bg-[#070707] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Subtle Cyber Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#D5FF40]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Monogram Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] border border-[#D5FF40]/40 flex items-center justify-center shadow-[0_0_20px_rgba(213,255,64,0.2)]">
                <span className="font-space font-extrabold text-[#D5FF40] text-xl tracking-tighter">
                  NTR
                </span>
              </div>
              <div>
                <span className="font-space font-extrabold text-xl text-white tracking-wider uppercase block">
                  JR. NTR
                </span>
                <span className="text-xs font-mono text-[#D5FF40] tracking-widest uppercase block">
                  THE GLOBAL PHENOMENON
                </span>
              </div>
            </div>

            <p className="font-inter text-sm text-white/60 max-w-md leading-relaxed mb-6">
              The official interactive digital retrospective honoring the monumental legacy,
              cultural triumph, and cinematic brilliance of Nandamuri Taraka Rama Rao Jr.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2.5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className={`h-10 px-3 rounded-xl border flex items-center gap-2 transition-all duration-300 shadow-md hover:-translate-y-1 ${
                      s.isDizitalGrow
                        ? "bg-[#D5FF40]/15 border-[#D5FF40] text-[#D5FF40] shadow-[0_0_15px_rgba(213,255,64,0.3)] hover:shadow-[0_0_25px_rgba(213,255,64,0.6)]"
                        : "bg-[#111111] border-white/10 hover:border-[#D5FF40] hover:text-[#D5FF40] text-white/70 hover:shadow-[0_0_15px_rgba(213,255,64,0.3)]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-mono">{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-space font-bold text-sm text-white tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5FF40]" />
              Directory
            </h4>
            <ul className="space-y-3 font-inter text-xs sm:text-sm text-white/60">
              <li>
                <a href="#biography" className="hover:text-[#D5FF40] transition-colors">
                  Biography &amp; Life Journey
                </a>
              </li>
              <li>
                <a href="#filmography" className="hover:text-[#D5FF40] transition-colors">
                  Landmark Filmography Archive
                </a>
              </li>
              <li>
                <a href="#awards" className="hover:text-[#D5FF40] transition-colors">
                  Awards &amp; Academy Honors
                </a>
              </li>
              <li>
                <a href="#global-impact" className="hover:text-[#D5FF40] transition-colors">
                  Global Cultural Footprint
                </a>
              </li>
              <li>
                <a href="#fan-wall" className="hover:text-[#D5FF40] transition-colors">
                  Global Fan Community Wall
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D5FF40] transition-colors">
                  Photo Archive &amp; Portraits
                </a>
              </li>
            </ul>
          </div>

          {/* Legacy Information Card (Clean Showcase, No Form) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#111111] border border-white/10">
            <h4 className="font-space font-bold text-sm text-white tracking-wider uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D5FF40]" />
              The Nandamuri Lineage
            </h4>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              A century of unyielding dedication to arts, Telugu culture, and Indian cinema. Carrying forward the legendary heritage of N.T. Rama Rao with humility, passion, and global acclaim.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/5 text-xs font-mono text-white/50">
              <div className="flex items-center justify-between">
                <span>Industry Experience</span>
                <span className="text-[#D5FF40] font-bold">25+ Years</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Worldwide Box Office</span>
                <span className="text-[#D5FF40] font-bold">₹2,500+ Cr</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Academy Award Campaign</span>
                <span className="text-[#D5FF40] font-bold">RRR (Naatu Naatu)</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-[#D5FF40]">
              <Shield className="w-3.5 h-3.5" />
              <span>Official Digital Retrospective</span>
            </div>

            {/* Dizital Grow Agency Feature Card */}
            <div className="mt-5 p-5 rounded-2xl bg-gradient-to-br from-[#161616] via-[#101010] to-[#0a0a0a] border border-[#D5FF40]/35 shadow-[0_0_25px_rgba(213,255,64,0.1)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D5FF40] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D5FF40]" />
                  ENGINEERED BY DIZITAL GROW
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D5FF40] animate-pulse" />
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-inter mb-3.5">
                Dizital Grow transforms cinematic legacies into interactive digital worlds with cutting-edge design and engineering.
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href="https://www.dizitalgrow.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#D5FF40] hover:bg-[#b8e629] text-black font-space font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(213,255,64,0.35)] hover:shadow-[0_0_30px_rgba(213,255,64,0.6)]"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-black" />
                    <span>Visit Agency Website (dizitalgrow.in)</span>
                  </span>
                  <span className="text-sm font-bold">&rarr;</span>
                </a>

                <a
                  href="https://www.instagram.com/dizitalgrow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#181818] hover:bg-[#202020] border border-[#D5FF40]/30 hover:border-[#D5FF40] text-white font-space font-semibold text-xs tracking-wider uppercase transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <InstagramIcon className="w-4 h-4 text-[#D5FF40]" />
                    <span>Follow @dizitalgrow on Instagram</span>
                  </span>
                  <span className="text-[#D5FF40] text-sm font-bold">&rarr;</span>
                </a>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col gap-1.5 text-[10px] font-mono text-white/50">
                <div className="flex items-center justify-between">
                  <span>AGENCY PORTAL:</span>
                  <a
                    href="https://www.dizitalgrow.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D5FF40] hover:underline"
                  >
                    www.dizitalgrow.in
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>OFFICIAL INSTAGRAM:</span>
                  <a
                    href="https://www.instagram.com/dizitalgrow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D5FF40] hover:underline"
                  >
                    instagram.com/dizitalgrow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Smooth Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span>© {new Date().getFullYear()} Jr. NTR Digital Archive.</span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="text-white/80">
              Architected &amp; Engineered by{" "}
              <a
                href="https://www.dizitalgrow.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D5FF40] hover:underline font-bold"
              >
                DIZITAL GROW (dizitalgrow.in)
              </a>
              {" "}&bull;{" "}
              <a
                href="https://www.instagram.com/dizitalgrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#D5FF40]"
              >
                @dizitalgrow
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Indian Cinema
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#111111] border border-white/10 hover:border-[#D5FF40] hover:text-[#D5FF40] text-white transition-all duration-300 flex items-center gap-1.5 text-xs font-mono"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
