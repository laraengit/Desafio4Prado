import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Cabecera = () => {
  return (
    <View style = {styles.cabecera}>
      <Image source={require('../../assets/logo.png')} />
    </View>
  )
}

export default Cabecera

const styles = StyleSheet.create({
    cabecera:{
        alignItems:"center",
        justifyContent:"center",
        
    }
})