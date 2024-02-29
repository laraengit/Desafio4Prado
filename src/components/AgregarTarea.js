import { StyleSheet, TextInput, View, Button, Text } from 'react-native'
import React from 'react'
import BotonPropio from './BotonPropio'
const AgregarTarea = ({tareaTitle, onHandlerTitle,tareaDesc, onHandlerDesc,agregarTarea, screenWidth }) => {
  
  
  return (
    <View style={[styles.inputContainer,{width:screenWidth-70}]}>
        <Text>Agregar planta</Text>
        <TextInput value={tareaTitle} placeholder='Nombre' style={styles.input} onChangeText={onHandlerTitle}/>
        <TextInput value={tareaDesc} placeholder='Cuidados' style={styles.input} onChangeText={onHandlerDesc}/>
        <BotonPropio
            nombre={"Agregar"}
            colorFondo={"#5DC966"}
            onPress={agregarTarea}
            />
        {/* <Button title='+' onPress={agregarTarea}/> */}
      </View>
  )
}

export default AgregarTarea

const styles = StyleSheet.create({
    inputContainer:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#A5D6AF',
        borderRadius:5,
        padding:10,
        gap:20,
      },
      input:{
        width:250,
        borderWidth: 2,
        margin: 4,
        paddingHorizontal:10,
        backgroundColor: 'white',
        borderRadius:5,
        color:"black",
      },
})