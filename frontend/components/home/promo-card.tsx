import { Button } from '@/components/common';
import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { Image, ImageSource } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type PromoCardProps = {
  image: string | ImageSource;
  onPress?: () => void;
};

/**
 * PromoCard - Full-width promotional banner with overlay and CTA
 */
export function PromoCard({ image, onPress }: PromoCardProps) {
  return (
    <View style={[styles.card, shadowStyles.xl]}>
      <Image source={image} contentFit="cover" style={styles.image} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text selectable style={styles.title}>
          Explora y descubre nuevos lugares
        </Text>
        <Text selectable style={styles.text}>
          Explora una variedad de ofertas turísticas interesantes y elige algo para ti.
        </Text>
        <Button
          onPress={onPress}
          style={styles.button}>
          Iniciar sesión
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    minHeight: 360,
    borderCurve: 'continuous',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing['2xl'],
    gap: spacing.md,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    color: colors.textLight,
    fontWeight: '700',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(247, 255, 254, 0.85)',
  },
  button: {
    marginTop: spacing.md,
    minHeight: 50,
  },
});
