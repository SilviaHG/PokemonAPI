
import React from 'react'
import { Pokemon } from '../types/pokemons';
import { useNavigation } from '@react-navigation/native';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    character: Pokemon;
}


const PokemonCard = ({ character }: Props) => {

    const navigation = useNavigation<any>();
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{character.name}</Text>
            <View style={styles.imageContainer}>
                {/* <Image source={{ uri: character.sprites.back_default }} style={styles.image} />
                <Image source={{ uri: character.sprites.back_shiny }} style={styles.image} /> */}
                <Image source={{ uri: character.sprites.front_default }} style={styles.image} />
                {/* <Image source={{ uri: character.sprites.front_shiny }} style={styles.image} /> */}

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
        height: 250,
        width: '45%', 
        marginHorizontal: '2.5%',
      },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginHorizontal: 10,
        objectFit: 'cover',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#2B6EB6',
        textTransform: 'uppercase',

    },
    link: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',  // Puedes usar cualquier color que desees
        textAlign: 'center',
        borderBottomWidth: 2,  // El grosor de la línea debajo del texto
        borderBottomColor: 'white',  // El color de la línea debajo
        paddingBottom: 5,  // Espacio entre el texto y la línea
    },
});


export default PokemonCard
