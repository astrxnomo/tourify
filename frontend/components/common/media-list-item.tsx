import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type MediaListItemProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  imageUrl?: string;
  fallbackImageUrl: string;
  onPress?: () => void;
  unread?: boolean;
  showChevron?: boolean;
  rightAdornment?: React.ReactNode;
};

export function MediaListItem({
  title,
  subtitle,
  meta,
  imageUrl,
  fallbackImageUrl,
  onPress,
  unread = false,
  showChevron = true,
  rightAdornment,
}: MediaListItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, unread && styles.unreadCard, pressed && styles.cardPressed]}
      onPress={onPress}>
      <Image source={{ uri: imageUrl ?? fallbackImageUrl }} contentFit="cover" style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={styles.subtitle} numberOfLines={2}>
            {subtitle}
          </Text>
        ) : null}
        {meta ? <Text style={styles.meta}>{meta}</Text> : null}
      </View>

      {rightAdornment}
      {showChevron ? <MaterialIcons name="chevron-right" size={22} color={colors.textTertiary} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.md,
    ...shadowStyles.md,
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  cardPressed: {
    opacity: 0.82,
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceLight,
  },
  content: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  meta: {
    fontSize: 12,
    color: colors.textTertiary,
    fontWeight: '600',
  },
});
