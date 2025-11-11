// Example Component - How to Use Design Tokens
// This demonstrates the pattern for updating components

import { COLORS, FONTS, SHADOWS, TRANSITIONS } from '@/config/designTokens';

/**
 * Example 1: Button Component
 * Using design tokens instead of hardcoded colors
 */
export function ExampleButton() {
  return (
    <button
      className={`
        bg-${COLORS.PRIMARY_MAIN}
        hover:bg-${COLORS.PRIMARY_DARK}
        text-${COLORS.TEXT_WHITE}
        ${FONTS.WEIGHT_SEMIBOLD}
        py-2 px-4
        ${TRANSITIONS.NORMAL}
      `}
    >
      Click Me
    </button>
  );
}

/**
 * Example 2: Card Component
 * Using semantic color names
 */
export function ExampleCard() {
  return (
    <div
      className={`
        bg-${COLORS.BG_WHITE}
        border border-${COLORS.BORDER_LIGHT}
        ${SHADOWS.MD}
        hover:${SHADOWS.LG}
        ${TRANSITIONS.NORMAL}
        p-6
        rounded
      `}
    >
      <h3 className={`text-${COLORS.PRIMARY_MAIN} ${FONTS.WEIGHT_SEMIBOLD}`}>
        Card Title
      </h3>
      <p className={`text-${COLORS.TEXT_SECONDARY}`}>
        Card description goes here
      </p>
    </div>
  );
}

/**
 * Example 3: Section with Gradient Background
 */
export function ExampleGradientSection() {
  return (
    <section
      className={`
        bg-gradient-to-r
        from-${COLORS.TERTIARY_LIGHT}
        to-${COLORS.TERTIARY_MAIN}
        text-${COLORS.TEXT_WHITE}
        py-20 px-8
      `}
    >
      <h2 className={`${FONTS.SIZE_4XL} ${FONTS.WEIGHT_BOLD} mb-4`}>
        Featured Section
      </h2>
      <p className={`${FONTS.SIZE_LG}`}>
        This section uses the tertiary accent color
      </p>
    </section>
  );
}

/**
 * Example 4: Navigation Component
 */
export function ExampleNavigation() {
  return (
    <nav className={`bg-${COLORS.BG_DARK} border-b border-${COLORS.BORDER_MAIN}`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <a
          href="/"
          className={`text-${COLORS.PRIMARY_LIGHT} hover:text-${COLORS.PRIMARY_MAIN} ${TRANSITIONS.NORMAL}`}
        >
          Home
        </a>
      </div>
    </nav>
  );
}

/**
 * Example 5: Form Input
 */
export function ExampleFormInput() {
  return (
    <div>
      <label htmlFor="email" className={`block text-${COLORS.TEXT_PRIMARY} ${FONTS.WEIGHT_SEMIBOLD} mb-2`}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className={`
          w-full
          px-4 py-2
          bg-${COLORS.BG_WHITE}
          border border-${COLORS.BORDER_LIGHT}
          text-${COLORS.TEXT_PRIMARY}
          ${FONTS.WEIGHT_NORMAL}
          focus:border-${COLORS.PRIMARY_MAIN}
          focus:outline-none
          ${TRANSITIONS.NORMAL}
        `}
      />
    </div>
  );
}

/**
 * Example 6: Using Multiple Colors Together
 */
export function ExampleMultiColor() {
  return (
    <div className={`bg-${COLORS.BG_DARKER} p-8 border border-${COLORS.BORDER_MAIN}`}>
      <h1 className={`text-${COLORS.PRIMARY_MAIN} ${FONTS.SIZE_4XL} ${FONTS.WEIGHT_BOLD} mb-4`}>
        Heading
      </h1>

      <p className={`text-${COLORS.TEXT_LIGHTER} ${FONTS.SIZE_LG} mb-6`}>
        This is a subtitle or description
      </p>

      <button
        className={`
          bg-${COLORS.SECONDARY_LIGHT}
          hover:bg-${COLORS.SECONDARY_MAIN}
          text-${COLORS.TEXT_WHITE}
          ${FONTS.WEIGHT_BOLD}
          py-2 px-6
          ${TRANSITIONS.NORMAL}
        `}
      >
        Action Button
      </button>
    </div>
  );
}

/**
 * IMPORTANT NOTES:
 *
 * 1. When using tokens in template literals, remember:
 *    - Don't use backticks within backticks if using dynamic values
 *    - Use string concatenation or separate lines
 *
 * 2. TypeScript Integration:
 *    - All COLORS, FONTS, TRANSITIONS are const types
 *    - Auto-completion works in your IDE
 *    - Type safety ensures no typos
 *
 * 3. Making Changes:
 *    - To change a color globally, edit: src/config/designTokens.ts
 *    - All components using that token will update automatically
 *    - No need to search/replace across multiple files
 *
 * 4. Adding New Tokens:
 *    - Add to src/config/designTokens.ts
 *    - Export from src/config/index.ts
 *    - Use in components with: import { NEW_TOKEN } from '@/config/designTokens'
 *
 * 5. Tailwind Compilation:
 *    - Tailwind scans all `.tsx` and `.ts` files
 *    - It will recognize and include all color classes used
 *    - No manual Tailwind config updates needed for new colors
 */
