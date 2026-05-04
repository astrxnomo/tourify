import { View } from "react-native";
import { colors } from "../../constants/colors";

export function Divider({
  horizontal = true,
  color = colors.surfaceLight,
  thickness = 1,
}) {
  return (
    <View
      style={[
        horizontal ? { height: thickness } : { width: thickness },
        { backgroundColor: color },
      ]}
    />
  );
}
