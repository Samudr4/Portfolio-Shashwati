interface AboutSectionProps {
  name?: string;
  professionalTitle?: string;
  introduction?: string;
  location?: string;
  languages?: string[];
  email?: string;
}

export default function AboutSection({
  name,
  professionalTitle,
  introduction,
  location,
  languages,
  email,
}: AboutSectionProps) {
  const hasProfile =
    name || professionalTitle || introduction || location || email;

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-5 sm:px-8 lg:px-12 bg-[#202321] text-[#F7F5F0]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left label */}
        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#315B4C] font-medium mb-3">
            About
          </p>
          <div className="w-8 h-px bg-[#315B4C]" aria-hidden="true" />
        </div>

        {/* Right content */}
        <div className="lg:col-span-9">
          {hasProfile ? (
            <>
              {name && (
                <h2
                  id="about-heading"
                  className="font-[var(--font-playfair)] text-3xl sm:text-4xl text-[#F7F5F0] mb-2"
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
                <p className="text-[#315B4C] text-sm uppercase tracking-widest mb-6">
                  {professionalTitle}
                </p>
              )}
              {introduction && (
                <p className="text-[#F7F5F0]/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                  {introduction}
                </p>
              )}
            </>
          ) : (
            <>
              <h2 id="about-heading" className="font-[var(--font-playfair)] text-3xl sm:text-4xl text-[#F7F5F0] mb-6">
                Professional overview
              </h2>
              <p className="text-[#F7F5F0]/70 text-base leading-relaxed mb-8 max-w-2xl">
                A multidisciplinary media professional with documented work across
                newspaper journalism, creative and literary writing, television debate
                participation, All India Radio broadcasts, and event anchoring — with
                multiple awards and recognitions from 2022 to 2024.
              </p>
            </>
          )}

          {/* Detail chips */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Newspaper articles", value: "31 published works" },
              { label: "Creative writing", value: "8 published pieces" },
              { label: "Media appearances", value: "TV & Radio" },
              { label: "Events hosted", value: "6 documented" },
              { label: "Awards", value: "2022–2024" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="border border-[#F7F5F0]/10 px-4 py-3 min-w-[140px]"
              >
                <p className="text-[9px] uppercase tracking-widest text-[#315B4C] mb-1">
                  {chip.label}
                </p>
                <p className="text-sm text-[#F7F5F0]/80">{chip.value}</p>
              </div>
            ))}
          </div>

          {/* Contact row — only show if supplied */}
          {(email || location) && (
            <div className="mt-8 pt-8 border-t border-[#F7F5F0]/10 flex flex-wrap gap-6 text-sm text-[#F7F5F0]/60">
              {location && <span>📍 {location}</span>}
              {email && (
                <a href={`mailto:${email}`} className="hover:text-[#315B4C] transition-colors">
                  ✉ {email}
                </a>
              )}
              {languages && languages.length > 0 && (
                <span>🗣 {languages.join(", ")}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
