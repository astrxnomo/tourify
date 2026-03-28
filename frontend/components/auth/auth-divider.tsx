import { colors, spacing } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

interface AuthDividerProps {
  text?: string;
}

/**
 * AuthDivider - Divider with optional text
 */
export function AuthDivider({ text = 'O' }: AuthDividerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginVertical: spacing.lg,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.surfaceLight,
  },
  text: {
    fontSize: 13,
    color: colors.textTertiary,
    fontWeight: '600',
  },
});
