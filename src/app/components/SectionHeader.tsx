interface SectionHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly alignment?: 'left' | 'center' | 'right';
  readonly className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  alignment = 'center',
  className = ""
}: SectionHeaderProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[alignment];

  return (
    <div className={`mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg font-extrabold text-black mb-2">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-lg font-medium text-black max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}