import { StyleSheet, Text, View, useWindowDimensions,} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cabecera from '../components/Cabecera'
import Home from '../Screens/Home'
import ColeccionScreen from '../Screens/ColeccionScreen'
import ItemScreen from '../Screens/ItemScreen'
import PlantasDict from '../Screens/PlantasDict'
import DetalleScreen from '../Screens/DetalleScreen'
import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'
const MainNavigator = ({tareaTitle, onHandlerTitle,tareaDesc, onHandlerDesc,agregarTarea, screenWidth,
  arrTarea,/* onHandlerModal, */ /* completeTask, */ screenHeigth, tareaSelect,/* borrarTarea, *//* modalVisible, */ /* onHandlerDetalle */}) => {
    const [fontsLoaded] = useFonts(fontsColection)
    const Stack = createNativeStackNavigator()
    const {height, width, scale, fontScale} = useWindowDimensions()
  return (
    <NavigationContainer styles = {styles.container}>
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={({route, navigation}) => {
          return{
            header: () => {
              return <Cabecera titulo={route.name} navigation={navigation} route = {route}/>
            }
          }
        }}>
          <Stack.Screen name='Inicio' component={Home}/>
          <Stack.Screen name='Mis plantas' component={ColeccionScreen} initialParams={{/* tareaTitle, onHandlerTitle,tareaDesc, onHandlerDesc,agregarTarea, */ screenWidth,
    /* arrTarea, *//* onHandlerModal, */ /* completeTask, */ screenHeigth, /* tareaSelect, *//* borrarTarea, *//* modalVisible, */ /* onHandlerDetalle */}}/>
          <Stack.Screen name='Detalle' component={ItemScreen} initialParams={{/* modalVisible, tareaSelect, */ /* borrarTarea *//* , itemDetalle *//* ,onHandlerModal */}}/>
          <Stack.Screen name="Plantas" component={PlantasDict} initialParams={{screenHeigth, screenWidth}}/> 
          <Stack.Screen name="Detalle planta" component={DetalleScreen} initialParams={{screenHeigth, screenWidth}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    backgroundColor: '#CAF0E6',
    alignItems: 'center',
    justifyContent: "flex-start",
    gap:10,
  },
})