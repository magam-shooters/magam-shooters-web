import Link from "next/link";

interface CTASectionProps {
  readonly title: string;
  readonly description: string;
  readonly primaryButton: {
    readonly text: string;
    readonly href: string;
    readonly style?: 'filled' | 'outline';
  };
  readonly secondaryButton?: {
    readonly text: string;
    readonly href: string;
    readonly style?: 'filled' | 'outline';
  };
  readonly className?: string;
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = ""
}: CTASectionProps) {
  return (
    <section className={`bg-white py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          {title}
        </h2>
        <p className="text-black text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link
            href={primaryButton.href}
            className={`inline-block font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider ${
              primaryButton.style === 'outline'
                ? `bg-transparent border-2 border-[#002B7F] hover:bg-[#002B7F] hover:text-white text-[#002B7F]`
                : `bg-[#002B7F] hover:bg-[#001A4D] text-white`
            }`}
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className={`inline-block font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider ${
                secondaryButton.style === 'outline'
                  ? `bg-transparent border-2 border-[#002B7F] hover:bg-[#002B7F] hover:text-white text-[#002B7F]`
                  : `bg-[#002B7F] hover:bg-[#001A4D] text-white`
              }`}
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}