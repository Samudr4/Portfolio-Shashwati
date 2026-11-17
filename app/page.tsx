"use client";

import { useState } from "react";
import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import PortfolioGallery from "@/components/portfolio-gallery";
import MediaSection from "@/components/media-section";
import HostingGallery from "@/components/hosting-gallery";
import AchievementsGallery from "@/components/achievements-gallery";
import SiteFooter from "@/components/site-footer";
import SectionHeading from "@/components/section-heading";
import ResumeModal from "@/components/resume-modal";
import {
  profile,
  articles,
  creativeWriting,
  television,
  radio,
  hosting,
  achievements,
} from "@/data/portfolio";

export default function HomePage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const openResume = () => setResumeOpen(true);
  const closeResume = () => setResumeOpen(false);

  return (
    <>
      <SiteHeader onOpenResume={openResume} />
      <main>
        {/* ── Hero ── */}
        <Hero onOpenResume={openResume} />

        {/* ── About ── */}
        <AboutSection
          name={profile.name}
          professionalTitle={profile.professionalTitle}
          introduction={profile.introduction}
          location={profile.location}
          languages={profile.languages}
          email={profile.email}
        />

        {/* ── Writing Archive ── */}
        <section
          id="writing"
          className="py-20 md:py-28 px-5 sm:px-8 lg:px-12"
          aria-labelledby="writing-heading"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Writing"
              title="Published work"
              description="Author of 62 published literary articles and creative pieces across leading newspapers and magazines. Click any clipping to inspect in full resolution."
              id="writing-heading"
            />
            <PortfolioGallery
              articles={articles}
              creativeWriting={creativeWriting}
            />
          </div>
        </section>

        {/* ── Media Appearances ── */}
        <div className="border-t border-[#D8D5CE]">
          <MediaSection television={television} radio={radio} />
        </div>

        {/* ── Event Hosting ── */}
        <div className="border-t border-[#D8D5CE]">
          <HostingGallery items={hosting} />
        </div>

        {/* ── Achievements ── */}
        <div className="border-t border-[#D8D5CE]">
          <AchievementsGallery items={achievements} />
        </div>
      </main>

      <SiteFooter onOpenResume={openResume} />

      {/* ── Interactive Resume Pop-up Modal ── */}
      <ResumeModal isOpen={resumeOpen} onClose={closeResume} />
    </>
  );
}
