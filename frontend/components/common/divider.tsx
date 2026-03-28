import { colors } from '@/constants/colors';
import { View } from 'react-native';

interface DividerProps {
  horizontal?: boolean;
  color?: string;
  thickness?: number;
}

/**
 * Reusable Divider component
 */
export function Divider({ horizontal = true, color = colors.surfaceLight, thickness = 1 }: DividerProps) {
  return (
    <View
      style={[
        horizontal ? { height: thickness } : { width: thickness },
        { backgroundColor: color },
      ]}
    />
  );
}
