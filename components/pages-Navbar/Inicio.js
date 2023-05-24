import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, CarterOne_400Regular } from '@expo-google-fonts/carter-one';
import { Caudex_400Regular, Caudex_400Regular_Italic, Caudex_700Bold, Caudex_700Bold_Italic } from '@expo-google-fonts/caudex';

import Rotasnavbar from './Rotasnavbar';

const Stack = createStackNavigator();

export default function App(props) {
  let [fontsLoaded] = useFonts({
    CarterOne_400Regular,
    Caudex_400Regular,
    Caudex_400Regular_Italic,
    Caudex_700Bold,
    Caudex_700Bold_Italic,
  });
if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Rotasnavbar" component={Rotasnavbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Inicio(props,{ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FILO ARTHROPODA</Text>
      <Text style={styles.text}>
        O filo artrópoda é caracterizado por animais invertebrados que possuem patas articuladas e um exoesqueleto protetor externo.
        Ao crescer, eles passam pelo processo de ecdise, que envolve a troca do esqueleto antigo por um novo.
      </Text>
      <View>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Rotasnavbar') }}>
      <Text style={styles.buttonText}>CONHECER</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontFamily: 'CarterOne_400Regular',
    fontSize: 40,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontFamily: 'Caudex_400Regular',
    fontSize: 20,
    textAlign: 'justify',
    backgroundColor: '#C3F7DA',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#000000',
  },
  button: {
    backgroundColor: '#C3F7DA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Caudex_400Regular',
  },
});