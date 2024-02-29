import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cabecera from '../components/Cabecera'
import Home from '../Screens/Home'
import ColeccionScreen from '../Screens/ColeccionScreen'
import ItemScreen from '../Screens/ItemScreen'
const MainNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer styles = {styles.container}>
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={({route, navigation}) => {
          return{
            header: () => {
              return <Cabecera titulo={route.name} navigation={navigation}/>
            }
          }
        }}>
          <Stack.Screen name='Inicio' component={Home}/>
          <Stack.Screen name='Mis plantas' component={ColeccionScreen}/>
          <Stack.Screen name='Detalle' component={ItemScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})