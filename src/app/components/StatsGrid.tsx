import { COLORS } from "@/config/designTokens";

interface StatCardProps {
  readonly value: string;
  readonly label: string;
  readonly className?: string;
}

interface StatsGridProps {
  readonly stats: readonly StatCardProps[];
  readonly columns?: 2 | 3 | 4;
  readonly className?: string;
}

function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`bg-gradient-to-br from-${COLORS.PRIMARY_LIGHT} to-${COLORS.PRIMARY_MAIN} p-8 sm:p-10 text-white text-center hover:shadow-lg transition duration-300 ${className}`}>
      <div className="text-4xl md:text-5xl font-bold mb-2">{value}</div>
      <p className="text-white/90 text-sm sm:text-base font-semibold">{label}</p>
    </div>
  );
}

export default function StatsGrid({ 
  stats, 
  columns = 4, 
  className = "" 
}: StatsGridProps) {
  const gridClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6 md:gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={`${stat.label}-${index}`}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}

export { StatCard };
