import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

export function SectionHeader({ title, actionLabel, onAction }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel && (
        <Pressable onPress={onAction}>
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "700", color: colors.textPrimary },
  action: { fontSize: 14, fontWeight: "600", color: colors.primary },
});
