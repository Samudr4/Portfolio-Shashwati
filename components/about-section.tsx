import Image from "next/image";

interface AboutSectionProps {
  name?: string;
  professionalTitle?: string;
  introduction?: string;
  aboutImage?: string;
  location?: string;
  languages?: string[];
  email?: string;
}

export default function AboutSection({
  name,
  professionalTitle,
  introduction,
  aboutImage,
  location,
  languages,
  email,
}: AboutSectionProps) {
  const hasProfile =
    name || professionalTitle || introduction || location || email;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-8 lg:px-12 bg-[#202321] text-[#F7F5F0]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column — Editorial Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C49A58] font-bold mb-3">
            About
          </p>
          <div className="w-12 h-px bg-[#315B4C] mb-6" aria-hidden="true" />

          {aboutImage && (
            <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-sm rounded-sm overflow-hidden border border-[#F7F5F0]/15 shadow-2xl bg-[#292C29]">
              <Image
                src={aboutImage}
                alt={name || "Shashwati Sabhapandit"}
                fill
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 420px"
                unoptimized
              />
              <div
                className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"
                aria-hidden="true"
              />
              {/* Subtle caption pill */}
              <div className="absolute bottom-3 left-3 bg-[#1F2124]/90 backdrop-blur-xs px-3 py-1.5 rounded-xs border-l-2 border-[#C49A58]">
                <p className="text-[10px] uppercase tracking-wider text-[#C49A58] font-semibold">
                  Writer & Literary Contributor
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column — Biography & Credentials */}
        <div className="lg:col-span-7">
          {hasProfile ? (
            <>
              {name && (
                <h2
                  id="about-heading"
                  className="font-[var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl text-[#F7F5F0] mb-2 leading-tight"
                >
                  {name}
                </h2>
              )}
              {!name && (
                <h2 id="about-heading" className="sr-only">
                  About
                </h2>
              )}
              {professionalTitle && (
                <p className="text-[#C49A58] text-xs sm:text-sm uppercase tracking-widest font-medium mb-5 sm:mb-6 leading-relaxed">
                  {professionalTitle}
                </p>
              )}
              {introduction && (
                <p className="text-[#F7F5F0]/85 text-sm sm:text-base lg:text-lg leading-relaxed mb-7 sm:mb-8 font-light">
                  {introduction}
                </p>
              )}
            </>
          ) : (
            <>
              <h2
                id="about-heading"
                className="font-[var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl text-[#F7F5F0] mb-5 leading-tight"
              >
                Professional Overview
              </h2>
              <p className="text-[#F7F5F0]/70 text-sm sm:text-base leading-relaxed mb-7 sm:mb-8">
                A multidisciplinary media professional with documented work across
                newspaper journalism, creative and literary writing, television debate
                participation, All India Radio broadcasts, and event anchoring.
              </p>
            </>
          )}

          {/* Detail chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 mb-7 sm:mb-8">
            {[
              { label: "Published Articles", value: "62 Literary Pieces" },
              { label: "Events Hosted", value: "100+ Public Events" },
              { label: "Television", value: "NKTV, News18, Assam Talks" },
              { label: "Radio Broadcast", value: "All India Radio & Ruit" },
              { label: "Recognition", value: "Youth Writer Award 2025" },
              { label: "State Anchor", value: "Directorate of Cultural Affairs" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="border border-[#F7F5F0]/10 bg-white/[0.02] p-3 sm:p-3.5 rounded-sm"
              >
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C49A58] font-semibold mb-1 leading-snug">
                  {chip.label}
                </p>
                <p className="text-xs sm:text-sm text-[#F7F5F0]/90 font-medium leading-snug">
                  {chip.value}
                </p>
              </div>
            ))}
          </div>

          {/* Contact row */}
          {(email || location) && (
            <div className="pt-6 border-t border-[#F7F5F0]/15 flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-6 text-xs sm:text-sm text-[#F7F5F0]/75">
              {location && (
                <span className="flex items-center gap-2">
                  <span className="text-[#C49A58]">📍</span> {location}
                </span>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 hover:text-[#C49A58] transition-colors break-all"
                >
                  <span className="text-[#C49A58]">✉</span> {email}
                </a>
              )}
              {languages && languages.length > 0 && (
                <span className="flex items-center gap-2">
                  <span className="text-[#C49A58]">🗣</span> {languages.join(", ")}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
