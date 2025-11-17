
import { ReactNode } from "react";
import { COLORS } from "@/config/designTokens";

interface FeatureCardProps {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
  readonly className?: string;
}

interface FeatureGridProps {
  readonly features: readonly FeatureCardProps[];
  readonly columns?: 2 | 3 | 4;
  readonly className?: string;
}

function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`bg-white p-6 sm:p-8 text-center hover:shadow-lg transition duration-300 border border-${COLORS.BORDER_LIGHT} ${className}`}>
      <div className="text-4xl md:text-5xl mb-4">{icon}</div>
      <h3 className={`text-xl sm:text-2xl font-bold text-${COLORS.PRIMARY_MAIN} mb-3`}>
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function FeatureGrid({ 
  features, 
  columns = 4, 
  className = "" 
}: FeatureGridProps) {
  const gridClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6 md:gap-8 ${className}`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={`${feature.title}-${index}`}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export { FeatureCard };
