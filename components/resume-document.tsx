import Image from "next/image";
import {
  resumeProfile,
  educationList,
  professionalExperience,
  leadershipExperience,
  achievementsList,
} from "@/data/resume";

export default function ResumeDocument() {
  return (
    <div
      id="printable-resume"
      className="bg-white text-[#202321] max-w-4xl mx-auto shadow-sm border border-[#D8D5CE] grid md:grid-cols-[280px_1fr] print:border-none print:shadow-none"
    >
      {/* ── Left Sidebar (Dark Charcoal) ── */}
      <aside className="bg-[#1F2124] text-[#E5E5E5] p-5 sm:p-8 flex flex-col gap-6 sm:gap-7 print:bg-[#1F2124] print:text-[#E5E5E5]">
        {/* Profile photo */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-3 sm:border-4 border-[#315B4C]/80 shadow-md mb-2">
            <Image
              src={resumeProfile.portrait}
              alt={resumeProfile.name}
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
        </div>

        {/* Profile */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#C49A58] font-bold mb-2 pb-1 border-b border-[#3A3D42]">
            Profile
          </h2>
          <p className="text-xs text-[#D1D1D1] leading-relaxed">
            {resumeProfile.summary}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#C49A58] font-bold mb-2 pb-1 border-b border-[#3A3D42]">
            Contact
          </h2>
          <div className="text-xs text-[#D1D1D1] space-y-1.5">
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a href={`tel:${resumeProfile.phone}`} className="hover:underline">
                {resumeProfile.phone}
              </a>
            </p>
            <p className="break-all">
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href={`mailto:${resumeProfile.email}`} className="hover:underline">
                {resumeProfile.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span>{" "}
              {resumeProfile.location}
            </p>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#C49A58] font-bold mb-2 pb-1 border-b border-[#3A3D42]">
            Languages
          </h2>
          <ul className="text-xs text-[#D1D1D1] space-y-1">
            {resumeProfile.languages.map((lang) => (
              <li key={lang} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49A58]" />
                {lang}
              </li>
            ))}
          </ul>
        </div>

        {/* Education & Qualifications */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#C49A58] font-bold mb-3 pb-1 border-b border-[#3A3D42]">
            Education & Qualifications
          </h2>
          <div className="space-y-3.5 text-xs">
            {educationList.map((edu, idx) => (
              <div key={idx}>
                <p className="font-semibold text-white leading-snug">{edu.degree}</p>
                {edu.institution && (
                  <p className="italic text-[#A8A8A8] text-[11px] mt-0.5">
                    {edu.institution}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Right Content Column (Light) ── */}
      <main className="p-5 sm:p-9 bg-white flex flex-col gap-5 sm:gap-6">
        {/* Header */}
        <header className="border-b-2 border-[#C49A58] pb-3 sm:pb-4">
          <h1 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F2124] uppercase leading-tight mb-2">
            {resumeProfile.name}
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-[#B8863A] tracking-wide">
            {resumeProfile.title}
          </p>
        </header>

        {/* Professional Experience */}
        <section>
          <h2 className="font-[var(--font-playfair)] text-lg sm:text-xl font-bold text-[#1F2124] mb-3 pb-1 border-b border-[#E5E3DE]">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {professionalExperience.map((exp, idx) => (
              <div key={idx} className="text-xs">
                <h3 className="font-bold text-[#202321] text-sm mb-0.5">
                  {exp.title}
                </h3>
                {exp.description && (
                  <p className="text-[#4A4B4D] leading-relaxed mb-1.5">
                    {exp.description}
                  </p>
                )}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-disc list-inside space-y-0.5 text-[#4A4B4D] ml-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Experience */}
        <section>
          <h2 className="font-[var(--font-playfair)] text-lg sm:text-xl font-bold text-[#1F2124] mb-3 pb-1 border-b border-[#E5E3DE]">
            Leadership Experience
          </h2>
          <div className="space-y-2 text-xs">
            {leadershipExperience.map((lead, idx) => (
              <p key={idx} className="text-[#333]">
                <strong className="font-semibold text-[#202321]">{lead.title}</strong>,{" "}
                <span className="text-[#555]">{lead.organisation}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Achievements & Honours */}
        <section>
          <h2 className="font-[var(--font-playfair)] text-lg sm:text-xl font-bold text-[#1F2124] mb-3 pb-1 border-b border-[#E5E3DE]">
            Achievements & Honours
          </h2>
          <div className="space-y-3.5 text-xs">
            {achievementsList.map((ach, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-[#202321] text-sm mb-0.5">
                  {ach.title}
                </h3>
                <p className="text-[#4A4B4D] leading-relaxed">{ach.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
