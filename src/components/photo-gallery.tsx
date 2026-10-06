"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/ntr-data";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Portraits", "Film Stills", "Events", "Editorial"];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#D5FF40]/30 text-xs font-mono text-[#D5FF40] mb-3">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>OFFICIAL PHOTOGRAPHIC ARCHIVE</span>
            </div>
            <h2 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              Photo Archive &amp; Portraits
            </h2>
            <p className="font-inter text-base sm:text-lg text-white/60 max-w-xl mt-3">
              Curated photographic gallery featuring authentic portraits, red carpet moments, and iconic promotional appearances of Jr. NTR.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-space font-semibold tracking-wider uppercase transition-all duration-300 border ${
                    isActive
                      ? "bg-[#D5FF40] text-black border-[#D5FF40] shadow-[0_0_15px_rgba(213,255,64,0.35)]"
                      : "bg-[#111111] text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden bg-[#111111] border border-white/10 hover:border-[#D5FF40]/50 transition-all duration-500 group cursor-pointer shadow-lg hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(213,255,64,0.15)]"
            >
              {/* Ambient Blurred Glow Behind Card */}
              <div className="absolute inset-0 -z-10 filter blur-xl opacity-40 scale-105 pointer-events-none transition-opacity duration-300 group-hover:opacity-70">
                <Image
                  src={item.image}
                  alt="Ambient"
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className={`relative w-full ${
                  item.aspect === "tall"
                    ? "aspect-[3/4]"
                    : item.aspect === "wide"
                    ? "aspect-[16/10]"
                    : "aspect-square"
                } overflow-hidden`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Corner Frame Brackets on Hover */}
                <div className="absolute inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D5FF40]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D5FF40]" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D5FF40]" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D5FF40]" />
                </div>

                {/* Top Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#D5FF40]/40 text-[10px] font-mono text-[#D5FF40] uppercase">
                    {item.category}
                  </span>
                  <span className="px-2 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/60">
                    {item.year}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="font-space font-bold text-base sm:text-lg text-white group-hover:text-[#D5FF40] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-inter text-xs text-white/70 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-in fade-in duration-300">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/80 hover:bg-[#D5FF40] hover:text-black text-white border border-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-black/80 hover:bg-[#D5FF40] hover:text-black text-white border border-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-black/80 hover:bg-[#D5FF40] hover:text-black text-white border border-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center">
            <div className="relative w-full aspect-[16/10] max-h-[75vh] rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-left p-4 rounded-2xl bg-[#111111] border border-white/10 gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D5FF40] mb-1">
                  <span>{filteredItems[lightboxIndex].category}</span>
                  <span>&bull;</span>
                  <span>{filteredItems[lightboxIndex].year}</span>
                </div>
                <h3 className="font-space font-bold text-lg text-white">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-white/70 mt-0.5">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>

              <div className="font-mono text-xs text-white/40 whitespace-nowrap">
                IMAGE {lightboxIndex + 1} OF {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
