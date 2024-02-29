import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cabecera from '../components/Cabecera'
import AgregarTareas from '../components/AgregarTarea'
import ListaTareas from '../components/ListaTareas'
import ModalBorrarTarea from '../components/ModalBorrarTarea'
import BotonAtras from '../components/BotonAtras'
import { BsChevronLeft  } from "react-icons/bs";
/* Este screen es el análogo de cómo quedó la entrega 2 */
const ColeccionScreen = ({navigation, tareaTitle, onHandlerTitle,tareaDesc, onHandlerDesc,agregarTarea, screenWidth,
    arrTarea,onHandlerModal, completeTask, screenHeigth, tareaSelect,borrarTarea,modalVisible, setHome,seItemScreen, onHandlerDetalle}) => {
  return (
    <View style = {styles.container}>
      <Cabecera/>
      
      <BotonAtras
            colorFondo={"#5DC966"}
            onPress={() => {navigation.goBack()}}
            />
      <AgregarTareas
        tareaTitle= {tareaTitle} 
        onHandlerTitle= {onHandlerTitle}
        tareaDesc= {tareaDesc} 
        onHandlerDesc= {onHandlerDesc}
        agregarTarea= {agregarTarea}
        screenWidth={screenWidth}
      
      />
       
      <ListaTareas
        arrTarea = {arrTarea}
        onHandlerModal = {onHandlerModal}
        completeTask={completeTask}
        screenWidth={screenWidth}
        screenHeigth = {screenHeigth}
        seItemScreen = {seItemScreen}
        onHandlerDetalle = {onHandlerDetalle}
      />
      
      
      <ModalBorrarTarea
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