import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Pokemon } from '../types/pokemons'
import { ScrollView } from 'react-native-gesture-handler';
import PokemonCard from '../components/PokemonCard';

const PokemonsScreen = () => {

    const [character, setCharacter] = useState<Pokemon[]>([]);
    const [filteredCharacters, setFilteredCharacters] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');

                if (!response.ok) {
                    throw new Error('Error fetching data');
                  }

                const data = await response.json();


                const pokemonData = await Promise.all(
                    data.results.map(async (poke: any) => {
                        const pokeResponse = await fetch(poke.url);
                        const pokeDetails = await pokeResponse.json();
                        return{
                            id: pokeDetails.id,
                            name: pokeDetails.name,
                            sprites: pokeDetails.sprites,
                            url: poke.url
                        }
                    })
                )
               
                setCharacter(pokemonData);
                setFilteredCharacters(pokemonData);
            } catch (error) {
                console.error('Error fetching Pokémon',error);
            }finally{
                setLoading(false);
            }
        };
        fetchPokemon();
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query) {
          const filteredData = character.filter((poke) =>
            poke.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredCharacters(filteredData);
        } else {
          setFilteredCharacters(character);
        }
      };

  return (
    <View style={styles.container}>

    <TextInput style={styles.searchInput}
            placeholder="Busca un Pokémon"
            value={searchQuery}
            onChangeText={handleSearch}
        />

        <ScrollView contentContainerStyle={styles.cardsContainer}>
            {filteredCharacters.map((poke) => (
                <PokemonCard key={poke.id} character={poke} />
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative', // Asegura que el botón se posicione en relación con este contenedor
    },
    cardsContainer: {
        flexDirection: 'row', // Establece las tarjetas en fila
        flexWrap: 'wrap', // Permite que las tarjetas se ajusten a varias filas
        justifyContent: 'space-between', // Asegura que las tarjetas estén distribuidas
        padding: 10, // Espacio interno
      },
      searchInput: {
        height: 40,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
        marginTop: 20,
        fontSize: 16,
        width: 410,
        marginLeft: 17,
      },
})

export default PokemonsScreen
