import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { useFonts, CarterOne_400Regular } from '@expo-google-fonts/carter-one';
import {Caudex_400Regular} from '@expo-google-fonts/caudex';


export default function Camarao(){
  
  let [fontsLoaded] = useFonts({
    CarterOne_400Regular, Caudex_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
    return(
      <ScrollView>
  <View style={styles.container}>
    <Image style={styles.img} source={require("../../assets/malacostraca/shrimp.jpg")}/>
    <Text style={styles.title}>CAMARÃO</Text>
    <Text style={styles.text}>Os camarões como artrópodes possuem o abdômen longo, corpo lateralmente comprimido, primeiros três pares de pernas com quelas e rosto geralmente desenvolvido. É conhecido por ser uma das pescas mais importantes quando se trata de culinária e consumo.</Text>

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