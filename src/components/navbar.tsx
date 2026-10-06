"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, Film, Award, Globe, Users, Image as ImageIcon, Sparkles } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Biography", href: "#biography", icon: BookOpen },
    { label: "Filmography", href: "#filmography", icon: Film },
    { label: "Awards & Honors", href: "#awards", icon: Award },
    { label: "Global Reach", href: "#global-impact", icon: Globe },
    { label: "Fan Wall", href: "#fan-wall", icon: Users },
    { label: "Photo Archive", href: "#gallery", icon: ImageIcon },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 md:py-4 px-4 sm:px-6 flex justify-center ${
          scrolled ? "backdrop-blur-md bg-black/60 border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-[#111111] border border-[#D5FF40]/40 flex items-center justify-center overflow-hidden group-hover:border-[#D5FF40] group-hover:shadow-[0_0_20px_rgba(213,255,64,0.4)] transition-all duration-300">
              <span className="font-space font-extrabold text-[#D5FF40] text-lg tracking-tighter">
                NTR
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#D5FF40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold text-white text-sm sm:text-base tracking-wider uppercase flex items-center gap-2">
                JR. NTR
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D5FF40] animate-ping" />
              </span>
              <span className="text-[10px] tracking-widest text-[#D5FF40] font-mono">
                MAN OF MASSES
              </span>
            </div>
          </a>

          {/* Desktop Nav Pills */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111111]/85 border border-white/10 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-white/75 hover:text-[#D5FF40] hover:bg-white/[0.04] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Live Indicator (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-white/10 text-[11px] text-white/60">
              <span className="w-2 h-2 rounded-full bg-[#D5FF40] shadow-[0_0_8px_#D5FF40] animate-pulse" />
              <span className="font-mono text-white/80">GLOBAL ICON</span>
            </div>

            {/* Quick Action Link */}
            <a
              href="#filmography"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D5FF40] hover:bg-[#b8e629] text-[#050505] font-space font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(213,255,64,0.35)] hover:shadow-[0_0_30px_rgba(213,255,64,0.6)] transform hover:-translate-y-0.5"
            >
              <span>Explore Films</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#111111] border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111111] border border-white/10 text-base font-space font-semibold text-white hover:text-[#D5FF40] hover:border-[#D5FF40]/40 transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#D5FF40]" />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#filmography"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-[#D5FF40] text-[#050505] font-space font-bold text-sm tracking-wider uppercase text-center"
            >
              Explore Filmography
            </a>
            <div className="text-center text-xs text-white/40 font-mono">
              NANDAMURI TARAKA RAMA RAO JR. RETROSPECTIVE
            </div>
          </div>
        </div>
      )}
    </>
  );
}
