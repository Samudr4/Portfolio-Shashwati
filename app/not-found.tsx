import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Portfolio",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#F7F5F0]">
      <p className="text-xs uppercase tracking-[0.2em] text-[#315B4C] font-medium mb-4">
        404
      </p>
      <h1 className="font-[var(--font-playfair)] text-5xl sm:text-6xl text-[#202321] mb-4">
        Page not found
      </h1>
      <div className="w-12 h-px bg-[#315B4C] mb-6 mx-auto" aria-hidden="true" />
      <p className="text-[#5A5955] mb-10 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#202321] text-[#F7F5F0] text-sm hover:bg-[#315B4C] transition-colors"
      >
        Return to portfolio
      </Link>
    </main>
  );
}
