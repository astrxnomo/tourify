import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { colors, radius, shadowStyles, spacing } from "../../constants/colors";

export function AuthInput({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = "default",
  autoComplete = "off",
  autoCapitalize = "none",
  toggleVisibility,
  onToggleVisibility,
}) {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={icon}
        size={20}
        color={colors.textTertiary}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.textTertiary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
      />
      {toggleVisibility && onToggleVisibility && (
        <MaterialIcons
          name={toggleVisibility ? "visibility" : "visibility-off"}
          size={20}
          color={colors.textTertiary}
          style={styles.toggleIcon}
          onPress={onToggleVisibility}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    minHeight: 52,
    marginBottom: spacing.md,
    ...shadowStyles.sm,
  },
  icon: {
    marginRight: spacing.md,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.textPrimary,
  },
  toggleIcon: {
    marginLeft: spacing.md,
  },
});
