import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Aracnideo(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Escorpiao') }}>
        <Text style={styles.buttonText}>Escorpião</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Tarantula') }}>
        <Text style={styles.buttonText}>Tarântula</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Theraphosa') }}>
        <Text style={styles.buttonText}>Theraphosa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderColor: '#000000'
  }
});