import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#D8D5CE] py-10 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-[var(--font-playfair)] text-sm italic text-[#5A5955]">
            Personal Portfolio
          </p>
          <p className="text-xs text-[#5A5955]/60 mt-0.5">
            Writer · Media contributor · Event host
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#5A5955]/60">
          <Link href="/resume" className="hover:text-[#315B4C] transition-colors">
            Resume
          </Link>
          <span>·</span>
          <span>All work © the respective publishers</span>
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
