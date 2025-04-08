import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import InitialScreen from '../screens/InitialScreen';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigation from './DrawerNavigation';
import PokemonsScreen from '../screens/PokemonsScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>

      <Stack.Screen name='Login' component={LoginScreen}
                    options={{
                      title: '',
                      headerStyle: { backgroundColor: '#d31b18' },
                      headerTintColor: '#fff',
                    }} />
      <Stack.Screen name='Register' component={RegisterScreen}
                    options={{
                      title: 'Registro',
                      headerStyle: { backgroundColor: '#2B6EB6' },
                      headerTintColor: '#fff',
                    }} />
      <Stack.Screen name='Inicio' component={DrawerNavigation} 
                    options={{ 
                      headerStyle: { backgroundColor: '#2B6EB6' },
                      headerTintColor: '#fff', 
                      headerShown: false,
                      }} />
      <Stack.Screen name='Pokemon' component={PokemonsScreen} 
                    options={{ 
                      headerStyle: { backgroundColor: '#2B6EB6' },
                      headerTintColor: '#fff', 
                      headerShown: false,
                      }} />
      <Stack.Screen name='Splash' component={SplashScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator
