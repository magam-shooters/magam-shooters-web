'use client';

import { ReactNode } from 'react';

interface Feature {
  readonly id: string;
  readonly icon: ReactNode;
  readonly title: string;
  readonly description?: string;
}

interface FeaturesProps {
  readonly features: readonly Feature[];
  readonly className?: string;
}

export default function Features({ features, className = '' }: Readonly<FeaturesProps>) {
  return (
    <section className={`py-8 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                {typeof feature.icon === 'string' ? (
                  <div className="text-3xl sm:text-4xl md:text-5xl">{feature.icon}</div>
                ) : (
                  feature.icon
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              {feature.description && (
                <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
