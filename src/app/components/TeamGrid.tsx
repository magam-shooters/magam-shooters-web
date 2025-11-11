import { COLORS } from "@/config/designTokens";

interface TeamMemberProps {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly bio?: string;
  readonly className?: string;
}

interface TeamGridProps {
  readonly members: readonly TeamMemberProps[];
  readonly columns?: 2 | 3 | 4;
  readonly showBio?: boolean;
  readonly className?: string;
}

function TeamMemberCard({ 
  name, 
  role, 
  image, 
  bio, 
  showBio = false,
  className = "" 
}: TeamMemberProps & { readonly showBio?: boolean }) {
  return (
    <div className={`bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 ${className}`}>
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      <div className={`bg-${COLORS.BG_DARK} text-white py-4 sm:py-6 px-6 text-center`}>
        <h3 className="font-bold text-lg sm:text-xl mb-1">{name}</h3>
        <p className={`text-${COLORS.PRIMARY_MAIN} text-sm font-semibold ${showBio && bio ? 'mb-3' : ''}`}>
          {role}
        </p>
        {showBio && bio && (
          <p className="text-gray-300 text-sm leading-relaxed">
            {bio}
          </p>
        )}
      </div>
    </div>
  );
}

export default function TeamGrid({ 
  members, 
  columns = 3,
  showBio = false,
  className = "" 
}: TeamGridProps) {
  const gridClass = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-8 md:gap-10 ${className}`}>
      {members.map((member, index) => (
        <TeamMemberCard
          key={`${member.name}-${index}`}
          name={member.name}
          role={member.role}
          image={member.image}
          bio={member.bio}
          showBio={showBio}
        />
      ))}
    </div>
  );
}

export { TeamMemberCard };
