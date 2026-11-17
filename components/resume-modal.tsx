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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm p-3 sm:p-6 lg:p-10 flex items-start justify-center animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Resume of Shashwati Sabhapandit"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl my-auto bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Top Bar */}
        <div className="no-print sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-[#1F2124] text-white border-b border-[#3A3D42]">
          <div className="flex items-center gap-2">
            <span className="font-[var(--font-playfair)] text-sm sm:text-base font-semibold tracking-wide text-white">
              Shashwati Sabhapandit — Resume
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Direct PDF Download */}
            <a
              href="/Shashwati_Sabhapandit_Resume.pdf"
              download="Shashwati_Sabhapandit_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#C49A58] hover:bg-[#b08745] text-white text-xs sm:text-sm font-medium rounded-sm transition-colors shadow-sm"
              aria-label="Download original PDF resume"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            {/* Print / Save as PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-medium rounded-sm transition-colors"
              aria-label="Print or Save as PDF"
            >
              <Printer size={15} />
              <span className="hidden sm:inline">Save as PDF</span>
            </button>

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors ml-1"
              aria-label="Close resume popup"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Preview */}
        <div className="overflow-y-auto max-h-[85vh] p-2 sm:p-6 bg-[#F5F4F0]">
          <ResumeDocument />
        </div>
      </div>
    </div>
  );
}
