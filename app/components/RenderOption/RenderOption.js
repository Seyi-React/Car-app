import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";

const RenderOption = ({ item }) => {
  return (
    <View style={styles.optionRow}>
      {/* icon */}
      <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />

      {/* Text */}
      <Text style={styles.optionText}>{item.name}</Text>

      {/* Icon */}
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default RenderOption;
