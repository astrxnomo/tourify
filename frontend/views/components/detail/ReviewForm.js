import { MaterialIcons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colors, radius, shadowStyles, spacing } from "../../constants/colors";
import { useReviewForm } from "../../../hooks/useReviewForm";

export function ReviewForm({ type, id, onSubmitted }) {
  const { rating, setRating, comment, setComment, submitting, submit } =
    useReviewForm({ type, id, onSuccess: onSubmitted });

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Deja tu reseña</Text>
      <Text style={styles.label}>Tu calificación</Text>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Pressable key={n} onPress={() => setRating(n)} hitSlop={6}>
            <MaterialIcons
              name={n <= rating ? "star" : "star-border"}
              size={36}
              color={n <= rating ? "#f4b400" : colors.textTertiary}
            />
          </Pressable>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Cuéntanos tu experiencia (opcional)"
        placeholderTextColor={colors.textTertiary}
        value={comment}
        onChangeText={setComment}
        multiline
        maxLength={1000}
      />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          (pressed || submitting) && styles.buttonPressed,
        ]}
        onPress={submit}
        disabled={submitting}
      >
        {submitting ? (
          <ActivityIndicator color={colors.textLight} />
        ) : (
          <>
            <MaterialIcons name="send" size={20} color={colors.textLight} />
            <Text style={styles.buttonText}>Publicar reseña</Text>
          </>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadowStyles.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  label: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  stars: {
    flexDirection: "row",
    gap: spacing.xs,
    marginBottom: spacing.lg,
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: radius.md,
    padding: spacing.md,
    fontSize: 14,
    color: colors.textPrimary,
    minHeight: 80,
    textAlignVertical: "top",
    marginBottom: spacing.md,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
  },
  buttonPressed: { opacity: 0.7 },
  buttonText: {
    color: colors.textLight,
    fontWeight: "700",
    fontSize: 15,
  },
});
