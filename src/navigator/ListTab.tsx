//Library
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import {HomeScreen} from '../screens/HomeScreen';
import {PokemonScreen} from '../screens/PokemonScreen';

//Interfaces
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {simplePokemon: SimplePokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const ListTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
