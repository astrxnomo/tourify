import { colors, radius, spacing } from '@/constants/colors';
import { Pressable, StyleSheet, Text, type ViewStyle } from 'react-native';

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

/**
 * Reusable Chip component for filters and selections
 */
export function Chip({ label, active = false, onPress, style }: ChipProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.chip,
        active && styles.chipActive,
        pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
      android_ripple={{ color: colors.primaryLight, radius: 20 }}>
      <Text
        style={[styles.text, active && styles.textActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: spacing.md,
    minHeight: 36,
    borderRadius: radius.full,
    borderCurve: 'continuous',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  chipActive: {
    backgroundColor: colors.primary,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textTertiary,
  },
  textActive: {
    color: colors.textLight,
  },
});
