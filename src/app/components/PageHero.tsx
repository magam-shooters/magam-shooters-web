import { COLORS } from "@/config/designTokens";

interface PageHeroProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly backgroundImage?: string;
  readonly className?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  className = ""
}: PageHeroProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(29, 78, 216, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <section 
      className={`bg-gradient-to-r from-${COLORS.PRIMARY_MAIN} to-${COLORS.PRIMARY_DARK} py-16 px-4 sm:px-6 lg:px-8 ${className}`}
      style={backgroundStyle}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {subtitle && (
            <p className="text-white/80 text-sm sm:text-base uppercase tracking-widest font-semibold mb-2">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}