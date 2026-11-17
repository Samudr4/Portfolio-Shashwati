"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Media", href: "#media" },
  { label: "Hosting", href: "#hosting" },
  { label: "Achievements", href: "#achievements" },
];

interface SiteHeaderProps {
  onOpenResume?: () => void;
}

export default function SiteHeader({ onOpenResume }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.location.href = "/resume";
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-[#D8D5CE]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <a
            href="#top"
            className="font-[var(--font-playfair)] text-lg tracking-tight text-[#202321] hover:text-[#315B4C] transition-colors"
            aria-label="Back to top"
          >
            <span className="font-semibold italic">Shashwati Sabhapandit</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-[#5A5955] hover:text-[#315B4C] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Single Resume Action: View Resume */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-sm bg-[#315B4C] text-white hover:bg-[#264a3c] transition-colors shadow-sm"
              aria-label="View Resume Popup"
            >
              <FileText size={15} />
              <span>View Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#202321] hover:text-[#315B4C] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-[#F7F5F0] z-50 flex flex-col px-6 py-8 gap-6"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-xl font-[var(--font-playfair)] text-[#202321] hover:text-[#315B4C] transition-colors border-b border-[#ECEAE4] pb-4"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-auto">
            <button
              onClick={handleResumeClick}
              className="flex items-center justify-center gap-2 py-3 rounded-sm bg-[#315B4C] text-white hover:bg-[#264a3c] transition-colors text-base font-medium"
            >
              <FileText size={18} />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
