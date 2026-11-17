interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  id,
}: SectionHeadingProps) {
  return (
    <div className={`mb-7 sm:mb-10 md:mb-14 ${className}`}>
      {eyebrow && (
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#315B4C] font-semibold mb-2 sm:mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#202321] leading-tight mb-3 sm:mb-4"
      >
        {title}
      </h2>
      <div className="w-12 h-px bg-[#315B4C] mb-3 sm:mb-4" aria-hidden="true" />
      {description && (
        <p className="text-xs sm:text-base text-[#5A5955] leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
