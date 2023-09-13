import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ControlScreen = () => {
  const router = useRouter();
  return (
    <View style={style.container}>
      <Pressable>
        <Ionicons
          style={style.back}
          name="chevron-back-outline"
          size={28}
          color="white"
          onPress={() => router.back()}
          />
      </Pressable>
      <View>
        <MaterialCommunityIcons
          style={style.mainText}
          name="car-connected"
          size={78}
          color="gray"
        />
      </View>
      <View style={style.textOption}>
        <Text style={style.option}>1. Take care of your car controls</Text>
        <Text style={style.option}>
          2. Car controls should be well taken care of
        </Text>
        <Text style={style.option}>
          3. Controls should be checked regularly
        </Text>
        <Text style={style.option}>4. Don't OverSpeed</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#161818",
  },
  mainText: {
    marginTop: 50,
  },
  textOption: {
    marginTop: 120,
  },
  option: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
    letterSpacing: 1,
  },
  back: {
    position: "relative",
    right: 140,
    top: 25,
    backgroundColor: "gray",
    borderRadius: 5,
  },
});

export default ControlScreen;
