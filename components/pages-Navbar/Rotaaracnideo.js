import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Aracnideo from './Aracnideo';
import Tarantula from '../pages-aracnideos/Tarantula';
import Theraphosa from '../pages-aracnideos/Theraphosa';
import Escorpiao from '../pages-aracnideos/Escorpiao';

const Stack = createStackNavigator();

export default function Rotaaracnideo(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Aracnideo" component={Aracnideo}/>
      <Stack.Screen name="Tarantula" component={Tarantula}/>
      <Stack.Screen name="Theraphosa" component={Theraphosa}/>
      <Stack.Screen name="Escorpiao" component={Escorpiao}/>
    </Stack.Navigator>
  )
}