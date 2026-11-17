"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryLightbox from "./gallery-lightbox";
import type { PortfolioItem } from "@/data/portfolio";

type Filter = "all" | "articles" | "creative-writing";

interface PortfolioGalleryProps {
  articles: PortfolioItem[];
  creativeWriting: PortfolioItem[];
}

export default function PortfolioGallery({ articles, creativeWriting }: PortfolioGalleryProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allItems = [...articles, ...creativeWriting];

  const displayed =
    filter === "all"
      ? allItems
      : filter === "articles"
      ? articles
      : creativeWriting;

  const openLightbox = (indexInDisplayed: number) => {
    setLightboxIndex(indexInDisplayed);
  };

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All work", count: allItems.length },
    { key: "articles", label: "Newspaper articles", count: articles.length },
    { key: "creative-writing", label: "Creative writing", count: creativeWriting.length },
  ];

  return (
    <div>
      {/* Filter bar (horizontal scroll on mobile) */}
      <div
        className="flex items-center gap-2 mb-6 sm:mb-8 border-b border-[#D8D5CE] pb-4 sm:pb-6 overflow-x-auto no-scrollbar"
        role="tablist"
        aria-label="Writing category filter"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={`whitespace-nowrap px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-colors rounded-sm cursor-pointer shrink-0 ${
              filter === f.key
                ? "bg-[#315B4C] text-white shadow-xs"
                : "text-[#5A5955] hover:text-[#315B4C] border border-[#D8D5CE] hover:border-[#315B4C] bg-white/50"
            }`}
          >
            {f.label}
            <span
              className={`ml-1.5 sm:ml-2 text-[10px] sm:text-xs font-semibold ${
                filter === f.key ? "text-white/80" : "text-[#5A5955]/70"
              }`}
            >
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4"
        role="tabpanel"
        aria-label={`Showing ${displayed.length} items`}
      >
        {displayed.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative bg-[#ECEAE4] border border-[#D8D5CE] overflow-hidden text-left hover:border-[#315B4C] transition-colors rounded-xs focus:outline-hidden focus:ring-2 focus:ring-[#315B4C] cursor-pointer"
            aria-label={`Open ${item.title} in viewer`}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 20vw"
                unoptimized
              />
            </div>
            {/* Hover overlay */}
            <div
              className="absolute inset-0 bg-[#202321]/0 group-hover:bg-[#202321]/10 transition-colors pointer-events-none"
              aria-hidden="true"
            />
            {/* Category tag */}
            <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2">
              <span
                className={`text-[8px] sm:text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold rounded-xs ${
                  item.category === "articles"
                    ? "bg-[#315B4C] text-white"
                    : "bg-[#202321] text-white"
                }`}
              >
                {item.category === "articles" ? "Article" : "Creative"}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={displayed}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
