import { StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { BsChevronLeft } from "react-icons/bs"



const BotonAtras = ({colorFondo,onPress}) => {
  return (
    <Pressable style={[styles.boton,{backgroundColor:colorFondo}]} onPress={onPress}>
        {/* <BsChevronLeft  /> */}
        <Text>Atrás</Text>
    </Pressable>
  )
}

export default BotonAtras

const styles = StyleSheet.create({})