'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';

interface GalleryItem {
  _id: string;
  title: string;
  subtitle?: string;
  date: string;
  imageUrl: string;
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setItems(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const renderContent = () => {
    if (loading) return <div className="py-20 text-center text-gray-400 font-sans">Loading gallery...</div>;
    if (items.length === 0) return <div className="py-20 text-center text-gray-400 font-sans">No gallery images available yet.</div>;
    return (
      <>
        <p className="font-sans text-center mb-8 text-gray-600">
          Showing {items.length} {items.length === 1 ? 'image' : 'images'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <button
              key={item._id}
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-transparent p-0 cursor-pointer text-left"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="font-montserrat text-white text-lg font-semibold">{item.title}</h3>
                  {item.subtitle && <p className="text-white/80 text-sm mt-1">{item.subtitle}</p>}
                  <p className="text-white/60 text-xs mt-1">{item.date}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#002B7F] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="font-sans inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">NSSF Gallery</h1>
          <p className="font-sans text-xl text-white/90 max-w-2xl">
            Explore moments from our competitions, training programs, and achievements
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">{renderContent()}</div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/95 border-0 cursor-default"
            onClick={() => setSelected(null)}
            aria-label="Close lightbox"
          />
          {/* Content */}
          <div className="relative max-w-5xl w-full z-10">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <FaTimes className="w-8 h-8" />
            </button>
            <img
              src={selected.imageUrl}
              alt={selected.title}
              className="w-full h-auto rounded-lg max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="font-montserrat text-2xl font-semibold mb-1">{selected.title}</h3>
              {selected.subtitle && <p className="text-white/70 text-sm mb-2">{selected.subtitle}</p>}
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-[#FFD100] text-[#002B7F]">
                {selected.date}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
