'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

// Full gallery images
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
  { id: 13, src: "https://picsum.photos/seed/gallery13/800/600", title: "Air Rifle Competition", category: "Championship" },
  { id: 14, src: "https://picsum.photos/seed/gallery14/800/600", title: "Coaching Workshop", category: "Training" },
  { id: 15, src: "https://picsum.photos/seed/gallery15/800/600", title: "International Team", category: "International" },
  { id: 16, src: "https://picsum.photos/seed/gallery16/800/600", title: "Range Inauguration", category: "Facilities" },
  { id: 17, src: "https://picsum.photos/seed/gallery17/800/600", title: "Junior Athletes", category: "Training" },
  { id: 18, src: "https://picsum.photos/seed/gallery18/800/600", title: "National Finals", category: "Championship" },
  { id: 19, src: "https://picsum.photos/seed/gallery19/800/600", title: "Women's Team", category: "Championship" },
  { id: 20, src: "https://picsum.photos/seed/gallery20/800/600", title: "Training Session", category: "Training" },
  { id: 21, src: "https://picsum.photos/seed/gallery21/800/600", title: "Club Meet", category: "Club Events" },
  { id: 22, src: "https://picsum.photos/seed/gallery22/800/600", title: "International Competition", category: "International" },
  { id: 23, src: "https://picsum.photos/seed/gallery23/800/600", title: "Award Ceremony", category: "Championship" },
  { id: 24, src: "https://picsum.photos/seed/gallery24/800/600", title: "Safety Training", category: "Training" },
];

const categories = ["All", "Championship", "Training", "International", "Facilities", "Club Events"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#002B7F] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NSSF Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore moments from our competitions, training programs, and achievements
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#002B7F] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-600">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-transparent p-0 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-[#FFD100] text-[#002B7F]">
                      {image.category}
                    </span>
                    <h3 className="text-white text-lg font-bold">{image.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[#FFD100] text-[#002B7F]">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
