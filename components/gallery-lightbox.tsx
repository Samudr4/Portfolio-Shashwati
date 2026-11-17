"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

interface GalleryLightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const item = items[currentIndex];
  const closeRef = useRef<HTMLButtonElement>(null);

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#161817]/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${item.title}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar (Counter & Close) */}
      <div className="absolute top-3 inset-x-3 sm:top-5 sm:inset-x-6 flex items-center justify-between z-20 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-xs text-white/80 text-xs sm:text-sm px-2.5 py-1 rounded-sm tabular-nums font-medium pointer-events-auto">
          {currentIndex + 1} / {items.length}
        </div>

        <button
          ref={closeRef}
          onClick={onClose}
          className="bg-black/50 hover:bg-black/80 backdrop-blur-xs text-white/80 hover:text-white p-2 sm:p-2.5 rounded-full transition-colors pointer-events-auto cursor-pointer"
          aria-label="Close viewer"
        >
          <X size={20} />
        </button>
      </div>

      {/* Prev Button */}
      {items.length > 1 && (
        <button
          onClick={goPrev}
          className="absolute left-2 sm:left-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/75 backdrop-blur-xs p-2 sm:p-3 rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={22} className="sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Image Container */}
      <div className="relative w-full max-w-4xl max-h-[75vh] sm:max-h-[82vh] flex items-center justify-center px-1">
        <div className="relative w-full max-h-[75vh] sm:max-h-[82vh] flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.title}
            width={1200}
            height={900}
            className="object-contain max-h-[72vh] sm:max-h-[80vh] w-auto mx-auto select-none"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Next Button */}
      {items.length > 1 && (
        <button
          onClick={goNext}
          className="absolute right-2 sm:right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/75 backdrop-blur-xs p-2 sm:p-3 rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={22} className="sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Caption bar */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 sm:px-6 pt-6 pb-4 sm:pb-5">
        <p className="text-white/90 text-xs sm:text-sm text-center leading-snug max-w-xl mx-auto">
          <span className="font-medium">{item.title}</span>
          {item.caption && <span className="text-white/70"> — {item.caption}</span>}
          <span className="text-white/50 ml-2 text-[11px] sm:text-xs">
            (Source p. {item.sourcePage})
          </span>
        </p>
      </div>
    </div>
  );
}
