import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import AgregarTarea from '../components/AgregarTarea'
import ListaTareas from '../components/ListaTareas'
import ModalBorrarTarea from '../components/ModalBorrarTarea'
import BotonAtras from '../components/BotonAtras'
import { BsChevronLeft  } from "react-icons/bs";
/* Este screen es el análogo de cómo quedó la entrega 2 */
const ColeccionScreen = ({navigation, route}) => {
  const {tareaTitle, onHandlerTitle,tareaDesc, onHandlerDesc,agregarTarea, screenWidth,
    arrTarea,onHandlerModal, completeTask, screenHeigth, tareaSelect,borrarTarea,modalVisible, onHandlerDetalle} = route.params
  return (
    <View style = {styles.container}>
      
      <BotonAtras
            colorFondo={"#5DC966"}
            onPress={() => {navigation.goBack()}}
            />
      <AgregarTarea
        tareaTitle= {tareaTitle} 
        onHandlerTitle= {onHandlerTitle}
        tareaDesc= {tareaDesc} 
        onHandlerDesc= {onHandlerDesc}
        agregarTarea= {agregarTarea}
        screenWidth={screenWidth}
      
      />
       
      <ListaTareas
        arrTarea = {arrTarea}
        navigation={navigation}
        onHandlerModal = {onHandlerModal}
        completeTask={completeTask}
        screenWidth={screenWidth}
        screenHeigth = {screenHeigth}
        onHandlerDetalle = {onHandlerDetalle}
      />
      
      
      <ModalBorrarTarea
      navigation={navigation}
        modalVisible = {modalVisible}
        tareaSelect = {tareaSelect}
        borrarTarea = {borrarTarea}
        onHandlerModal = {onHandlerModal}
      />
    </View>
  )
}

export default ColeccionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAF0E6',
        alignItems: 'center',
        justifyContent: "flex-start",
        gap:10,
        
    
      },
})