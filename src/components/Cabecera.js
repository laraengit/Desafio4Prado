import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const Cabecera = ({titulo, navigation}) => {
  return (
    <View style = {styles.cabecera}>
      <Pressable onPress={() =>{navigation.goBack()}}>
        <Text>Back</Text>
      </Pressable>
      <Text style={styles.txtCabecera}>{titulo}</Text>
      <Image style = {styles.imgCabecera} source={require('../../assets/logo.png')} />
    </View>
  )
}

export default Cabecera

const styles = StyleSheet.create({
    cabecera:{
      backgroundColor:'white',
      flex:1,
      flexDirection:"row",
      height: 200,
      alignItems:"center",
      justifyContent:"space-around",
      
    },
    txtCabecera:{
      color:"black",
      backgroundColor: 'white'
    },
    imgCabecera:{
      height:200,
      resizeMode: 'contain',
      
    }
})