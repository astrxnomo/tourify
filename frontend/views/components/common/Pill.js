import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../../constants/colors";

export function Pill({ label, icon, onPress, style }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.pill, pressed && styles.pressed, style]}
      onPress={onPress}
      android_ripple={{ color: colors.surfaceLight }}
    >
      <View style={styles.content}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: colors.surface,
    borderRadius: radius.full,
    minHeight: 40,
    paddingHorizontal: spacing.md,
    justifyContent: "center",
  },
  pressed: { opacity: 0.7 },
  content: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  icon: { fontSize: 18 },
  text: { fontSize: 14, fontWeight: "600", color: colors.textSecondary },
});
