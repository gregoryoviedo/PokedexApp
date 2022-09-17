//Library
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Tabs
import {RootStackParams} from './ListTab';

//Screens
import {SearchScreen} from '../screens/SearchScreen';
import {PokemonScreen} from '../screens/PokemonScreen';

const Tab = createStackNavigator<RootStackParams>();

export const SearchTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen name="HomeScreen" component={SearchScreen} />
      <Tab.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab.Navigator>
  );
};
