

// interface ModernSectionHeaderProps {
//   readonly title: string;
//   readonly subtitle?: string;
//   readonly description?: string;
//   readonly alignment?: 'left' | 'center' | 'right';
//   readonly className?: string;
//   readonly titleColor?: string;
//   readonly subtitleColor?: string;
//   readonly descriptionColor?: string;
// }

// export default function ModernSectionHeader({
//   title,
//   subtitle,
//   description,
//   alignment = 'center',
//   className = "",
//   titleColor = {colors.primary.blue},
//   subtitleColor = {colors.primary.navy}, 
//   descriptionColor = "#4B5563"
// }: ModernSectionHeaderProps) {
//   const alignmentClass = {
//     left: 'text-left',
//     center: 'text-center',
//     right: 'text-right'
//   }[alignment];

//   const justifyClass = {
//     left: 'justify-start',
//     center: 'justify-center',
//     right: 'justify-end'
//   }[alignment];

//   return (
//     <div className={`mb-12 md:mb-20 ${alignmentClass} ${className}`}>
//       {/* Accent Line */}
//       {/* {showAccent && (
//         <div className={`flex items-center gap-4 mb-6 ${justifyClass}`}>
//           <div
//             className="h-1 w-16"
//             style={{ backgroundColor: accentColor }}
//           ></div>
//           <MdArrowForward
//             className="text-2xl"
//             style={{ color: accentColor }}
//           />
//           <div
//             className="h-1 w-16"
//             style={{ backgroundColor: accentColor }}
//           ></div>
//         </div>
//       )} */}

//       {/* Subtitle */}
//       {subtitle && (
//         <p
//           className="text-sm font-sans font-semibold uppercase tracking-wider mb-2"
//           style={{ color: subtitleColor }}
//         >
//           {subtitle}
//         </p>
//       )}

//       {/* Title */}
//       <h2
//         className="text-4xl md:text-5xl font-sans font-bold mb-4"
//         style={{ 
//           color: titleColor
//         }}
//       >
//         {title}
//       </h2>

//       {/* Description */}
//       {description && (
//         <div className={`max-w-4xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
//           <p
//             className="text-lg md:text-xl   font-sans"
//             style={{ color: descriptionColor }}
//           >
//             {description}
//           </p>
//         </div>
//       )}

//       {/* Bottom Accent */}
//       {/* {showAccent && (
//         <div className={`flex items-center gap-2 mt-8 ${justifyClass}`}>
//           <div
//             className="h-0.5 w-8"
//             style={{ backgroundColor: accentColor }}
//           ></div>
//           <div
//             className="h-0.5 w-12"
//             style={{ backgroundColor: `${accentColor}80` }}
//           ></div>
//           <div
//             className="h-0.5 w-6"
//             style={{ backgroundColor: `${accentColor}40` }}
//           ></div>
//         </div>
//       )} */}
//     </div>
//   );
// }

import { colors } from "@/config";

interface ModernSectionHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly alignment?: 'left' | 'center' | 'right';
  readonly className?: string;
  readonly titleColor?: string;
  readonly subtitleColor?: string;
  readonly descriptionColor?: string;
}

export default function ModernSectionHeader({
  title,
  subtitle,
  description,
  alignment = 'center',
  className = "",
  titleColor = colors.primary.navy,        
  subtitleColor = colors.primary.blue,     
  descriptionColor = "#4B5563"
}: ModernSectionHeaderProps) {

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[alignment];

  return (
    <div className={`mb-16 ${alignmentClass} ${className}`}>
      
      {/* Subtitle */}
      {subtitle && (
        <p
          className="text-sm font-sans font-semibold uppercase tracking-wider mb-2"
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h2
        className="text-4xl md:text-5xl font-sans font-bold mb-4"
        style={{ color: titleColor }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <div className={`${alignment === 'center' ? 'max-w-2xl mx-auto' : ''}`}>
          <p
            className="text-lg text-gray-600 font-sans"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        </div>
      )}

    </div>
  );
}
