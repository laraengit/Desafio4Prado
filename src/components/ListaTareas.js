import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CardTarea from './CardTarea'

const ListaTareas = ({navigation,arrTarea,onHandlerModal, completeTask, screenWidth, screenHeigth, onHandlerDetalle}) => {
  return (
    <View style = {[styles.cardContainer,{height:screenHeigth -450}]}>
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