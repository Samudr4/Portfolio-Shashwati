import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import PortfolioGallery from "@/components/portfolio-gallery";
import MediaSection from "@/components/media-section";
import HostingGallery from "@/components/hosting-gallery";
import AchievementsGallery from "@/components/achievements-gallery";
import SiteFooter from "@/components/site-footer";
import SectionHeading from "@/components/section-heading";
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
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <Hero />

        {/* ── About ── */}
        <AboutSection
          name={profile.name || undefined}
          professionalTitle={profile.professionalTitle || undefined}
          introduction={profile.introduction || undefined}
          location={profile.location || undefined}
          languages={profile.languages.length > 0 ? profile.languages : undefined}
          email={profile.email || undefined}
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
              description="Newspaper articles and creative writing published across various publications. Click any item to view full size."
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
      <SiteFooter />
    </>
  );
}
