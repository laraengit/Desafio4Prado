import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import BotonPropio from '../components/BotonPropio'

const ItemScreen = ({setItemScreen,itemDetalle}) => {
  return (
    <View>
      <Cabecera/>
      <BotonPropio
            nombre={"Atrás"}
            colorFondo={"#5DC966"}
            onPress={() => {setItemScreen(false)}}
            />
        <Text style={styles.nombreTxt}>{itemDetalle.titulo}</Text>


    </View>
  )
}

export default ItemScreen

const styles = StyleSheet.create({
    nombreTxt:{
        color: 'white',
        fontSize:18,
        margin: 20,
        padding:10,
        textAlign: "center"
    }
})