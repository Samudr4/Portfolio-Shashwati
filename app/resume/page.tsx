import type { Metadata } from "next";
import Link from "next/link";
import { resumeProfile, resumeSections } from "@/data/resume";
import PrintResumeButton from "@/components/print-resume-button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Portfolio",
  description: "Professional resume — writing, media appearances, event hosting and achievements.",
};

export default function ResumePage() {
  const hasContact =
    resumeProfile.email ||
    resumeProfile.phone ||
    resumeProfile.location ||
    resumeProfile.website;

  return (
    <>
      {/* Back + Print controls — hidden on print */}
      <div className="no-print fixed top-0 inset-x-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-[#D8D5CE]">
        <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[#5A5955] hover:text-[#315B4C] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
          <PrintResumeButton />
        </div>
      </div>

      {/* Resume document */}
      <main className="pt-20 pb-20 px-5 sm:px-8">
        <article
          className="max-w-3xl mx-auto"
          aria-label="Professional resume"
        >
          {/* Header */}
          <header className="mb-10 pb-8 border-b-2 border-[#202321]">
            {resumeProfile.name ? (
              <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl text-[#202321] mb-2">
                {resumeProfile.name}
              </h1>
            ) : (
              <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl text-[#202321] mb-2">
                Professional Portfolio
              </h1>
            )}

            {resumeProfile.title && (
              <p className="text-[#315B4C] text-sm uppercase tracking-widest mb-4">
                {resumeProfile.title}
              </p>
            )}

            {!resumeProfile.title && (
              <p className="text-[#5A5955] text-base mb-4">
                Writer · Media Contributor · Event Host
              </p>
            )}

            {hasContact && (
              <div className="flex flex-wrap gap-4 text-sm text-[#5A5955]">
                {resumeProfile.email && (
                  <span>
                    <span className="text-[#315B4C]">Email</span>{" "}
                    <a href={`mailto:${resumeProfile.email}`} className="hover:underline">
                      {resumeProfile.email}
                    </a>
                  </span>
                )}
                {resumeProfile.phone && (
                  <span>
                    <span className="text-[#315B4C]">Phone</span> {resumeProfile.phone}
                  </span>
                )}
                {resumeProfile.location && (
                  <span>
                    <span className="text-[#315B4C]">Location</span>{" "}
                    {resumeProfile.location}
                  </span>
                )}
                {resumeProfile.website && (
                  <span>
                    <span className="text-[#315B4C]">Web</span>{" "}
                    <a href={resumeProfile.website} className="hover:underline">
                      {resumeProfile.website}
                    </a>
                  </span>
                )}
              </div>
            )}

            {resumeProfile.languages.length > 0 && (
              <p className="mt-3 text-sm text-[#5A5955]">
                <span className="text-[#315B4C]">Languages</span>{" "}
                {resumeProfile.languages.join(", ")}
              </p>
            )}
          </header>

          {/* Summary */}
          {resumeProfile.summary && (
            <section className="mb-10" aria-labelledby="summary-heading">
              <h2
                id="summary-heading"
                className="text-xs uppercase tracking-[0.2em] text-[#315B4C] font-medium mb-3"
              >
                Professional Summary
              </h2>
              <p className="text-[#202321] leading-relaxed">{resumeProfile.summary}</p>
            </section>
          )}

          {/* Profile note when empty */}
          {!resumeProfile.name && !resumeProfile.summary && (
            <div className="mb-10 p-4 border border-[#D8D5CE] bg-[#ECEAE4]/40 text-sm text-[#5A5955]">
              <strong className="text-[#315B4C]">Note:</strong> Personal details (name, contact, summary) are
              editable in <code className="text-xs bg-[#ECEAE4] px-1 py-0.5">data/resume.ts</code>.
              Fill in after owner confirmation.
            </div>
          )}

          {/* Resume sections */}
          {resumeSections
            .filter((s) => s.entries.length > 0)
            .map((section) => (
              <section
                key={section.heading}
                className="mb-10"
                aria-labelledby={`section-${section.heading.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <h2
                  id={`section-${section.heading.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.2em] text-[#315B4C] font-medium mb-4 pb-2 border-b border-[#D8D5CE]"
                >
                  {section.heading}
                </h2>

                <div className="space-y-5">
                  {section.entries.map((entry, i) => (
                    <div key={i} className="grid sm:grid-cols-[1fr_auto] gap-1">
                      <div>
                        <h3 className="font-[var(--font-playfair)] text-lg text-[#202321]">
                          {entry.title}
                        </h3>
                        {entry.organisation && (
                          <p className="text-sm text-[#315B4C]">{entry.organisation}</p>
                        )}
                        {entry.description && (
                          <p className="text-sm text-[#5A5955] mt-1 leading-relaxed">
                            {entry.description}
                          </p>
                        )}
                      </div>
                      {entry.period && (
                        <p className="text-xs text-[#5A5955] whitespace-nowrap sm:text-right mt-1">
                          {entry.period}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}

          {/* Footer note */}
          <footer className="mt-16 pt-6 border-t border-[#D8D5CE]">
            <p className="text-xs text-[#5A5955]/60 text-center">
              Portfolio available at{" "}
              {resumeProfile.website || "[portfolio URL — owner to confirm]"}.
              All work evidenced in portfolio document.
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
