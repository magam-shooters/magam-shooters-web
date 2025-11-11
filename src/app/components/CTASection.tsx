import { COLORS } from "@/config/designTokens";
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
    <section className={`bg-gradient-to-r from-${COLORS.PRIMARY_MAIN} to-${COLORS.PRIMARY_DARK} py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link
            href={primaryButton.href}
            className={`inline-block font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider ${
              primaryButton.style === 'outline'
                ? `bg-transparent border-2 border-white hover:bg-white/10 text-white`
                : `bg-white hover:bg-gray-100 text-${COLORS.PRIMARY_MAIN}`
            }`}
          >
            {primaryButton.text}
          </Link>
          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className={`inline-block font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider ${
                secondaryButton.style === 'outline'
                  ? `bg-transparent border-2 border-white hover:bg-white/10 text-white`
                  : `bg-white hover:bg-gray-100 text-${COLORS.PRIMARY_MAIN}`
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