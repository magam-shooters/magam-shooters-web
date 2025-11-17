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
        backgroundImage: `linear-gradient(rgba(0, 43, 127, 0.9), rgba(0, 26, 77, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <section 
      className={`bg-gradient-to-r from-[#002B7F] to-[#001A4D] pt-32 pb-16 px-4 sm:px-6 lg:px-8 ${className}`}
      style={backgroundStyle}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {subtitle && (
            <p className="text-white text-sm sm:text-base uppercase tracking-widest font-bold mb-2 drop-shadow-lg">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          {description && (
            <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium drop-shadow-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}