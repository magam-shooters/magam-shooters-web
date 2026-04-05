'use client';

import { IMAGES } from "@/config/images";
import { ReactNode, useEffect, useState } from 'react';

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

      {/* Logo in Top Left Corner */}
      <div className="absolute top-18 left-4 sm:top-22 sm:left-6 md:top-26 md:left-8 lg:top-30 lg:left-10 z-30">
        <img
          src="/logo.png"
          alt="NSSF Logo"
          className="w-auto h-auto max-w-[120px] max-h-[120px] sm:max-w-[160px] sm:max-h-[160px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[240px] lg:max-h-[240px] xl:max-w-[280px] xl:max-h-[280px] object-contain drop-shadow-2xl"
        />
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
