import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, shadowStyles, spacing } from "../../constants/colors";
import { Button } from "../common/Button";

export function PromoCard({ image, onPress }) {
  return (
    <View style={[styles.card, shadowStyles.xl]}>
      <Image
        source={typeof image === "string" ? { uri: image } : image}
        contentFit="cover"
        style={styles.image}
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Explora y descubre nuevos lugares</Text>
        <Text style={styles.text}>
          Explora una variedad de ofertas turísticas interesantes y elige algo
          para ti.
        </Text>
        <Button onPress={onPress} style={styles.button}>
          Iniciar sesión
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    overflow: "hidden",
    minHeight: 360,
  },
  image: { width: "100%", height: "100%", position: "absolute" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: spacing["2xl"],
    gap: spacing.md,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    color: colors.textLight,
    fontWeight: "700",
  },
  text: { fontSize: 14, lineHeight: 20, color: "rgba(247, 255, 254, 0.85)" },
  button: { marginTop: spacing.md, minHeight: 50 },
});
