import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Crustaceo(props){

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Camarao') }}>
        <Text style={styles.buttonText}>Camarão</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Caranguejo') }}>
        <Text style={styles.buttonText}>Caranguejo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Lagosta') }}>
        <Text style={styles.buttonText}>Lagosta</Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});