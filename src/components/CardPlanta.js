import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BotonPropio from './BotonPropio'
import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'
import { colors } from '../utils/colors'

const CardPlanta = ({navigation,item, screenHeigth, screenWidth}) => {
    const [fontsLoaded] = useFonts(fontsColection)
    return (
    <View style = {[styles.card,{width:screenWidth -70,height:screenHeigth -450}]}>
      <Text style = {styles.textTitle} >{item.nombre}</Text>
      <BotonPropio
                nombre={"Ver detalle"}
                colorFondo={"#F5A69E"}
                onPress={() => {navigation.navigate("Detalle planta",{idPlanta:item.id}) }}
            />
    </View>
  )
}

export default CardPlanta
const styles = StyleSheet.create({
    card:{
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        padding:20,
        borderRadius:5,
        backgroundColor:colors.verdeOscuro,
        gap:30,
        margin:40,

      },
    textTitle:{
    
        color: 'white',
        fontSize:18,
        margin: 10,
        padding:10,
        fontSize:20 ,       
        fontFamily:"Montserrat",

      },
})