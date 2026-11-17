"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Media", href: "#media" },
  { label: "Hosting", href: "#hosting" },
  { label: "Achievements", href: "#achievements" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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
            <span className="font-semibold italic">Portfolio</span>
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

          {/* Resume actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/resume"
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded border border-[#315B4C] text-[#315B4C] hover:bg-[#315B4C] hover:text-white transition-colors"
            >
              <FileText size={14} />
              View Resume
            </Link>
            <Link
              href="/resume"
              onClick={(e) => {
                e.preventDefault();
                window.open("/resume", "_blank");
                setTimeout(() => {
                  const w = window.open("/resume", "_blank");
                  if (w) { w.onload = () => w.print(); }
                }, 100);
              }}
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded bg-[#315B4C] text-white hover:bg-[#264a3c] transition-colors"
            >
              <Download size={14} />
              Download Resume
            </Link>
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
            <Link
              href="/resume"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 py-3 rounded border border-[#315B4C] text-[#315B4C] hover:bg-[#315B4C] hover:text-white transition-colors"
            >
              <FileText size={16} />
              View Resume
            </Link>
            <Link
              href="/resume"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                const w = window.open("/resume", "_blank");
                if (w) { w.onload = () => w.print(); }
              }}
              className="flex items-center justify-center gap-2 py-3 rounded bg-[#315B4C] text-white hover:bg-[#264a3c] transition-colors"
            >
              <Download size={16} />
              Download Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
