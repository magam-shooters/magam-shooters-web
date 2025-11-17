// Design Tokens - Single source of truth for all design values
// Update these values to change the entire application's appearance

// COLORS - Brand Color Palette
export const COLORS = {
  // Primary Palette (Navy Blue - Core Identity)
  PRIMARY_LIGHT: '#3A4E8C', // Lighter shade for hover/backgrounds
  PRIMARY_MAIN: '#002B7F',  // Navy Blue - Main brand color
  PRIMARY_DARK: '#001A4D',  // Darker navy for accents

  // Secondary Palette (Olympic Ring Colors)
  SECONDARY_RED: '#D71920',     // Red - Passion, energy (buttons, hover effects)
  SECONDARY_GREEN: '#007A3D',   // Green - Growth, harmony (success indicators, sections)
  SECONDARY_YELLOW: '#FFD100',  // Yellow - Optimism, visibility (banners, CTAs)
  SECONDARY_BLUE: '#00AEEF',    // Light Blue - Sport freshness, balance (links, subheadings)

  // Core Colors
  BLACK: '#000000',   // Black - Texts & outlines
  WHITE: '#FFFFFF',   // White - Background or negative space

  // Supporting Neutral Tones
  GRAY_LIGHT: '#F5F7FA',   // Light gray background panels
  GRAY_MEDIUM: '#E5E7EB',  // Divider lines, secondary text
  GRAY_DARK: '#1F2937',    // Main body text

  // Backgrounds
  BG_DARK: '#002B7F',      // Navy blue background
  BG_DARKER: '#001A4D',    // Darker navy
  BG_LIGHT: '#F5F7FA',     // Light gray background
  BG_WHITE: '#FFFFFF',     // White background

  // Text
  TEXT_PRIMARY: '#1F2937',   // Dark gray text
  TEXT_SECONDARY: '#E5E7EB', // Medium gray text
  TEXT_LIGHT: '#F5F7FA',     // Light gray text
  TEXT_LIGHTER: '#FFFFFF',   // White text
  TEXT_WHITE: '#FFFFFF',     // White text

  // Borders
  BORDER_LIGHT: '#E5E7EB',   // Medium gray borders
  BORDER_MAIN: '#002B7F',    // Navy blue borders
  BORDER_DARK: '#001A4D',    // Dark navy borders
} as const;

// FONTS
export const FONTS = {
  // Font Family
  FAMILY_PRIMARY: 'font-roboto',
  FAMILY_SECONDARY: 'font-sans',

  // Font Sizes
  SIZE_XS: 'text-xs',
  SIZE_SM: 'text-sm',
  SIZE_BASE: 'text-base',
  SIZE_LG: 'text-lg',
  SIZE_XL: 'text-xl',
  SIZE_2XL: 'text-2xl',
  SIZE_3XL: 'text-3xl',
  SIZE_4XL: 'text-4xl',
  SIZE_5XL: 'text-5xl',

  // Font Weights
  WEIGHT_LIGHT: 'font-light',
  WEIGHT_NORMAL: 'font-normal',
  WEIGHT_MEDIUM: 'font-medium',
  WEIGHT_SEMIBOLD: 'font-semibold',
  WEIGHT_BOLD: 'font-bold',
  WEIGHT_EXTRABOLD: 'font-extrabold',
} as const;

// SPACING
export const SPACING = {
  // Padding/Margin
  XS: '0.25rem',
  SM: '0.5rem',
  MD: '1rem',
  LG: '1.5rem',
  XL: '2rem',
  '2XL': '3rem',
  '3XL': '4rem',
  '4XL': '5rem',

  // Tailwind Classes
  PADDING_SM: 'p-2',
  PADDING_MD: 'p-4',
  PADDING_LG: 'p-8',
  MARGIN_SM: 'm-2',
  MARGIN_MD: 'm-4',
  MARGIN_LG: 'm-8',
} as const;

// TRANSITIONS
export const TRANSITIONS = {
  FAST: 'transition duration-200',
  NORMAL: 'transition duration-300',
  SLOW: 'transition duration-500',
} as const;

// SHADOWS
export const SHADOWS = {
  NONE: 'shadow-none',
  SM: 'shadow-sm',
  MD: 'shadow-md',
  LG: 'shadow-lg',
  XL: 'shadow-xl',
  '2XL': 'shadow-2xl',
} as const;

// COMMON PATTERNS
export const PATTERNS = {
  // Buttons
  BTN_PRIMARY: `bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-${COLORS.WHITE} ${FONTS.WEIGHT_SEMIBOLD} py-2 px-4 ${TRANSITIONS.NORMAL}`,
  BTN_SECONDARY: `bg-${COLORS.SECONDARY_RED} hover:bg-red-800 text-${COLORS.WHITE} ${FONTS.WEIGHT_SEMIBOLD} py-2 px-4 ${TRANSITIONS.NORMAL}`,
  BTN_ACCENT: `bg-${COLORS.SECONDARY_YELLOW} hover:bg-yellow-500 text-${COLORS.BLACK} ${FONTS.WEIGHT_SEMIBOLD} py-2 px-4 ${TRANSITIONS.NORMAL}`,

  // Cards
  CARD_LIGHT: `bg-${COLORS.WHITE} border border-${COLORS.BORDER_LIGHT} ${SHADOWS.MD} hover:${SHADOWS.LG} ${TRANSITIONS.NORMAL}`,
  CARD_DARK: `bg-${COLORS.BG_DARKER} border border-${COLORS.BORDER_MAIN} ${SHADOWS.MD} hover:${SHADOWS.LG} ${TRANSITIONS.NORMAL}`,

  // Gradients
  GRADIENT_ACCENT: `bg-gradient-to-b from-${COLORS.SECONDARY_BLUE} to-${COLORS.PRIMARY_MAIN}`,
  GRADIENT_SLATE: `bg-gradient-to-br from-${COLORS.BG_LIGHT} to-gray-100`,
  GRADIENT_DARK: `bg-gradient-to-r from-${COLORS.BG_DARKER} to-${COLORS.BG_DARK}`,
} as const;

// BREAKPOINTS (for reference, not Tailwind overrides)
export const BREAKPOINTS = {
  MOBILE: '320px',
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;
