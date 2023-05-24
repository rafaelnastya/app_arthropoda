import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inseto from './Inseto';
import Borboleta from '../pages-Insetos/Borboleta';
import Formiga from '../pages-Insetos/Formiga';
import Libelula from '../pages-Insetos/Libelula';


const Stack = createStackNavigator();

export default function Rotainsetos(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inseto" component={Inseto}/>
      <Stack.Screen name="Borboleta" component={Borboleta}/>
      <Stack.Screen name="Formiga" component={Formiga}/>
      <Stack.Screen name="Libelula" component={Libelula}/>

    </Stack.Navigator>
  )
}