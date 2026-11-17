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
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-8 lg:px-12 overflow-hidden"
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
            {/* Category Eyebrow */}
            <p className="text-xs uppercase tracking-[0.25em] text-[#315B4C] font-semibold mb-4 sm:mb-5">
              Personal Portfolio
            </p>

            {/* Display heading: Writer. Voice. Presence. */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold not-italic tracking-tight text-[#202321] leading-[1.04] mb-5 sm:mb-6 break-words">
              Writer. <span className="text-[#315B4C] not-italic font-bold">Voice.</span>
              <br />
              Presence.
            </h1>

            {/* Green divider rule */}
            <div className="w-16 h-0.5 bg-[#315B4C] mb-5 sm:mb-6" aria-hidden="true" />

            {/* Sub-tagline */}
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#B8863A] font-semibold mb-4 leading-relaxed">
              Anchor · Content Writer · Public Speaker · Broadcaster
            </p>

            {/* Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5A5955] leading-relaxed max-w-xl mb-7 sm:mb-8 font-normal">
              {profile.introduction} Recipient of the{" "}
              <strong className="text-[#202321] font-semibold">
                Youth Writer Award 2025
              </strong>{" "}
              conferred by the Government of Assam, empanelled State Anchor under the
              Directorate of Cultural Affairs, and author of 62 published literary
              articles.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#writing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#202321] text-[#F7F5F0] text-sm tracking-wide hover:bg-[#315B4C] transition-colors rounded-sm shadow-sm font-medium"
              >
                <span>Explore Work</span>
                <ArrowDown size={15} />
              </a>
              <button
                onClick={handleResumeClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#315B4C] text-[#315B4C] hover:bg-[#315B4C] hover:text-white text-sm tracking-wide transition-colors rounded-sm font-medium shadow-sm cursor-pointer"
                aria-label="Open Resume Popup"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Right — Portrait Presentation */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[290px] sm:max-w-sm px-2 sm:px-0">
              {/* Outer decorative frame */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border-2 border-[#D8D5CE] shadow-xl bg-white p-2">
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                  <Image
                    src={profile.portrait}
                    alt={profile.name}
                    fill
                    priority
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 400px"
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating Stat Badges (responsive bounds to prevent overflow) */}
              <div className="absolute -bottom-4 left-0 sm:-bottom-5 sm:-left-6 bg-[#1F2124] text-white p-3 sm:p-4 rounded-sm shadow-lg border-l-4 border-[#C49A58] max-w-[200px]">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#C49A58] font-bold">
                  Recognition
                </p>
                <p className="text-xs sm:text-sm font-medium leading-tight mt-0.5">
                  Youth Writer Award 2025
                </p>
              </div>

              <div className="absolute -top-3 right-0 sm:-top-4 sm:-right-5 bg-white text-[#202321] px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-sm shadow-md border border-[#D8D5CE]">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#5A5955] font-semibold">
                  Event Hosting
                </p>
                <p className="font-[var(--font-playfair)] text-xs sm:text-sm font-bold text-[#315B4C]">
                  100+ Events
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex items-center gap-3 text-[#5A5955]">
          <div className="w-8 h-px bg-[#D8D5CE]" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
