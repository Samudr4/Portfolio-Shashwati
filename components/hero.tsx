"use client";

import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.location.href = "/resume";
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-5 sm:px-8 lg:px-12"
      aria-label="Introduction"
    >
      {/* Subtle background rule lines — editorial texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #202321 0px, #202321 1px, transparent 1px, transparent 48px)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — editorial typography hero */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Category label */}
            <p className="text-xs uppercase tracking-[0.2em] text-[#315B4C] mb-4 font-semibold">
              Media & Communication Professional
            </p>

            {/* Display heading with Name */}
            <h1 className="font-[var(--font-playfair)] text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#202321] mb-5">
              Shashwati <br />
              <span className="italic text-[#315B4C]">Sabhapandit</span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-sm uppercase tracking-widest text-[#B8863A] font-medium mb-6">
              Anchor · Content Writer · Public Speaker · Broadcaster
            </p>

            {/* Divider rule */}
            <div className="w-16 h-px bg-[#315B4C] mb-6" aria-hidden="true" />

            {/* Introduction */}
            <p className="text-base sm:text-lg text-[#5A5955] leading-relaxed max-w-xl mb-8">
              {profile.introduction} Recipient of the{" "}
              <strong className="text-[#202321] font-semibold">
                Youth Writer Award 2025
              </strong>{" "}
              conferred by the Government of Assam, empanelled State Anchor under the
              Directorate of Cultural Affairs, and author of 62 published literary
              articles.
            </p>

            {/* CTAs: Only Explore Work & View Resume */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#writing"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#202321] text-[#F7F5F0] text-sm tracking-wide hover:bg-[#315B4C] transition-colors rounded-sm shadow-sm"
              >
                Explore Work
                <ArrowDown size={15} />
              </a>
              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#315B4C] text-[#315B4C] hover:bg-[#315B4C] hover:text-white text-sm tracking-wide transition-colors rounded-sm font-medium shadow-sm"
                aria-label="Open Resume Popup"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Right — Portrait Presentation */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative frame */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border-2 border-[#D8D5CE] shadow-xl bg-white p-2">
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                  <Image
                    src={profile.portrait}
                    alt={profile.name}
                    fill
                    priority
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating Stat Badges */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#1F2124] text-white p-3.5 sm:p-4 rounded-sm shadow-lg border-l-4 border-[#C49A58]">
                <p className="text-[10px] uppercase tracking-widest text-[#C49A58] font-bold">
                  Recognition
                </p>
                <p className="text-xs sm:text-sm font-medium">
                  Youth Writer Award 2025
                </p>
              </div>

              <div className="absolute -top-4 -right-3 sm:-right-5 bg-white text-[#202321] px-3.5 py-2.5 rounded-sm shadow-md border border-[#D8D5CE]">
                <p className="text-[10px] uppercase tracking-widest text-[#5A5955] font-semibold">
                  Event Hosting
                </p>
                <p className="font-[var(--font-playfair)] text-sm font-bold text-[#315B4C]">
                  100+ Events
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 lg:mt-20 flex items-center gap-3 text-[#5A5955]">
          <div className="w-8 h-px bg-[#D8D5CE]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
