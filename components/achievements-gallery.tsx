"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryLightbox from "./gallery-lightbox";
import SectionHeading from "./section-heading";
import type { PortfolioItem } from "@/data/portfolio";

interface AchievementsGalleryProps {
  items: PortfolioItem[];
}

export default function AchievementsGallery({ items }: AchievementsGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="achievements"
      className="py-20 md:py-28 px-5 sm:px-8 lg:px-12"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & awards"
          description="Certificates and recognitions from 2022–2024. Click any item to view full detail."
          id="achievements-heading"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative bg-white border border-[#D8D5CE] overflow-hidden hover:border-[#315B4C] hover:shadow-md transition-all duration-200"
              aria-label={`View ${item.title}`}
            >
              {/* Certificate-style container: use contain to preserve full cert */}
              <div className="relative aspect-[3/4] w-full bg-[#FAFAF8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  unoptimized
                />
              </div>

              {/* Footer label */}
              <div className="border-t border-[#ECEAE4] px-3 py-2.5">
                <p className="text-[10px] uppercase tracking-widest text-[#315B4C] font-medium mb-0.5">
                  Certificate
                </p>
                <p className="text-xs text-[#5A5955] truncate">{item.title}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-[#315B4C] transition-all pointer-events-none" aria-hidden="true" />
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
