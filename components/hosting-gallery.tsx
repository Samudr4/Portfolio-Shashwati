"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryLightbox from "./gallery-lightbox";
import SectionHeading from "./section-heading";
import type { PortfolioItem } from "@/data/portfolio";

interface HostingGalleryProps {
  items: PortfolioItem[];
}

export default function HostingGallery({ items }: HostingGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="hosting"
      className="py-20 md:py-28 px-5 sm:px-8 lg:px-12 bg-[#ECEAE4]/30"
      aria-labelledby="hosting-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Event hosting"
          title="On stage"
          description="Selected photographs from events hosted as anchor and compère."
          id="hosting-heading"
        />

        {/* Masonry-inspired editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative overflow-hidden border border-[#D8D5CE] hover:border-[#315B4C] transition-colors bg-[#ECEAE4] ${
                // First item spans 2 columns on larger screens for editorial variation
                idx === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
              aria-label={`View ${item.title}`}
            >
              <div
                className={`relative w-full ${
                  idx === 0 ? "aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes={idx === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-[#202321]/0 group-hover:bg-[#202321]/15 transition-colors" aria-hidden="true" />
              {/* Source page badge */}
              <span className="absolute bottom-2 right-2 text-[9px] text-white/70 bg-black/40 px-1.5 py-0.5 rounded-sm">
                p.{item.sourcePage}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
