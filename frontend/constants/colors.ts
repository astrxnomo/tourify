/**
 * Color System for Tourify
 * Teal and cyan based palette for travel app
 */

export const colors = {
  // Primary colors
  primary: '#0d9d8e', // Teal - Main action color
  primaryLight: '#49bfb0', // Light teal
  primaryDark: '#087a6e', // Dark teal

  // Background
  background: '#e4edee', // Light teal background
  surfaceLight: '#e8f4f6', // Very light teal
  surface: '#ffffff', // White cards

  // Text
  textPrimary: '#12343b', // Dark blue-grey
  textSecondary: '#2f5b60', // Medium blue-grey
  textTertiary: '#55777b', // Light blue-grey
  textLight: '#f7fffe', // Almost white

  // Semantic
  success: '#15b3a7',
  warning: '#ffa500',
  error: '#ff6b6b',
  info: '#0d9d8e',

  // Overlays
  overlay: 'rgba(8, 53, 61, 0.45)',
  overlayLight: 'rgba(13, 157, 142, 0.1)',
};

export const shadows = {
  sm: {
    BoxShadow: '0 2px 8px rgba(18, 52, 59, 0.08)',
  },
  md: {
    boxShadow: '0 8px 16px rgba(18, 52, 59, 0.12)',
  },
  lg: {
    boxShadow: '0 12px 34px rgba(30, 68, 74, 0.12)',
  },
  xl: {
    boxShadow: '0 24px 36px rgba(12, 53, 58, 0.2)',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 16,
  xl: 20,
  full: 999,
};

export const shadowStyles = {
  sm: {
    elevation: 2,
  },
  md: {
    elevation: 4,
  },
  lg: {
    elevation: 8,
  },
  xl: {
    elevation: 12,
  },
};
