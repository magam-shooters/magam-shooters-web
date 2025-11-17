'use client';

import { IMAGES } from "@/config/images";
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { GiPistolGun } from "react-icons/gi";

interface HeroSectionProps {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly primaryButtonText: string;
  readonly primaryButtonHref: string;
  readonly secondaryButtonText?: string;
  readonly secondaryButtonHref?: string;
  readonly backgroundImages?: string[];
  readonly backgroundOverlay?: boolean;
  readonly children?: ReactNode;
}

const defaultImages = [
  IMAGES.HERO_LARGE_1,
  IMAGES.HERO_LARGE_2,
  IMAGES.HERO_LARGE_3,
];

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImages = defaultImages,
  backgroundOverlay = true,
  children,
}: Readonly<HeroSectionProps>) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setNextImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setFadeOut(false);
      }, 500);
      return () => clearTimeout(timer);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {/* Current Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Next Image (preloading) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
          style={{
            backgroundImage: `url('${backgroundImages[nextImageIndex]}')`,
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      {/* Overlay */}
      {backgroundOverlay && (
        <div className="absolute inset-0 bg-black/40 md:bg-black/30 lg:bg-black/20"></div>
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Shooting Icon */}
          <div className="flex justify-center mb-4">
            <GiPistolGun className="text-6xl md:text-7xl" style={{ color: '#D71920', filter: 'drop-shadow(0 2px 8px #D71920AA)' }} />
          </div>
          {/* Subtitle */}

          <div className="mb-3 sm:mb-4 md:mb-6">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest font-semibold text-white">
              {subtitle || "SHOOTING COMPETITION"}
            </p>
            <div className="hidden sm:flex justify-center mt-2 md:mt-3">
              <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight saira-extra-condensed text-white">
            {title || "Magam Shooters Championship 2025"}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto text-white">
            {description || "Welcome to the premier shooting sports event in Sri Lanka! Compete in pistol, rifle, and shotgun disciplines, challenge your accuracy and speed, and join a community of passionate marksmen. Register now to secure your spot in the Magam Shooters Championship 2025."}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <Link
              href={primaryButtonHref || "/register"}
              className="w-full sm:w-auto font-bold py-3 sm:py-4 px-6 sm:px-10 transition duration-300 transform hover:scale-105 text-center uppercase tracking-wide text-sm sm:text-base border"
              style={{ backgroundColor: '#D71920', color: '#fff', borderColor: '#D71920' }}
            >
              {primaryButtonText || "Register Now"}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="w-full sm:w-auto font-bold py-3 sm:py-4 px-6 sm:px-10 transition duration-300 border text-center uppercase tracking-wide text-sm sm:text-base"
                style={{ backgroundColor: '#FFD100', color: '#000', borderColor: '#FFD100' }}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>

          {/* Additional Content */}
          {children && <div className="mt-8 sm:mt-12">{children}</div>}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-widest text-gray-300 opacity-75">Scroll</p>
          <div className="w-5 h-8 border border-gray-300 flex justify-center">
            <div className="w-1 h-2 bg-gray-300 mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Image Carousel Indicators */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((image) => (
          <button
            key={image}
            onClick={() => {
              const idx = backgroundImages.indexOf(image);
              setCurrentImageIndex(idx);
              setNextImageIndex((idx + 1) % backgroundImages.length);
              setFadeOut(false);
            }}
            className={`h-1 transition-all duration-300 ${
              image === backgroundImages[currentImageIndex]
                ? 'bg-white w-8 opacity-100'
                : 'bg-white/50 w-2 opacity-75 hover:opacity-100'
            }`}
            aria-label={`Go to image`}
          />
        ))}
      </div>
    </section>
  );
}
