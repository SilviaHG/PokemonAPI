import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

const RegisterScreen = ({ navigation }: any) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    const manageRegistration = async () => {
        if (!name || !email || !pass) {
            Alert.alert('Error', 'Por favor completa todos los campos')
            return
        }

        try {
            const data = await AsyncStorage.getItem('users') ?? '[]'
            const users = data ? JSON.parse(data) : []
            const exist = users.find((user: any) => user.email === email)

            const newUser = { username: name, email: email, password: pass }
            users.push(newUser)

            await AsyncStorage.setItem('users', JSON.stringify(users))

            Alert.alert('Éxito', 'Usuario registrado correctamente')
            navigation.navigate('Login')
        } catch (error) {
            Alert.alert('Error', 'No se pudo registrar el usuario')
            return
        }


    }
    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                Registrarse
            </Text>

            <TextInput placeholder='Nombre'
                style={styles.input}
                value={name}
                onChangeText={setName}>
            </TextInput>

            <TextInput placeholder='Correo'
                style={styles.input}
                value={email}
                onChangeText={setEmail}>
            </TextInput>

            <TextInput placeholder='Contraseña'
                secureTextEntry
                value={pass}
                style={styles.input}
                onChangeText={setPass}>
            </TextInput>

            <Button title='Crear Cuenta' onPress={manageRegistration} ></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5
    },
})

export default RegisterScreen
