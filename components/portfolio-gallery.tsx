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

  // Map displayed index back to allItems for lightbox continuity
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
      {/* Filter bar */}
      <div
        className="flex flex-wrap gap-2 mb-8 border-b border-[#D8D5CE] pb-6"
        role="tablist"
        aria-label="Writing category filter"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 text-sm transition-colors rounded-sm ${
              filter === f.key
                ? "bg-[#315B4C] text-white"
                : "text-[#5A5955] hover:text-[#315B4C] border border-[#D8D5CE] hover:border-[#315B4C]"
            }`}
          >
            {f.label}
            <span className={`ml-2 text-xs ${filter === f.key ? "text-white/70" : "text-[#5A5955]/60"}`}>
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4"
        role="tabpanel"
        aria-label={`Showing ${displayed.length} items`}
      >
        {displayed.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="group relative bg-[#ECEAE4] border border-[#D8D5CE] overflow-hidden text-left hover:border-[#315B4C] transition-colors focus-visible:outline-2 focus-visible:outline-[#315B4C]"
            aria-label={`Open ${item.title} in viewer`}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                unoptimized
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#202321]/0 group-hover:bg-[#202321]/10 transition-colors" aria-hidden="true" />
            {/* Category tag */}
            <div className="absolute top-2 left-2">
              <span className={`text-[9px] uppercase tracking-widest px-1.5 py-0.5 font-medium ${
                item.category === "articles"
                  ? "bg-[#315B4C] text-white"
                  : "bg-[#202321] text-white"
              }`}>
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
