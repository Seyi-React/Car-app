import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import car from "../app/asessts/images/spoi.png";
import Controls from "./components/controls/controls";
import menuOption from "./components/Menuoptions/menuOption";
import RenderOption from "./components/RenderOption/RenderOption";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View> 
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <View>
          <FontAwesome name="user-circle" size={32} color="gray" />
        </View>
      </View>

      {/* Car Section */}
      <Image source={car} resizeMode="contain" style={styles.image} />

      {/*Controls */}
      <Controls />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={menuOption}
        renderItem={RenderOption}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161818",
    padding: 24,
    flex: 1,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 17,
    color: "gray",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

});
