import { StyleSheet, View } from "react-native";
import { colors, radius, shadowStyles } from "../../constants/colors";

export function Card({ children, style, shadow = "md" }) {
  return (
    <View style={[styles.card, shadowStyles[shadow], style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
  },
});
