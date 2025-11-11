// Design Tokens - Single source of truth for all design values
// Update these values to change the entire application's appearance

// COLORS
export const COLORS = {
  // Primary Palette
  PRIMARY_LIGHT: 'blue-400',
  PRIMARY_MAIN: 'blue-600',
  PRIMARY_DARK: 'blue-700',

  // Secondary Palette (Accent)
  SECONDARY_LIGHT: 'orange-500',
  SECONDARY_MAIN: 'orange-600',
  SECONDARY_DARK: 'orange-700',

  // Tertiary Palette (Accent 2)
  TERTIARY_LIGHT: 'lime-500',
  TERTIARY_MAIN: 'lime-600',
  TERTIARY_DARK: 'lime-700',

  // Neutrals - Background
  BG_DARK: 'slate-900',
  BG_DARKER: 'slate-800',
  BG_LIGHT: 'slate-50',
  BG_WHITE: 'white',

  // Neutrals - Text
  TEXT_PRIMARY: 'gray-900',
  TEXT_SECONDARY: 'gray-600',
  TEXT_LIGHT: 'gray-400',
  TEXT_LIGHTER: 'gray-300',
  TEXT_WHITE: 'white',

  // Neutrals - Borders
  BORDER_LIGHT: 'gray-100',
  BORDER_MAIN: 'slate-700',
  BORDER_DARK: 'slate-600',
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
  BTN_PRIMARY: `bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white ${FONTS.WEIGHT_SEMIBOLD} py-2 px-4 ${TRANSITIONS.NORMAL}`,
  BTN_SECONDARY: `bg-${COLORS.SECONDARY_LIGHT} hover:bg-${COLORS.SECONDARY_MAIN} text-white ${FONTS.WEIGHT_SEMIBOLD} py-2 px-4 ${TRANSITIONS.NORMAL}`,
  BTN_ACCENT: `bg-${COLORS.TERTIARY_LIGHT} hover:bg-${COLORS.TERTIARY_MAIN} text-white ${FONTS.WEIGHT_SEMIBOLD} py-2 px-4 ${TRANSITIONS.NORMAL}`,

  // Cards
  CARD_LIGHT: `bg-${COLORS.BG_WHITE} border border-${COLORS.BORDER_LIGHT} ${SHADOWS.MD} hover:${SHADOWS.LG} ${TRANSITIONS.NORMAL}`,
  CARD_DARK: `bg-${COLORS.BG_DARKER} border border-${COLORS.BORDER_MAIN} ${SHADOWS.MD} hover:${SHADOWS.LG} ${TRANSITIONS.NORMAL}`,

  // Gradients
  GRADIENT_ACCENT: `bg-gradient-to-b from-${COLORS.TERTIARY_LIGHT} to-${COLORS.TERTIARY_MAIN}`,
  GRADIENT_SLATE: `bg-gradient-to-br from-${COLORS.BG_LIGHT} to-slate-100`,
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
