import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Rotaaracnideo from './Rotaaracnideo';
import Rotacrustaceo from './Rotacrustaceo';
import Rotainsetos from './Rotainsetos';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar(){
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen
        name="ARACNÍDEOS"
        component={Rotaaracnideo}
        options={{tabBarIcon: ({ color, size }) =>(<FontAwesome5 name="spider" size={24} color="black" />)}}
      />

      <Tab.Screen
        name="CRUSTÁCEOS"
        component={Rotacrustaceo}
       options={{tabBarIcon: ({ color, size }) =>(<MaterialCommunityIcons name="minecraft" size={24} color="black" />)}}
      />

      <Tab.Screen
        name="INSETOS"
        component={Rotainsetos}
        options={{tabBarIcon: ({ color, size }) =>(<MaterialCommunityIcons name="butterfly-outline" size={24} color="black" />)}}
      />
    </Tab.Navigator>
  );
}
