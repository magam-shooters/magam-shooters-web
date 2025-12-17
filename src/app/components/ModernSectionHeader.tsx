import { MdArrowForward } from "react-icons/md";

interface ModernSectionHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly alignment?: 'left' | 'center' | 'right';
  readonly className?: string;
  readonly showAccent?: boolean;
  readonly accentColor?: string;
  readonly titleColor?: string;
  readonly subtitleColor?: string;
  readonly descriptionColor?: string;
}

export default function ModernSectionHeader({
  title,
  subtitle,
  description,
  alignment = 'center',
  className = "",
  showAccent = true,
  accentColor = "#00AEEF",
  titleColor = "#002B7F",
  subtitleColor = "#002B7F", 
  descriptionColor = "#1F2937"
}: ModernSectionHeaderProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[alignment];

  const justifyClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  }[alignment];

  return (
    <div className={`mb-12 md:mb-20 ${alignmentClass} ${className}`}>
      {/* Accent Line */}
      {showAccent && (
        <div className={`flex items-center gap-4 mb-6 ${justifyClass}`}>
          <div
            className="h-1 w-16"
            style={{ backgroundColor: accentColor }}
          ></div>
          <MdArrowForward
            className="text-2xl"
            style={{ color: accentColor }}
          />
          <div
            className="h-1 w-16"
            style={{ backgroundColor: accentColor }}
          ></div>
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        style={{ 
          color: titleColor,
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <div className={`max-w-4xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          <p
            className="text-lg md:text-xl leading-relaxed font-medium"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        </div>
      )}

      {/* Bottom Accent */}
      {showAccent && (
        <div className={`flex items-center gap-2 mt-8 ${justifyClass}`}>
          <div
            className="h-0.5 w-8"
            style={{ backgroundColor: accentColor }}
          ></div>
          <div
            className="h-0.5 w-12"
            style={{ backgroundColor: `${accentColor}80` }}
          ></div>
          <div
            className="h-0.5 w-6"
            style={{ backgroundColor: `${accentColor}40` }}
          ></div>
        </div>
      )}
    </div>
  );
}