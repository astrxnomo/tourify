import { colors, radius } from '@/constants/colors';
import { Pressable, StyleSheet, Text, type PressableProps, type ViewStyle } from 'react-native';

interface ButtonProps extends PressableProps {
  children: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
}

/**
 * Reusable Button component with multiple variants
 */
export function Button({ children, variant = 'primary', size = 'md', style, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styles[size],
        styles[variant],
        pressed && styles.pressed,
        style,
      ]}
      {...props}>
      <Text style={[styles.text, styles[`text_${variant}`], styles[`textSize_${size}`]]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: radius.full,
    borderCurve: 'continuous',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Sizes
  sm: {
    minHeight: 36,
    paddingHorizontal: 14,
  },
  md: {
    minHeight: 44,
    paddingHorizontal: 18,
  },
  lg: {
    minHeight: 52,
    paddingHorizontal: 24,
  },
  // Variants
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surfaceLight,
  },
  outline: {
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  pressed: {
    opacity: 0.7,
  },
  // Text
  text: {
    fontWeight: '700',
  },
  text_primary: {
    color: colors.textLight,
  },
  text_secondary: {
    color: colors.textPrimary,
  },
  text_outline: {
    color: colors.primary,
  },
  textSize_sm: {
    fontSize: 13,
  },
  textSize_md: {
    fontSize: 15,
  },
  textSize_lg: {
    fontSize: 17,
  },
});
