import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { resolveImageUrl } from "../../../utils/image";
import { colors, spacing } from "../../constants/colors";

export function DetailHero({
  imageUrl,
  backgroundColor = colors.primary,
  height = 240,
  children,
}) {
  return (
    <View style={[styles.hero, { backgroundColor, height }]}>
      {imageUrl && (
        <Image
          source={{ uri: resolveImageUrl(imageUrl) }}
          style={styles.image}
          contentFit="cover"
        />
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: { ...StyleSheet.absoluteFillObject },
});
