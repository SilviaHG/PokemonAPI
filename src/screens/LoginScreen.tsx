import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ navigation }: any) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const manageLogin = async () => {
        if (!username || !password) {
            Alert.alert('Error', 'Por favor complete todos los campos')
            return
        }

        try {
            const userData = await AsyncStorage.getItem('users') ?? '[]'
            const users = userData ? JSON.parse(userData) : []
            const user = users.find((user: any) => user.username === username && user.password === password)

            if (user) {
                await AsyncStorage.setItem('user', JSON.stringify(user));
                navigation.navigate('Inicio'), { user: user.username }
            } else {
                Alert.alert('Error', 'Usuario o contraseña incorrectos')
                return;
            }
        } catch (error) {
            Alert.alert('Error', 'No se pudo validar el usuario')
            return;
        }

    }

    return (
        <View style={styles.container}>

            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' }}
                style={styles.logo} />

            {/* <Text style={styles.title}>Iniciar Sesión</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={manageLogin}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                <Text style={styles.registerText} >¿No tienes cuenta? Registrate</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: '#d6b21e',
        letterSpacing: 1.5,
        borderRadius: 10,
        textShadowColor: '#18385a',
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 7,

    },
    input: {
        padding: 14,
        marginBottom: 20,
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#ffffff', // Fondo blanco para los inputs
        borderColor: '#d1d1d1', // Bordes grises suaves
        borderWidth: 1,
        color: 'black', // Texto oscuro para mejor contraste
        fontSize: 16,
    },
    logo: {
        width: 370,
        height: 250,
        marginTop: -150,
        resizeMode: 'contain',

    },
    button: {
        backgroundColor: '#d31b18',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10, // Bordes redondeados
        shadowColor: '#000', // Sombra
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5, // Sombra en Android
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff', // Texto blanco
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#1c4571',
        textDecorationLine: 'underline'
    }
})


export default LoginScreen
