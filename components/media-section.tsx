"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryLightbox from "./gallery-lightbox";
import SectionHeading from "./section-heading";
import type { PortfolioItem } from "@/data/portfolio";

interface MediaSectionProps {
  television: PortfolioItem[];
  radio: PortfolioItem[];
}

function MediaGrid({ items, label }: { items: PortfolioItem[]; label: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.2em] text-[#5A5955] font-medium mb-4">
        {label}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative bg-[#ECEAE4] border border-[#D8D5CE] overflow-hidden hover:border-[#315B4C] transition-colors"
            aria-label={`View ${item.title}`}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, 25vw"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-[#202321]/0 group-hover:bg-[#202321]/10 transition-colors" aria-hidden="true" />
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

export default function MediaSection({ television, radio }: MediaSectionProps) {
  return (
    <section
      id="media"
      className="py-20 md:py-28 px-5 sm:px-8 lg:px-12"
      aria-labelledby="media-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Media"
          title="Broadcast appearances"
          description="Participation in television debate programmes and All India Radio broadcasts."
          id="media-heading"
        />

        <div className="space-y-12">
          <div className="bg-[#ECEAE4]/40 border border-[#D8D5CE] p-6 md:p-8">
            <MediaGrid items={television} label="Television debates" />
          </div>

          <div className="bg-[#ECEAE4]/40 border border-[#D8D5CE] p-6 md:p-8">
            <MediaGrid items={radio} label="All India Radio programmes" />
          </div>
        </div>
      </div>
    </section>
  );
}
