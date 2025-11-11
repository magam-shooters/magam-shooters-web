// Color Utility Functions
// Helper functions to build color classes dynamically

import { theme } from './theme';

export const colorUtils = {
  // Text colors
  textPrimary: () => `text-${theme.colors.text.primary}`,
  textSecondary: () => `text-${theme.colors.text.secondary}`,
  textLight: () => `text-${theme.colors.text.light}`,

  // Background colors
  bgPrimary: () => `bg-${theme.colors.background.dark}`,
  bgSecondary: () => `bg-${theme.colors.background.darker}`,
  bgLight: () => `bg-${theme.colors.background.light}`,

  // Button colors
  buttonPrimary: () => `bg-${theme.colors.primary.main} hover:bg-${theme.colors.primary.dark}`,
  buttonSecondary: () => `bg-${theme.colors.secondary.light} hover:bg-${theme.colors.secondary.main}`,

  // Border colors
  borderLight: () => `border-${theme.colors.border.light}`,
  borderMain: () => `border-${theme.colors.border.main}`,

  // Gradients
  gradientAccent: () => `bg-gradient-to-b ${theme.colors.gradient.lime}`,
  gradientLight: () => `bg-gradient-to-br ${theme.colors.gradient.slate}`,

  // Get specific color value
  getColor: (colorKey: string) => {
    const keys = colorKey.split('.');
    let color: any = theme.colors;
    for (const key of keys) {
      color = color[key];
    }
    return color;
  },
};

// CSS-in-JS style object builders
export const styleBuilders = {
  primaryButton: () => ({
    className: `bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 transition duration-300`,
  }),

  secondaryButton: () => ({
    className: `bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 transition duration-300`,
  }),

  card: () => ({
    className: `bg-white border border-gray-100 shadow-md hover:shadow-lg transition duration-300`,
  }),

  darkCard: () => ({
    className: `bg-slate-800 border border-slate-700 hover:bg-slate-700 transition duration-300`,
  }),
};
