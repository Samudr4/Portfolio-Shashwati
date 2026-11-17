"use client";

import { Printer } from "lucide-react";

export default function PrintResumeButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 px-4 py-2 text-sm bg-[#315B4C] text-white hover:bg-[#264a3c] transition-colors rounded-sm"
      aria-label="Print or save resume as PDF"
    >
      <Printer size={14} />
      <span>Print / Save PDF</span>
    </button>
  );
}
