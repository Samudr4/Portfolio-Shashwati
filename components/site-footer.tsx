"use client";

import { ArrowUp } from "lucide-react";

interface SiteFooterProps {
  onOpenResume?: () => void;
}

export default function SiteFooter({ onOpenResume }: SiteFooterProps) {
  return (
    <footer className="border-t border-[#D8D5CE] py-10 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-[var(--font-playfair)] text-sm font-semibold text-[#202321]">
            Shashwati Sabhapandit
          </p>
          <p className="text-xs text-[#5A5955] mt-0.5">
            Media & Communication Professional · Anchor · Writer · Broadcaster
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#5A5955]">
          <button
            onClick={onOpenResume}
            className="hover:text-[#315B4C] transition-colors font-medium underline-offset-4 hover:underline"
          >
            View Resume
          </button>
          <span>·</span>
          <span>Guwahati, Assam</span>
          <span>·</span>
          <a
            href="#top"
            className="flex items-center gap-1 hover:text-[#315B4C] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={12} />
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
