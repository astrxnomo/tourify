import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../../constants/colors";
import { useUser } from "../../../hooks/useUser";

export function HomeHeader() {
  const { data: user } = useUser();
  const firstName = user?.name?.split(" ")[0];
  const greeting = firstName ? `Hola, ${firstName}` : "Hola";

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.title}>¿Listo para explorar?</Text>
        <Text style={styles.subtitle}>
          Descubre los mejores lugares cerca de ti
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingVertical: spacing.md },
  greeting: {
    fontSize: 14,
    color: colors.textTertiary,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.textPrimary,
    lineHeight: 36,
  },
  subtitle: {
    marginTop: spacing.sm,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
