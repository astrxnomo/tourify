import { colors, radius, spacing } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

type SocialAuthButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  label: string;
  onPress?: () => void;
};

export function SocialAuthButton({ icon, iconColor, label, onPress }: SocialAuthButtonProps) {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={iconColor} />
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingVertical: spacing.lg,
    marginBottom: spacing.md,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginLeft: spacing.md,
  },
});
