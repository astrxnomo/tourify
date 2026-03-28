import { colors, radius, spacing } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface AuthCheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label: string;
  links?: { text: string; onPress: () => void }[];
}

/**
 * AuthCheckbox - Checkbox for auth forms (terms, etc)
 */
export function AuthCheckbox({
  checked,
  onToggle,
  label,
  links,
}: AuthCheckboxProps) {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <View
        style={[
          styles.checkbox,
          checked && styles.checkboxChecked,
        ]}>
        {checked && (
          <MaterialIcons name="check" size={16} color={colors.textLight} />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
      {links && links.map((link, idx) => (
        <Pressable key={idx} onPress={link.onPress}>
          <Text style={styles.link}>{link.text}</Text>
        </Pressable>
      ))}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing.md,
    gap: spacing.sm,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: radius.sm,
    borderWidth: 2,
    borderColor: colors.textTertiary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 20,
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
