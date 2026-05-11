import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useMyRegistrations } from "../../hooks/useMyRegistrations";
import { colors, spacing } from "../constants/colors";
import { EventCard } from "../components/explore/EventCard";

export default function MyRegistrationsScreen() {
  const navigation = useNavigation();
  const { data: registrations, loading, refresh } = useMyRegistrations();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh]),
  );

  const items = (registrations ?? []).map((r) => r.event).filter(Boolean);
  const upcoming = items.filter((e) => !e.date || new Date(e.date) >= new Date());
  const past = items.filter((e) => e.date && new Date(e.date) < new Date());

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {items.length === 0 ? (
        <View style={styles.empty}>
          <MaterialIcons
            name="event-busy"
            size={64}
            color={colors.textTertiary}
          />
          <Text style={styles.emptyTitle}>No estás inscrito en eventos</Text>
          <Text style={styles.emptyText}>
            Explora la sección de eventos para inscribirte y verlos aquí.
          </Text>
        </View>
      ) : (
        <>
          {upcoming.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Próximos</Text>
              <View style={styles.list}>
                {upcoming.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    fullWidth
                    onPress={() =>
                      navigation.navigate("EventDetail", { id: event.id })
                    }
                  />
                ))}
              </View>
            </View>
          )}

          {past.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Pasados</Text>
              <View style={styles.list}>
                {past.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    fullWidth
                    onPress={() =>
                      navigation.navigate("EventDetail", { id: event.id })
                    }
                  />
                ))}
              </View>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing["3xl"],
    gap: spacing.xl,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  empty: {
    alignItems: "center",
    paddingTop: spacing["3xl"],
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  emptyText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },
  section: { gap: spacing.md },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  list: { gap: spacing.md },
});
