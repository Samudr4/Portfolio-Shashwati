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
    // Lock scroll
    document.body.style.overflow = "hidden";
    // Focus close button on mount
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#202321]/95 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing: ${item.title}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close */}
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white p-2 transition-colors z-10"
        aria-label="Close viewer"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 text-white/50 text-sm font-[var(--font-inter)] tabular-nums">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Prev */}
      {items.length > 1 && (
        <button
          onClick={goPrev}
          className="absolute left-3 sm:left-6 text-white/70 hover:text-white p-3 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <div className="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center">
        <div className="relative w-full" style={{ maxHeight: "80vh" }}>
          <Image
            src={item.image}
            alt={item.title}
            width={1200}
            height={900}
            className="object-contain max-h-[80vh] w-auto mx-auto"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Next */}
      {items.length > 1 && (
        <button
          onClick={goNext}
          className="absolute right-3 sm:right-6 text-white/70 hover:text-white p-3 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Caption bar */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
        <p className="text-white/80 text-sm text-center">
          {item.title}
          {item.caption && <span className="text-white/60"> — {item.caption}</span>}
          <span className="text-white/40 ml-3 text-xs">Source p. {item.sourcePage}</span>
        </p>
      </div>
    </div>
  );
}
