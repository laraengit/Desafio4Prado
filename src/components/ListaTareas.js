import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CardTarea from './CardTarea'

const ListaTareas = ({arrTarea,onHandlerModal, completeTask, screenWidth, screenHeigth, seItemScreen, onHandlerDetalle}) => {
  return (
    <View style = {[styles.cardContainer,{height:screenHeigth -450}]}>
        <FlatList
          pagingEnabled = {true}
          data={arrTarea}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardTarea
              item = {item}
              onHandlerModal = {onHandlerModal}
              completeTask ={completeTask}
              screenWidth = {screenWidth}
              screenHeigth = {screenHeigth}
              seItemScreen = {seItemScreen}
              onHandlerDetalle = {onHandlerDetalle}
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