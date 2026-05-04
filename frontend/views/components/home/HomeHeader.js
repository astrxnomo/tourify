import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../../constants/colors";

export function HomeHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Explorar</Text>
        <Text style={styles.subtitle}>Encuentra un lugar para ti</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingVertical: spacing.md },
  title: {
    fontSize: 38,
    fontWeight: "700",
    color: colors.textPrimary,
    lineHeight: 44,
  },
  subtitle: {
    marginTop: spacing.sm,
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
