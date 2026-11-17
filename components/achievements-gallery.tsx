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
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-8 lg:px-12"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & awards"
          description="Certificates and recognitions from 2022–2024. Click any certificate to view in high resolution."
          id="achievements-heading"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4 md:gap-5">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative bg-white border border-[#D8D5CE] overflow-hidden hover:border-[#315B4C] hover:shadow-md transition-all duration-200 rounded-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#315B4C]"
              aria-label={`View ${item.title}`}
            >
              {/* Certificate-style container: preserve full certificate */}
              <div className="relative aspect-[3/4] w-full bg-[#FAFAF8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-1.5 sm:p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 20vw"
                  unoptimized
                />
              </div>

              {/* Footer label */}
              <div className="border-t border-[#ECEAE4] px-2.5 py-2 sm:px-3 sm:py-2.5 bg-white">
                <p className="text-[9px] uppercase tracking-wider text-[#315B4C] font-semibold mb-0.5">
                  Certificate
                </p>
                <p className="text-[11px] sm:text-xs text-[#5A5955] truncate font-medium">
                  {item.title}
                </p>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 ring-2 ring-transparent group-hover:ring-[#315B4C] transition-all pointer-events-none"
                aria-hidden="true"
              />
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
