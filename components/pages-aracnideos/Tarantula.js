import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { useFonts, CarterOne_400Regular } from '@expo-google-fonts/carter-one';
import {Caudex_400Regular} from '@expo-google-fonts/caudex';


export default function Tarantula(){
  
  let [fontsLoaded] = useFonts({
    CarterOne_400Regular, Caudex_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
    return(
      <ScrollView>
  <View style={estilo.container}>
    <Image style={estilo.img} source={require("../../assets/aracnidea/tarantula.jpg")}/>
    <Text style={estilo.title}>ARANHA-CARANGUEJEIRA</Text>
    <Text style={estilo.text}>Apesar de a aranha-caranguejeira possuir um veneno que, normalmente, não provoca acidentes graves, suas cerdas causam irritações e alergias, as quais podem ser fatais para pessoas alérgicas. Esses animais possuem hábitos noturnos e, em geral, são pouco agressivos. Algumas espécies são, inclusive, criadas como animais de estimação.</Text>
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


})