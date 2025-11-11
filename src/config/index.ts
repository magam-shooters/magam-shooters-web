// Configuration Index - Export all theme and design tokens

export { colorUtils, styleBuilders } from './colors';
export { BREAKPOINTS, COLORS, FONTS, PATTERNS, SHADOWS, SPACING, TRANSITIONS } from './designTokens';
export { ALT_TEXT, IMAGE_CATEGORIES, IMAGES } from './images';
export { getTheme, theme } from './theme';

// Re-export as single config object for convenience
export const CONFIG = {
  colors: require('./designTokens').COLORS,
  fonts: require('./designTokens').FONTS,
  spacing: require('./designTokens').SPACING,
  transitions: require('./designTokens').TRANSITIONS,
  shadows: require('./designTokens').SHADOWS,
  patterns: require('./designTokens').PATTERNS,
  breakpoints: require('./designTokens').BREAKPOINTS,
  images: require('./images').IMAGES,
};
