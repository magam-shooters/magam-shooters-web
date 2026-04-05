'use client';

import { useEffect, useState } from 'react';

interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  color: string;
  gradient: string;
}

const testimonials: readonly Testimonial[] = [
  {
    id: 'testimonial-1',
    text: "Excellent photography services! The team was professional, creative, and delivered outstanding results. Highly recommended for anyone looking for quality work.",
    author: 'John Smith',
    role: 'Event Organizer',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 'testimonial-2',
    text: "The videography work was exceptional! They captured every moment beautifully and the editing was flawless. We couldn't be happier with the final product.",
    author: 'Sarah Johnson',
    role: 'Wedding Coordinator',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 'testimonial-3',
    text: "Professional service from start to finish. The team understood our vision and delivered beyond expectations. We'll definitely work with them again!",
    author: 'Michael Chen',
    role: 'Corporate Manager',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 'testimonial-4',
    text: "Outstanding attention to detail and professional approach. The photography portfolio they created has become our best marketing asset. Truly impressive work!",
    author: 'Emma Davis',
    role: 'Marketing Director',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 'testimonial-5',
    text: "Best investment we made for our events. The team is responsive, creative, and delivers content that exceeds our expectations every single time.",
    author: 'James Wilson',
    role: 'Event Manager',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900">Testimonials</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-linear-to-br from-slate-50 to-slate-100 p-8 md:p-12 shadow-lg min-h-80">
            <div className="flex items-center gap-1 mb-6 text-yellow-400 text-2xl">
              â˜…â˜…â˜…â˜…â˜…
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-lg italic font-sans">
              "{testimonial.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 bg-linear-to-br ${testimonial.gradient}`}></div>
              <div>
                <p className="font-sans font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                <p className="text-blue-600 text-sm font-sans font-semibold">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-blue-600 hover:bg-blue-700 text-white p-3 transition duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-blue-600 hover:bg-blue-700 text-white p-3 transition duration-300 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`transition duration-300 ${
                  index === current
                    ? 'bg-blue-600 w-4 h-4'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

