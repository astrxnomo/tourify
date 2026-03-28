import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

/**
 * SearchBar - Reusable search input with icon
 */
export function SearchBar({ placeholder = 'Buscar', value, onChangeText }: SearchBarProps) {
  return (
    <View style={[styles.searchBox, shadowStyles.lg]}>
      <Text style={styles.icon}>🔍</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.textTertiary}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderCurve: 'continuous',
    minHeight: 48,
    paddingHorizontal: spacing.md,
    gap: spacing.md,
  },
  icon: {
    fontSize: 18,
    color: colors.textTertiary,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
  },
});
