import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { useFonts, CarterOne_400Regular } from '@expo-google-fonts/carter-one';
import {Caudex_400Regular} from '@expo-google-fonts/caudex';

export default function Formiga(){
  
  let [fontsLoaded] = useFonts({
    CarterOne_400Regular, Caudex_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
    return(
      <ScrollView>
  <View style={styles.container}>
    <Image style={styles.img} source={require("../../assets/insetos/ant.jpg")}/>
    <Text style={styles.title}>FORMIGA </Text>
    <Text style={styles.text}>São insetos particularmente populares por serem muito comuns e tidos como altamente organizados. De fato, figuram entre os animais que atingiram um grau de organização biológica chamado de eusocialidade. Um fato interessante sobre as formigas é que as formigas podem ser consideradas como o grupo de animais de maior sucesso ecológico, considerando-se que representam de 15% a 20% de toda a biomassa animal vivente. De fato, estima-se que o peso de todas as formigas do planeta supera o peso de toda a humanidade.</Text>

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
img:{
      width: 400,
      height: 400,
      borderRadius: 10,
    },

})