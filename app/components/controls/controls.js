import { View,StyleSheet } from 'react-native'
import React from 'react'
import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
    Ionicons,
  } from "@expo/vector-icons";

const  Controls = () => {
  return (
    <View>
        <View style={styles.controls}>
        <FontAwesome5 name="lock" size={24} color="gray" />
        <MaterialCommunityIcons name="fan" size={24} color="gray" />
        <FontAwesome name="bolt" size={24} color="gray" />
        <Ionicons name="car-sport-sharp" size={24} color="gray" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    controls:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginVertical:10
    }
  });

  export default Controls;