import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import plantasData from '../utils/data/plantasData.json'
import { useState, useEffect } from 'react'

const DetalleScreen = ({route}) => {
    const {idPlanta} = route.params
    const [planta,setPlanta] = useState({})

  useEffect(()=>{
    const plantaElegida = plantasData.find(planta => planta.id === idPlanta)
    
    setPlanta(plantaElegida)
  },[idPlanta])
  return (
    <View style={styles.container}>
      <Text style={styles.nombreTxt}>{planta.nombre}</Text>
        <Text style={styles.descTxt}>
          {planta.Riego}
        </Text>
        <Text style={styles.descTxt}>
          {planta.Luz}
        </Text>
        <Text style={styles.descTxt}>
          {planta.Cuidados}
        </Text>
    </View>
  )
}

export default DetalleScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAF0E6',
      alignItems: 'center',
      justifyContent: "flex-start",
      gap:5,
  
    },
      nombreTxt:{
          color: 'white',
          fontSize:18,
          margin: 10,
          padding:10,
          textAlign: "center",
          borderRadius:8,
          backgroundColor:'#2B8A62',
          width:250,
      },
      descTxt:{
        color: '#0C2821',
        fontSize:15,
        margin: 22,
        padding:10,
        textAlign: "justify",
        borderRadius:8,
        backgroundColor:'white',
        width:250,
        height:100,
    }
  })