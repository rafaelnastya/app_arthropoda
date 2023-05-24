import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Crustaceo from './Crustaceo';
import Camarao from '../pages-crustaceos/Camarao';
import Caranguejo from '../pages-crustaceos/Caranguejo';
import Lagosta from '../pages-crustaceos/Lagosta';


const Stack = createStackNavigator();

export default function Rotacrustaceo(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Crustaceo" component={Crustaceo}/>
      <Stack.Screen name="Camarao" component={Camarao}/>
      <Stack.Screen name="Caranguejo" component={Caranguejo}/>
      <Stack.Screen name="Lagosta" component={Lagosta}/>
    </Stack.Navigator>
  )
}