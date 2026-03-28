import { DetailCard, DetailHero, ReviewCard } from '@/components/detail';
import { colors, spacing } from '@/constants/colors';
import { getEventById } from '@/data/mock-data';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams();
  const eventId = parseInt(id as string);
  const event = getEventById(eventId);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Evento no encontrado</Text>
      </View>
    );
  }

  const eventDate = new Date(event.date);
  const isUpcoming = eventDate > new Date();

  const handleRegister = () => {
    Alert.alert('Registrarse', '¿Deseas registrarte para este evento?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Registrar', onPress: () => Alert.alert('¡Éxito!', 'Te has registrado para el evento') },
    ]);
  };

  const openPlace = () => {
    if (event.place_id) {
      router.push(`/place/${event.place_id}` as any);
    }
  };

  const imageUrl = event.images?.[0]?.url || 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=800&h=600';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
          <Pressable style={styles.favoriteButton}>
            <MaterialIcons name="favorite-border" size={28} color={colors.error} />
          </Pressable>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons name="calendar-today" size={20} color={colors.warning} />
          <Text style={styles.infoText}>
            {eventDate.toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons name="access-time" size={20} color={colors.warning} />
          <Text style={styles.infoText}>
            {eventDate.toLocaleTimeString('es-ES', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </View>

        {event.city && (
          <View style={styles.infoRow}>
            <MaterialIcons name="location-city" size={20} color={colors.primary} />
            <Text style={styles.infoText}>{event.city.name}</Text>
          </View>
        )}

        {event.place && (
          <Pressable style={styles.infoRow} onPress={openPlace}>
            <MaterialIcons name="place" size={20} color={colors.primary} />
            <Text style={[styles.infoText, styles.linkText]}>{event.place.name}</Text>
            <MaterialIcons name="chevron-right" size={20} color={colors.primary} />
          </Pressable>
        )}

        <Text style={styles.description}>{event.description}</Text>
      </DetailCard>

      {isUpcoming && (
        <View style={styles.actionButtons}>
          <Pressable style={({ pressed }) => [styles.registerButton, pressed && styles.buttonPressed]} onPress={handleRegister}>
            <MaterialIcons name="event-available" size={24} color={colors.textLight} />
            <Text style={styles.registerButtonText}>Registrarme</Text>
          </Pressable>
        </View>
      )}

      <View style={styles.actionButtons}>
        <Pressable style={({ pressed }) => [styles.actionButton, pressed && styles.buttonPressed]}>
          <MaterialIcons name="share" size={24} color={colors.primary} />
          <Text style={styles.actionButtonText}>Compartir</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.actionButton, pressed && styles.buttonPressed]}>
          <MaterialIcons name="add-to-photos" size={24} color={colors.primary} />
          <Text style={styles.actionButtonText}>Calendario</Text>
        </Pressable>
      </View>

      {event.reviews && event.reviews.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Opiniones ({event.reviews.length})</Text>

          {event.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingBottom: spacing.lg,
  },
  upcomingBadge: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.success,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
  },
  upcomingText: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  flex1: {
    flex: 1,
  },
  favoriteButton: {
    padding: spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  infoText: {
    fontSize: 15,
    color: colors.textSecondary,
    marginLeft: spacing.md,
    flex: 1,
  },
  linkText: {
    color: colors.primary,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginTop: spacing.md,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginVertical: spacing.md,
  },
  registerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.success,
    borderRadius: 12,
    paddingVertical: spacing.lg,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingVertical: spacing.lg,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  registerButtonText: {
    fontSize: 16,
    color: colors.textLight,
    fontWeight: 'bold',
    marginLeft: spacing.sm,
  },
  actionButtonText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
    marginLeft: spacing.sm,
    textAlign: 'center',
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
});
