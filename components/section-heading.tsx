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
    <div className={`mb-10 md:mb-14 ${className}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-[#315B4C] font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-[var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[#202321] leading-tight mb-4"
      >
        {title}
      </h2>
      <div className="w-12 h-px bg-[#315B4C] mb-4" aria-hidden="true" />
      {description && (
        <p className="text-[#5A5955] text-base leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
