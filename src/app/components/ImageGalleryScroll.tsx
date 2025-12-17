'use client';

import { colors } from '@/config';
import { useRef, useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

// Placeholder gallery images
const galleryImages: GalleryImage[] = [
  { id: 1, src: "/gallery/img-01.jpeg", title: "National Championship 2024", category: "Championship" },
  { id: 2, src: "/gallery/img-02.jpeg", title: "Youth Training Program", category: "Training" },
  { id: 3, src: "/gallery/img-03.jpeg", title: "Olympic Qualifiers", category: "International" },
  { id: 4, src: "https://picsum.photos/seed/gallery4/800/600", title: "Women's Competition", category: "Championship" },
  { id: 5, src: "https://picsum.photos/seed/gallery5/800/600", title: "Rifle Range Facility", category: "Facilities" },
  { id: 6, src: "https://picsum.photos/seed/gallery6/800/600", title: "Junior Development", category: "Training" },
  { id: 7, src: "https://picsum.photos/seed/gallery7/800/600", title: "International Event", category: "International" },
  { id: 8, src: "https://picsum.photos/seed/gallery8/800/600", title: "Medal Ceremony", category: "Championship" },
  { id: 9, src: "https://picsum.photos/seed/gallery9/800/600", title: "Club Competition", category: "Club Events" },
  { id: 10, src: "https://picsum.photos/seed/gallery10/800/600", title: "Safety Workshop", category: "Training" },
  { id: 11, src: "https://picsum.photos/seed/gallery11/800/600", title: "Regional Tournament", category: "Championship" },
  { id: 12, src: "https://picsum.photos/seed/gallery12/800/600", title: "Pistol Competition", category: "Championship" },
];

export default function ImageGalleryScroll() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
            Moments
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing the excellence and dedication of Sri Lanka's shooting sports community
          </p>
        </div>

        {/* Scrollable Gallery */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            style={{ color: colors.primary.navy }}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 px-12 py-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image) => (
              <button
                key={image.id}
                className="flex-shrink-0 w-96 cursor-pointer group border-0 bg-transparent p-0"
                onClick={() => setSelectedImage(image)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedImage(image); }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="h-72 overflow-hidden bg-gray-200">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                        style={{
                          backgroundColor: colors.primary.yellow,
                          color: colors.primary.navy
                        }}
                      >
                        {image.category}
                      </span>
                      <h3 className="text-white text-xl font-bold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            style={{ color: colors.primary.navy }}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a
            href="/gallery"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: colors.primary.navy }}
          >
            View Full Gallery
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <button
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 border-0"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => { if (e.key === 'Escape') setSelectedImage(null); }}
          aria-label="Close lightbox"
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: colors.primary.yellow,
                  color: colors.primary.navy
                }}
              >
                {selectedImage.category}
              </span>
            </div>
          </div>
        </button>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
