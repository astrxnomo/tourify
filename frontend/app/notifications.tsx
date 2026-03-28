import { MediaListItem } from '@/components/common';
import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { getCityById, getEventById, getPlaceById, getUserNotifications } from '@/data/mock-data';
import { MaterialIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const CURRENT_USER_ID = 1;

export default function NotificationsScreen() {
  const notifications = getUserNotifications(CURRENT_USER_ID);
  const unreadNotifications = notifications.filter((n) => !n.is_read);
  const readNotifications = notifications.filter((n) => n.is_read);

  const getNotificationImage = (type?: string, id?: number) => {
    if (!type || !id) {
      return undefined;
    }

    if (type === 'event') {
      return getEventById(id)?.images?.[0]?.url;
    }
    if (type === 'place') {
      return getPlaceById(id)?.images?.[0]?.url;
    }
    if (type === 'city') {
      return getCityById(id)?.images?.[0]?.url;
    }

    return undefined;
  };

  const handleNotificationPress = (notification: any) => {
    if (notification.notifiable_type && notification.notifiable_id) {
      if (notification.notifiable_type === 'event') {
        router.push({ pathname: '/event/[id]', params: { id: String(notification.notifiable_id) } } as Href);
      } else if (notification.notifiable_type === 'place') {
        router.push({ pathname: '/place/[id]', params: { id: String(notification.notifiable_id) } } as Href);
      } else if (notification.notifiable_type === 'city') {
        router.push({ pathname: '/city/[id]', params: { id: String(notification.notifiable_id) } } as Href);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `Hace ${diffMins} min`;
    } else if (diffHours < 24) {
      return `Hace ${diffHours} h`;
    } else if (diffDays < 7) {
      return `Hace ${diffDays} d`;
    } else {
      return date.toLocaleDateString('es-ES');
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {notifications.length === 0 ? (
        <View style={styles.emptyState}>
          <MaterialIcons name="notifications-none" size={80} color={colors.textTertiary} />
          <Text style={styles.emptyText}>No tienes notificaciones</Text>
          <Text style={styles.emptySubtext}>Te notificaremos cuando haya algo nuevo</Text>
        </View>
      ) : (
        <>
          {unreadNotifications.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Nuevas</Text>
              {unreadNotifications.map((notification) => {
                const imageUrl = getNotificationImage(notification.notifiable_type, notification.notifiable_id);
                return (
                  <MediaListItem
                    key={notification.id}
                    title={notification.title}
                    subtitle={notification.message}
                    meta={formatDate(notification.created_at)}
                    imageUrl={imageUrl}
                    fallbackImageUrl="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=600"
                    unread
                    rightAdornment={<View style={styles.unreadDot} />}
                    onPress={() => handleNotificationPress(notification)}
                  />
                );
              })}
            </View>
          )}

          {readNotifications.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Anteriores</Text>
              {readNotifications.map((notification) => {
                const imageUrl = getNotificationImage(notification.notifiable_type, notification.notifiable_id);
                return (
                  <MediaListItem
                    key={notification.id}
                    title={notification.title}
                    subtitle={notification.message}
                    meta={formatDate(notification.created_at)}
                    imageUrl={imageUrl}
                    fallbackImageUrl="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=600"
                    onPress={() => handleNotificationPress(notification)}
                  />
                );
              })}
            </View>
          )}
        </>
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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing['3xl'],
    gap: spacing.lg,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['3xl'],
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    ...shadowStyles.md,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
    marginTop: spacing.md,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textTertiary,
    marginTop: spacing.sm,
  },
  section: {
    gap: spacing.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  unreadDot: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginLeft: spacing.sm,
    marginTop: spacing.xs,
  },
});
