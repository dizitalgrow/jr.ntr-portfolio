"use client";

import React from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FilmographySection } from "@/components/filmography-section";
import { AwardsSection } from "@/components/awards-section";
import { GlobalImpactSection } from "@/components/global-impact-section";
import { CommunitySection } from "@/components/community-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { QuoteSection } from "@/components/quote-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#D5FF40] selection:text-[#050505] font-inter overflow-hidden">
        {/* Subtle Ambient Mouse Spotlight */}
        <CursorSpotlight />

        {/* Global Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Biography & Milestone Journey */}
        <AboutSection />

        {/* Landmark Filmography Archive */}
        <FilmographySection />

        {/* Awards & Honors Dashboard */}
        <AwardsSection />

        {/* Global Cultural Footprint & World Map */}
        <GlobalImpactSection />

        {/* Interactive Neon Fan Wall */}
        <CommunitySection />

        {/* Photo Archive & Portraits */}
        <PhotoGallery />

        {/* Immersive Quote Section */}
        <QuoteSection />

        {/* Dark Luxury Glassmorphism Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
