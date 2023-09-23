import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function climate() {
  return (
    <View style={style.container}>
      <Text>climate</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#161818',
        flex:1
    }
})