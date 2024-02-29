import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import BotonPropio from '../components/BotonPropio'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
      
      
        <BotonPropio
              nombre={"Mis plantas"}
              colorFondo={"#5DC966"}
              onPress={() => {navigation.navigate("Mis plantas")}}
              />
        <BotonPropio
              nombre={"+ Info"}
              colorFondo={"#5DC966"}
              onPress={() => {console.log("+ info")}}
              />

    
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAF0E6',
        alignItems: 'center',
        justifyContent: "center",
        gap:30,
      },
      
})