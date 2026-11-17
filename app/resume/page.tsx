import type { Metadata } from "next";
import Link from "next/link";
import ResumeDocument from "@/components/resume-document";
import PrintResumeButton from "@/components/print-resume-button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — Shashwati Sabhapandit",
  description:
    "Official resume of Shashwati Sabhapandit — Media & Communication Professional, Anchor, Content Writer, and Public Speaker.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      {/* Back + Print controls — hidden on print */}
      <div className="no-print sticky top-0 inset-x-0 z-40 bg-[#1F2124] text-white border-b border-[#3A3D42] shadow-sm">
        <div className="max-w-4xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[#D1D1D1] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to portfolio</span>
          </Link>
          <PrintResumeButton />
        </div>
      </div>

      {/* Main Resume Document Container */}
      <main className="py-8 sm:py-12 px-3 sm:px-6">
        <ResumeDocument />
      </main>
    </div>
  );
}
