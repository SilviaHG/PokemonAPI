import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const InitialScreen = ({ route, navigation }: any) => {


  const LogOut = async () => {
    try {
      await AsyncStorage.removeItem('user'); //Eliminamos el usuario guardado en AsyncStorage
      Alert.alert('Éxito', 'Sesión cerrada correctamente'); //Mostrar mensaje de éxito
      navigation.replace('Login'); //Redirigir a la pantalla de inicio de sesión
    } catch {
      Alert.alert('Error', 'No fue posible cerrar la sesión'); //Mostrar error en consola
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome
          name="sign-out"
          size={25}
          color="#fff"
          onPress={LogOut}
          style={{ marginRight: 15 }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' }}
        style={styles.logo} />

      <Text style={styles.title}>Bienvenid@ {route.params.user}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 30,
    flex: 1,
    backgroundColor: '#f5f5f5', // Fondo claro y neutro
    alignItems: 'center',
  },
  logo: {
    width: 370,
    height: 250,
    marginTop: -150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2B6EB6',
  },
})


export default InitialScreen
