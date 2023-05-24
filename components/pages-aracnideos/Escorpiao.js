import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { useFonts, CarterOne_400Regular } from '@expo-google-fonts/carter-one';
import {Caudex_400Regular} from '@expo-google-fonts/caudex';


export default function Escorpiao(){
  
  let [fontsLoaded] = useFonts({
    CarterOne_400Regular,
    Caudex_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
    return(
      <ScrollView>
    <View style={estilo.container}>
    <Image style={estilo.img} source={require("../../assets/aracnidea/scorpion.jpg")}/>
    <Text style={estilo.title}>ESCORPIÃO </Text>
    <Text style={estilo.text}>O escorpião é um dos animais terrestres invertebrados mais antigos da Terra, entre os invertebrados vivos. Seu exoesqueleto permitiu explorar o ambiente terrestre. Os escorpiões são  invertebrados, e o que poucos esperam, da classe dos aracnídeos (mesmo que não se pareça com uma aranha).</Text>
  </View>
      </ScrollView>

  );
}

const estilo = StyleSheet.create({
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
img:{
      width: 400,
      height: 400,
      borderRadius: 10,
    },

});