import Link from "next/link";
import { ArrowDown, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-5 sm:px-8 lg:px-12"
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left — editorial typography hero */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Category label */}
            <p className="text-xs uppercase tracking-[0.2em] text-[#315B4C] mb-6 font-medium">
              Personal Portfolio
            </p>

            {/* Display heading */}
            <h1
              className="font-[var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-[#202321] mb-6"
            >
              Writer.{" "}
              <span className="italic text-[#315B4C]">Voice.</span>
              <br />
              Presence.
            </h1>

            {/* Divider rule */}
            <div className="w-16 h-px bg-[#315B4C] mb-6" aria-hidden="true" />

            {/* Introduction */}
            <p className="text-base sm:text-lg text-[#5A5955] leading-relaxed max-w-lg mb-8">
              A journalist, writer and media personality — with a body of work spanning
              newspaper articles, creative and literary writing, television debate
              participation, All India Radio programmes and event anchoring.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#writing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#202321] text-[#F7F5F0] text-sm tracking-wide hover:bg-[#315B4C] transition-colors"
              >
                Explore Work
                <ArrowDown size={14} />
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#D8D5CE] text-[#5A5955] text-sm tracking-wide hover:border-[#315B4C] hover:text-[#315B4C] transition-colors"
              >
                <FileText size={14} />
                View Resume
              </Link>
            </div>
          </div>

          {/* Right — editorial decoration */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end" aria-hidden="true">
            <div className="relative w-full max-w-sm">
              {/* Large decorative numeral */}
              <div className="text-[18rem] font-[var(--font-playfair)] font-bold text-[#ECEAE4] leading-none select-none text-right">
                S
              </div>
              {/* Stat badges */}
              <div className="absolute top-12 left-0 bg-[#ECEAE4] px-5 py-4 border-l-2 border-[#315B4C]">
                <p className="text-xs uppercase tracking-widest text-[#315B4C] mb-1">Work Areas</p>
                <p className="font-[var(--font-playfair)] text-lg font-semibold text-[#202321]">6 Disciplines</p>
              </div>
              <div className="absolute bottom-16 right-0 bg-white/80 px-5 py-4 border-l-2 border-[#202321]">
                <p className="text-xs uppercase tracking-widest text-[#5A5955] mb-1">Portfolio items</p>
                <p className="font-[var(--font-playfair)] text-lg font-semibold text-[#202321]">62 Works</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 lg:mt-24 flex items-center gap-3 text-[#5A5955]">
          <div className="w-8 h-px bg-[#D8D5CE]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
