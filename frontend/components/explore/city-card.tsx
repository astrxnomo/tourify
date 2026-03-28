import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import type { City } from '@/types';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CityCardProps = {
  city: City;
  onPress: () => void;
};

const CITY_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800&h=600';

export function CityCard({ city, onPress }: CityCardProps) {
  const imageUrl = city.images?.[0]?.url ?? CITY_FALLBACK_IMAGE;

  return (
    <Pressable style={styles.card} onPress={onPress} android_ripple={{ color: colors.primaryLight }}>
      <Image source={{ uri: imageUrl }} contentFit="cover" style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{city.name}</Text>
        <Text style={styles.country}>{city.country}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    overflow: 'hidden',
    ...shadowStyles.lg,
  },
  image: {
    width: '100%',
    height: 160,
  },
  info: {
    padding: spacing.lg,
  },
  name: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  country: {
    fontSize: 14,
    color: colors.textTertiary,
    marginTop: spacing.xs,
  },
});
