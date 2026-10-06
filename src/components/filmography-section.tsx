"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MOVIES, Movie } from "@/data/ntr-data";
import { Star, Film, X, Search, CheckCircle, Info } from "lucide-react";

export function FilmographySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalMovie, setActiveModalMovie] = useState<Movie | null>(null);

  const categories = ["All", "Action", "Drama", "Historical", "Blockbusters"];

  const filteredMovies = MOVIES.filter((movie) => {
    const matchesCat = selectedCategory === "All" || movie.category === selectedCategory;
    const matchesSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="filmography" className="relative py-28 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#D5FF40]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#D5FF40]/30 text-xs font-mono text-[#D5FF40] mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>OFFICIAL FILMOGRAPHY ARCHIVE</span>
            </div>
            <h2 className="font-space font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              Landmark Filmography
            </h2>
            <p className="font-inter text-base sm:text-lg text-white/60 max-w-xl mt-3">
              Comprehensive record of career-defining Telugu and Pan-Indian feature films sourced from verified historical archives.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search title, role, director..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111111] border border-white/10 focus:border-[#D5FF40] text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-space font-semibold tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-[#D5FF40] text-black border-[#D5FF40] shadow-[0_0_20px_rgba(213,255,64,0.35)]"
                    : "bg-[#111111] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Movie Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setActiveModalMovie(movie)}
              className="group relative rounded-3xl bg-[#111111] border border-white/10 overflow-hidden cursor-pointer hover:border-[#D5FF40]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(213,255,64,0.15)] flex flex-col justify-between"
            >
              {/* Ambient Blurred Glow Underlay */}
              <div className="absolute inset-0 -z-10 filter blur-xl opacity-30 scale-105 pointer-events-none transition-opacity duration-300 group-hover:opacity-60">
                <Image
                  src={movie.poster}
                  alt="Ambient"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Poster Art */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/60">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30" />

                {/* Rating Badge */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-1.5 text-xs font-mono text-white">
                  <Star className="w-3.5 h-3.5 text-[#D5FF40] fill-[#D5FF40]" />
                  <span>{movie.rating.split(" ")[0]}</span>
                </div>

                {/* Category & Year Tag */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#D5FF40]/30 text-[11px] font-mono text-[#D5FF40]">
                    {movie.category}
                  </span>
                  <span className="px-2 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/60">
                    {movie.year}
                  </span>
                </div>

                {/* Info Inspection Overlay (No Video Play Icon) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-[#D5FF40] text-[#D5FF40] text-xs font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(213,255,64,0.3)]">
                    <Info className="w-4 h-4" />
                    <span>View Film Details</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs font-mono text-[#D5FF40] mb-1">
                    AS {movie.role.toUpperCase()}
                  </div>
                  <h3 className="font-space font-bold text-xl text-white group-hover:text-[#D5FF40] transition-colors leading-snug">
                    {movie.title}
                  </h3>
                  <p className="font-inter text-xs text-white/60 mt-2 line-clamp-2 leading-relaxed">
                    {movie.synopsis}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                  <span>Dir: {movie.director}</span>
                  <span className="text-[#D5FF40] font-medium">{movie.boxOffice.split(" ")[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="py-20 text-center text-white/40 font-mono">
            No films found matching &quot;{searchQuery}&quot;.
          </div>
        )}
      </div>

      {/* Film Information Modal (No Video Players) */}
      {activeModalMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#111111] border border-[#D5FF40]/30 shadow-[0_0_60px_rgba(213,255,64,0.2)] overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalMovie(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 hover:bg-[#D5FF40] hover:text-black text-white border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Banner Backdrop */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-black">
              <Image
                src={activeModalMovie.backdrop}
                alt={activeModalMovie.title}
                fill
                className="object-cover object-center filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D5FF40] text-black text-[11px] font-mono font-bold uppercase">
                    {activeModalMovie.category}
                  </span>
                  <span className="text-xs font-mono text-white/70">
                    RELEASE YEAR {activeModalMovie.year}
                  </span>
                </div>
                <h3 className="font-space font-extrabold text-2xl sm:text-4xl text-white">
                  {activeModalMovie.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#D5FF40] italic mt-0.5">
                  &ldquo;{activeModalMovie.tagline}&rdquo;
                </p>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-white/10 font-mono text-xs">
                <div>
                  <span className="text-white/40 block">Character</span>
                  <span className="text-white font-bold">{activeModalMovie.role}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Director</span>
                  <span className="text-white font-bold">{activeModalMovie.director}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Rating</span>
                  <span className="text-[#D5FF40] font-bold">{activeModalMovie.rating}</span>
                </div>
                <div>
                  <span className="text-white/40 block">Box Office Verdict</span>
                  <span className="text-white font-bold">{activeModalMovie.boxOffice}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-2">
                  Official Plot Synopsis
                </h4>
                <p className="text-sm sm:text-base font-inter text-white/80 leading-relaxed">
                  {activeModalMovie.synopsis}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#D5FF40] uppercase tracking-wider mb-3">
                  Wikipedia Archive Notes &amp; Records
                </h4>
                <div className="space-y-2">
                  {activeModalMovie.wikipediaNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#161616] border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-white/90"
                    >
                      <CheckCircle className="w-4 h-4 text-[#D5FF40] mt-0.5 flex-shrink-0" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <div className="pt-4 flex items-center justify-end border-t border-white/10">
                <button
                  onClick={() => setActiveModalMovie(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#D5FF40] text-black text-xs font-space font-bold uppercase tracking-wider hover:bg-[#b8e629] transition-colors"
                >
                  Close Record
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
