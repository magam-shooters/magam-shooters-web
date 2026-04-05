// Theme Configuration - Centralized color and font system
// Update values here to change colors and fonts across the entire application

export const theme = {
  // Primary Colors
  colors: {
    primary: {
      light: 'blue-400',
      main: 'blue-600',
      dark: 'blue-700',
    },
    secondary: {
      light: 'yellow-300',
      main: 'yellow-400',
      dark: 'yellow-500',
    },
    accent: {
      light: 'blue-400',
      main: 'blue-500',
      dark: 'blue-600',
    },
    // Background Colors
    background: {
      dark: 'slate-900',
      darker: 'slate-800',
      light: 'slate-50',
      lightest: 'white',
    },
    // Text Colors
    text: {
      primary: 'gray-900',
      secondary: 'gray-600',
      light: 'gray-400',
      lighter: 'gray-300',
      white: 'white',
      inverse: 'slate-900',
    },
    // Border Colors
    border: {
      light: 'gray-100',
      main: 'slate-700',
      dark: 'slate-600',
    },
    // Gradient Colors
    gradient: {
      lime: 'from-blue-500 to-blue-700',
      slate: 'from-slate-50 to-slate-100',
      dark: 'from-slate-800 to-slate-900',
      dark_left: 'from-slate-800 to-slate-900',
      orange_bg: 'from-blue-700 to-blue-900',
    },
  },

  // Font Family Configuration
  fonts: {
    primary: 'font-inter',
    body: 'font-sans',
  },

  // Font Sizes
  fontSize: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  },

  // Font Weights
  fontWeight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  },

  // Spacing
  spacing: {
    xs: 'px-2 py-1',
    sm: 'px-3 py-2',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
    xl: 'px-8 py-4',
  },

  // Shadow
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  },

  // Transitions
  transition: {
    fast: 'transition duration-200',
    normal: 'transition duration-300',
    slow: 'transition duration-500',
  },

  // Border Radius (Plain borders for minimalist design)
  borderRadius: {
    none: '',
    sm: 'border',
    md: 'border',
    lg: 'border',
    full: 'border',
  },

  // Common Button Styles
  buttons: {
    primary: `bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 transition duration-300`,
    secondary: `bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-4 transition duration-300`,
    accent: `bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 transition duration-300`,
    outline: `border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 transition duration-300`,
  },

  // Common Card Styles
  card: {
    base: `bg-white border border-gray-100 shadow-md hover:shadow-lg transition duration-300`,
    dark: `bg-slate-800 hover:bg-slate-700 transition duration-300`,
  },

  // Common Section Styles
  section: {
    padding: 'py-16 px-4 sm:px-6 lg:px-8',
    paddingLarge: 'py-20 px-4 sm:px-6 lg:px-8',
    maxWidth: 'max-w-7xl mx-auto',
  },
} as const;

// Helper function to get theme values
export function getTheme<K extends keyof typeof theme>(key: K) {
  return theme[key];
}
