import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEventDetail } from "../../hooks/useEventDetail";
import { useEventRegistration } from "../../hooks/useEventRegistration";
import { useFavorites } from "../../hooks/useFavorites";
import { resolveImageUrl } from "../../utils/image";
import { colors, spacing } from "../constants/colors";
import { DetailCard } from "../components/detail/DetailCard";
import { DetailHero } from "../components/detail/DetailHero";
import { ReviewCard } from "../components/detail/ReviewCard";
import { ReviewForm } from "../components/detail/ReviewForm";

export default function EventDetailScreen() {
  const navigation = useNavigation();
  const { id } = useRoute().params;
  const { data: event, loading, refresh } = useEventDetail(id);
  const { isFavorite, toggleFavorite } = useFavorites();
  const {
    registered,
    loading: registering,
    register,
    confirmUnregister,
  } = useEventRegistration({
    eventId: id,
    initialRegistered: !!event?.is_registered,
    onChange: refresh,
  });

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!event) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFound}>Evento no encontrado</Text>
      </View>
    );
  }

  const eventDate = new Date(event.date);
  const isUpcoming = eventDate > new Date();
  const isFav = isFavorite("event", event.id);
  const imageUrl =
    resolveImageUrl(event.images?.[0]?.url) ||
    "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=800&h=600";

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <DetailHero imageUrl={imageUrl}>
        {isUpcoming && (
          <View style={styles.upcomingBadge}>
            <Text style={styles.upcomingText}>Próximo</Text>
          </View>
        )}
      </DetailHero>

      <DetailCard title={event.title}>
        <View style={styles.header}>
          <View style={styles.flex1} />
          <Pressable
            style={styles.favoriteButton}
            onPress={() => toggleFavorite("event", event.id)}
          >
            <MaterialIcons
              name={isFav ? "favorite" : "favorite-border"}
              size={28}
              color={colors.error}
            />
          </Pressable>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons
            name="calendar-today"
            size={20}
            color={colors.warning}
          />
          <Text style={styles.infoText}>
            {eventDate.toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons name="access-time" size={20} color={colors.warning} />
          <Text style={styles.infoText}>
            {eventDate.toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>

        {event.city && (
          <View style={styles.infoRow}>
            <MaterialIcons
              name="location-city"
              size={20}
              color={colors.primary}
            />
            <Text style={styles.infoText}>{event.city.name}</Text>
          </View>
        )}

        {event.place && (
          <Pressable
            style={styles.infoRow}
            onPress={() =>
              navigation.navigate("PlaceDetail", { id: event.place_id })
            }
          >
            <MaterialIcons name="place" size={20} color={colors.primary} />
            <Text style={[styles.infoText, styles.linkText]}>
              {event.place.name}
            </Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={colors.primary}
            />
          </Pressable>
        )}

        <Text style={styles.description}>{event.description}</Text>

        {event.registrations_count > 0 && (
          <View style={styles.attendeesRow}>
            <MaterialIcons name="people" size={18} color={colors.primary} />
            <Text style={styles.attendeesText}>
              {event.registrations_count}{" "}
              {event.registrations_count === 1
                ? "persona inscrita"
                : "personas inscritas"}
            </Text>
          </View>
        )}
      </DetailCard>

      {isUpcoming && (
        <View style={styles.registrationBlock}>
          {registered && (
            <View style={styles.registeredBadge}>
              <MaterialIcons
                name="check-circle"
                size={20}
                color={colors.success}
              />
              <Text style={styles.registeredText}>
                Estás inscrito a este evento
              </Text>
            </View>
          )}
          <Pressable
            style={({ pressed }) => [
              registered ? styles.cancelButton : styles.registerButton,
              (pressed || registering) && styles.buttonPressed,
            ]}
            onPress={registered ? confirmUnregister : register}
            disabled={registering}
          >
            {registering ? (
              <ActivityIndicator
                color={registered ? colors.error : colors.textLight}
              />
            ) : (
              <>
                <MaterialIcons
                  name={registered ? "cancel" : "event-available"}
                  size={22}
                  color={registered ? colors.error : colors.textLight}
                />
                <Text
                  style={
                    registered
                      ? styles.cancelButtonText
                      : styles.registerButtonText
                  }
                >
                  {registered ? "Cancelar inscripción" : "Registrarme"}
                </Text>
              </>
            )}
          </Pressable>
        </View>
      )}

      <View style={styles.actionButtons}>
        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <MaterialIcons name="share" size={24} color={colors.primary} />
          <Text style={styles.actionButtonText}>Compartir</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <MaterialIcons
            name="add-to-photos"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.actionButtonText}>Calendario</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Opiniones ({event.reviews?.length || 0})
        </Text>
        <ReviewForm type="event" id={event.id} onSubmitted={refresh} />
        {event.reviews?.map((review) => (
          <ReviewCard
            key={review.id}
            rating={review.rating}
            comment={review.comment}
            author={review.user?.name}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  contentContainer: { paddingBottom: spacing.lg },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  notFound: { fontSize: 16, color: colors.textSecondary },
  upcomingBadge: {
    position: "absolute",
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.success,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
  },
  upcomingText: { color: colors.textLight, fontSize: 14, fontWeight: "bold" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.md,
  },
  flex1: { flex: 1 },
  favoriteButton: { padding: spacing.sm },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  infoText: {
    fontSize: 15,
    color: colors.textSecondary,
    marginLeft: spacing.md,
    flex: 1,
  },
  linkText: { color: colors.primary, fontWeight: "600" },
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginTop: spacing.md,
  },
  actionButtons: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginVertical: spacing.md,
  },
  registrationBlock: {
    paddingHorizontal: spacing.lg,
    marginVertical: spacing.md,
    gap: spacing.md,
  },
  registeredBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: `${colors.success}15`,
    borderRadius: 12,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  registeredText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.success,
  },
  registerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    backgroundColor: colors.success,
    borderRadius: 12,
    paddingVertical: spacing.lg,
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderColor: colors.error,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: spacing.lg,
  },
  cancelButtonText: {
    fontSize: 16,
    color: colors.error,
    fontWeight: "700",
  },
  attendeesRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceLight,
  },
  attendeesText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "600",
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingVertical: spacing.lg,
  },
  buttonPressed: { opacity: 0.7 },
  registerButtonText: {
    fontSize: 16,
    color: colors.textLight,
    fontWeight: "bold",
    marginLeft: spacing.sm,
  },
  actionButtonText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: "600",
    marginLeft: spacing.sm,
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
});
