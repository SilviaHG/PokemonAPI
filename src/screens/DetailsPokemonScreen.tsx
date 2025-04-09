import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Pokemon } from '../types/pokemons';

interface PokemonDetailsProps {
  route: RouteProp<any, 'DetailsPokemon'>;
}

const DetailsPokemonScreen = ({ route }: PokemonDetailsProps) => {
  const { characterId } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${characterId}`);
        if (!response.ok) {
          throw new Error('Error fetching details');
        }
        const data = await response.json();
        setPokemonDetails({
          id: data.id,
          name: data.name,
          sprites: data.sprites,
          stats: data.stats,
          abilities: data.abilities,
          moves: data.moves,
          height: data.height,
          weight: data.weight,
        });
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonDetails();
  }, [characterId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#2B6EB6" style={styles.loadingIndicator} />;
  }

  if (!pokemonDetails) {
    return <Text style={styles.errorText}>No se encontraron detalles para este Pokémon.</Text>;
  }

  const handleGoBack = () => {
    navigation.goBack(); // Este método devuelve a la pantalla anterior
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.name}>{pokemonDetails.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
        <Text style={styles.name}></Text>
      <Image source={{ uri: pokemonDetails.sprites.front_default }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Altura: {pokemonDetails.height}</Text>
        <Text style={styles.infoText}>Peso: {pokemonDetails.weight}</Text>
      </View>

      <Text style={styles.sectionTitle}>Habilidades:</Text>
      <View style={styles.listContainer}>
        {pokemonDetails.abilities.map((ability, index) => (
          <Text key={index} style={styles.listItem}>
            {ability.ability.name}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Estadísticas:</Text>
      <View style={styles.listContainer}>
        {pokemonDetails.stats.map((stat, index) => (
          <Text key={index} style={styles.listItem}>
            {stat.stat.name}: {stat.base_stat}
          </Text>
        ))}
      </View>

      {/* <Text style={styles.sectionTitle}>Movimientos:</Text>
      <View style={styles.listContainer}>
        {pokemonDetails.moves.slice(0, 10).map((move, index) => (
          <Text key={index} style={styles.listItem}>
            {move.move.name}
          </Text>
        ))}
      </View> */}
    </View>
  </ScrollView>
  );
};
const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#fafafa',
      justifyContent: 'center', // Asegura que el botón se posicione en relación con este contenedor
      marginTop: 40, // Espacio adicional en la parte inferior para evitar que el contenido quede pegado al borde
    },
    loadingIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 30, // Espacio adicional en la parte inferior para evitar que el contenido quede pegado al borde
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#2B6EB6',
      marginBottom: 15,
      textTransform: 'uppercase',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 20,
      borderWidth: 3,
      borderColor: '#bbb',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    infoContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    infoText: {
      fontSize: 18,
      color: '#d31b18',
      marginBottom: 5,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#d31b18',
      marginVertical: 10,
    },
    listContainer: {
      marginBottom: 20,
      paddingLeft: 15,
      width: '100%',
    },
    listItem: {
      fontSize: 16,
      color: '#555',
      marginBottom: 5,
      textAlign: 'center',
      
    },
    errorText: {
      fontSize: 18,
      color: 'red',
      textAlign: 'center',
      marginTop: 20,
    },
    button: {
        backgroundColor: '#2B6EB6',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
      },
      buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
      },
  });
  

export default DetailsPokemonScreen;
