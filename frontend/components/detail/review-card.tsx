import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

interface ReviewCardProps {
  rating: number;
  comment?: string;
  author?: string;
}

/**
 * ReviewCard - Review/opinion card
 */
export function ReviewCard({ rating, comment, author = 'Usuario' }: ReviewCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <MaterialIcons name="person" size={24} color={colors.textTertiary} />
        </View>
        
        <View style={styles.info}>
          <Text style={styles.author}>{author}</Text>
          <View style={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <MaterialIcons
                key={i}
                name="star"
                size={14}
                color={i < rating ? '#f4b400' : colors.surfaceLight}
              />
            ))}
          </View>
        </View>
      </View>
      
      {comment && <Text style={styles.comment}>{comment}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    marginBottom: spacing.sm,
    ...shadowStyles.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  info: {
    flex: 1,
  },
  author: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  rating: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  comment: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textSecondary,
  },
});
