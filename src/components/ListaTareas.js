import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CardTarea from './CardTarea'

const ListaTareas = ({navigation,arrTarea,onHandlerModal, completeTask, screenWidth, screenHeigth, onHandlerDetalle, itemDetalle}) => {
  console.log('Lista Plantas')
  console.log('Listado que llegó')
  console.log(arrTarea)
  return (
    <View style = {[styles.cardContainer,{height:screenHeigth -350}]}>
        <FlatList
          pagingEnabled = {true}
          data={arrTarea}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardTarea
              item = {item}
              navigation={navigation}
              onHandlerModal = {onHandlerModal}
              completeTask ={completeTask}
              screenWidth = {screenWidth}
              screenHeigth = {screenHeigth}
              onHandlerDetalle = {onHandlerDetalle}
              itemDetalle = {itemDetalle}
            />
          )}
        />
      </View>
  )
}

export default ListaTareas

const styles = StyleSheet.create({
    cardContainer:{
        justifyContent:"center",
        alignItems:"center",
      },
      
})