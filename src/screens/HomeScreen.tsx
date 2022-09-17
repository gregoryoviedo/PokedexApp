//Library
import React from 'react';
import {
  Image,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

//Components
import {PokemonCard} from '../components/PokemonCard';

//Hooks
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

//Theme
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View style={stylesScreen.flatlistContainer}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // Header
          ListHeaderComponent={
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          // infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator
              style={stylesScreen.activity}
              size={20}
              color="grey"
            />
          }
        />
      </View>
    </>
  );
};

const stylesScreen = StyleSheet.create({
  activity: {
    height: 100,
  },
  flatlistContainer: {
    alignItems: 'center',
  },
});
