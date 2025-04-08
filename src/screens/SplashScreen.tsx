import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

const SplashScreen = ({ navigation }: any) => {

    useEffect(() => {

        const VerifySession = async () => {
            const user = await AsyncStorage.getItem('userActive')
            setTimeout(() => {
                if (user) {
                    const data = JSON.parse(user)
                    navigation.navigate('Inicio', { user: data.username })
                }
                else {
                    navigation.replace('Login')
                }
            }, 2000);
        }
        VerifySession();
    }, [])
    return (
        <View>
            <ActivityIndicator size={'large'} color={'#18385a'} style={{ marginBottom:20 }} />
        </View>
    )
}

export default SplashScreen
