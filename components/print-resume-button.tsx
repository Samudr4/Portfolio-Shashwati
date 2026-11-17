"use client";

import { Download, Printer } from "lucide-react";

export default function PrintResumeButton() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="/Shashwati_Sabhapandit_Resume.pdf"
        download="Shashwati_Sabhapandit_Resume.pdf"
        className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#C49A58] hover:bg-[#b08745] text-white text-xs sm:text-sm font-medium rounded-sm transition-colors shadow-sm"
        aria-label="Download original PDF resume"
      >
        <Download size={15} />
        <span>Download PDF</span>
      </a>

      <button
        onClick={() => window.print()}
        className="flex items-center gap-1.5 px-3.5 py-1.5 border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-medium rounded-sm transition-colors"
        aria-label="Print or Save as PDF"
      >
        <Printer size={15} />
        <span className="hidden sm:inline">Save as PDF</span>
      </button>
    </div>
  );
}
