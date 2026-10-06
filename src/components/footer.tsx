"use client";

import React from "react";
import { ArrowUp, Heart, Sparkles, Shield, Award, Film, Users } from "lucide-react";

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "X (Twitter)", href: "https://x.com/tarak9999", icon: TwitterIcon },
    { name: "Instagram", href: "https://instagram.com/jrntr", icon: InstagramIcon },
    { name: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
    { name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
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
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-xl bg-[#111111] border border-white/10 hover:border-[#D5FF40] hover:text-[#D5FF40] text-white/70 flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(213,255,64,0.3)]"
                  >
                    <Icon className="w-4 h-4" />
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
          </div>
        </div>

        {/* Bottom Bar & Smooth Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Jr. NTR Digital Archive.</span>
            <span>All rights reserved.</span>
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
