import { colors, radius, shadowStyles } from '@/constants/colors';
import { StyleSheet, View, type ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Reusable Card component with consistent styling
 * Provides elevation, rounded corners, and spacing
 */
export function Card({ children, style, shadow = 'md' }: CardProps) {
  return (
    <View style={[styles.card, shadowStyles[shadow], style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderCurve: 'continuous',
  },
});
