import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import BotonPropio from '../components/BotonPropio'

const Home = ({setHome}) => {
  return (
    <View style = {styles.container}>
      <Cabecera/>
      
        <BotonPropio
              nombre={"Mis plantas"}
              colorFondo={"#5DC966"}
              onPress={() => {setHome(true)}}
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
        justifyContent: "flex-start",
        gap:20,
      },
      
})