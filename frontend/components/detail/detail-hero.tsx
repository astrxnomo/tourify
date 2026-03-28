import { colors, spacing } from '@/constants/colors';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

interface DetailHeroProps {
  imageUrl?: string;
  badge?: string;
  backgroundColor?: string;
  height?: number;
  children?: React.ReactNode;
}

/**
 * DetailHero - Hero section with image or custom children
 * Used as header in detail screens (city, place, event)
 */
export function DetailHero({
  imageUrl,
  badge,
  backgroundColor = colors.primary,
  height = 240,
  children,
}: DetailHeroProps) {
  return (
    <View style={[styles.hero, { backgroundColor, height }]}>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          contentFit="cover"
        />
      ) : (
        children
      )}
      {badge && <View style={styles.badge}>{badge}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  badge: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
  },
});
