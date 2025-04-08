import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import InitialScreen from '../screens/InitialScreen';
import PokemonsScreen from '../screens/PokemonsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Inicio' screenOptions={{ 
        headerStyle: { backgroundColor: '#d31b18' },
        headerTintColor: '#fff',
    }}>
        <Drawer.Screen name="Inicio" component={InitialScreen} />
        <Drawer.Screen name="Pokémon" component={PokemonsScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
