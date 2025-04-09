import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const InitialScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' }}
                       style={styles.logo} />
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
})


export default InitialScreen
