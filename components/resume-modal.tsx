"use client";

import { useEffect, useRef } from "react";
import { X, Download, Printer } from "lucide-react";
import ResumeDocument from "./resume-document";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm p-2 sm:p-4 md:p-6 lg:p-8 flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Resume of Shashwati Sabhapandit"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl my-auto bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Top Bar (Mobile-Optimized) */}
        <div className="no-print sticky top-0 z-20 flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-3.5 bg-[#1F2124] text-white border-b border-[#3A3D42]">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <span className="text-xs sm:text-base font-semibold tracking-wide text-white truncate">
              Shashwati Sabhapandit
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Direct PDF Download */}
            <a
              href="/Shashwati_Sabhapandit_Resume.pdf"
              download="Shashwati_Sabhapandit_Resume.pdf"
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 bg-[#C49A58] hover:bg-[#b08745] text-white text-[11px] sm:text-sm font-medium rounded-xs transition-colors shadow-xs"
              aria-label="Download PDF Resume"
            >
              <Download size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Download</span> PDF
            </a>

            {/* Print / Save as PDF */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-medium rounded-xs transition-colors cursor-pointer"
              aria-label="Print or Save as PDF"
            >
              <Printer size={14} className="sm:w-4 sm:h-4" />
              <span>Save as PDF</span>
            </button>

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-xs transition-colors cursor-pointer ml-1"
              aria-label="Close resume popup"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Preview */}
        <div className="overflow-y-auto max-h-[82dvh] p-2 sm:p-6 bg-[#F5F4F0]">
          <ResumeDocument />
        </div>
      </div>
    </div>
  );
}
