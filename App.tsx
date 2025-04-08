import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import StackNavigator from './src/navigation/StackNavigator'

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
