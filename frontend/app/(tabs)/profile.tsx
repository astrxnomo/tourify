import { Button } from '@/components/common';
import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { getUnreadNotificationsCount, users } from '@/data/mock-data';
import { MaterialIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const CURRENT_USER_ID = 1;

export default function ProfileScreen() {
  const currentUser = users.find((user) => user.id === CURRENT_USER_ID);
  const unreadCount = getUnreadNotificationsCount(CURRENT_USER_ID);

  const handleLogout = () => {
    Alert.alert('Cerrar Sesión', '¿Estás seguro que deseas cerrar sesión?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Cerrar Sesión', style: 'destructive', onPress: () => router.push('/auth/login' as Href) },
    ]);
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <MaterialIcons name="person" size={56} color={colors.textLight} />
        </View>
        <Text style={styles.userName}>{currentUser?.name || 'Usuario'}</Text>
        <Text style={styles.userEmail}>{currentUser?.email || 'email@example.com'}</Text>
      </View>

      <View style={styles.menuSection}>
        <Pressable style={styles.menuItem} onPress={() => router.push('/notifications' as Href)}>
          <View style={styles.menuItemLeft}>
            <MaterialIcons name="notifications" size={24} color={colors.primary} />
            <Text style={styles.menuItemText}>Notificaciones</Text>
          </View>
          <View style={styles.menuItemRight}>
            {unreadCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{unreadCount}</Text>
              </View>
            )}
            <MaterialIcons name="chevron-right" size={24} color={colors.textTertiary} />
          </View>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <MaterialIcons name="edit" size={24} color={colors.success} />
            <Text style={styles.menuItemText}>Editar Perfil</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={colors.textTertiary} />
        </Pressable>

        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <MaterialIcons name="star" size={24} color={colors.warning} />
            <Text style={styles.menuItemText}>Mis Reseñas</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={colors.textTertiary} />
        </Pressable>

        <Pressable style={styles.menuItemNoBorder}>
          <View style={styles.menuItemLeft}>
            <MaterialIcons name="settings" size={24} color={colors.textSecondary} />
            <Text style={styles.menuItemText}>Configuración</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={colors.textTertiary} />
        </Pressable>
      </View>

      <View style={styles.menuSection}>
        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <MaterialIcons name="help-outline" size={24} color={colors.primary} />
            <Text style={styles.menuItemText}>Ayuda y Soporte</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={colors.textTertiary} />
        </Pressable>

        <Pressable style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <MaterialIcons name="info-outline" size={24} color={colors.primary} />
            <Text style={styles.menuItemText}>Acerca de Tourify</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={colors.textTertiary} />
        </Pressable>

        <Pressable style={styles.menuItemNoBorder}>
          <View style={styles.menuItemLeft}>
            <MaterialIcons name="privacy-tip" size={24} color={colors.textSecondary} />
            <Text style={styles.menuItemText}>Privacidad</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={colors.textTertiary} />
        </Pressable>
      </View>

      <Button variant="outline" size="lg" style={styles.logoutButton} onPress={handleLogout}>
        Cerrar Sesión
      </Button>

      <Text style={styles.version}>Versión 1.0.0</Text>
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
    paddingBottom: spacing['3xl'],
    gap: spacing.lg,
  },
  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    backgroundColor: colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    ...shadowStyles.md,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  userEmail: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  menuSection: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    overflow: 'hidden',
    ...shadowStyles.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceLight,
  },
  menuItemNoBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: colors.textPrimary,
    marginLeft: spacing.lg,
  },
  badge: {
    backgroundColor: colors.error,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
    paddingHorizontal: 8,
  },
  badgeText: {
    color: colors.textLight,
    fontSize: 12,
    fontWeight: '700',
  },
  logoutButton: {
    marginTop: spacing.sm,
  },
  version: {
    textAlign: 'center',
    color: colors.textTertiary,
    fontSize: 12,
    marginTop: spacing.md,
  },
});
