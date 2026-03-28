import { colors, spacing } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

/**
 * HomeHeader - Welcome header with greeting
 */
export function HomeHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Text selectable style={styles.title}>
          Explorar
        </Text>
        <Text selectable style={styles.subtitle}>
          Encuentra un lugar para ti
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: spacing.md,
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: 44,
  },
  subtitle: {
    marginTop: spacing.sm,
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
