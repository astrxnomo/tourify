import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

interface DetailCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * DetailCard - Main information card for detail screens
 */
export function DetailCard({
  title,
  subtitle,
  description,
  children,
}: DetailCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      
      {description && <Text style={styles.description}>{description}</Text>}
      
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderRadius: radius.lg,
    borderCurve: 'continuous',
    ...shadowStyles.md,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
});
