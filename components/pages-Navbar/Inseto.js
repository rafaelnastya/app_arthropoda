import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Inseto(props){

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Borboleta') }}>
        <Text style={styles.buttonText}>Borboleta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Formiga') }}>
        <Text style={styles.buttonText}>Formiga</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { props.navigation.navigate('Libelula') }}>
        <Text style={styles.buttonText}>Libélula</Text>
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
    borderColor: '#000000',
    borderWidth: 2,
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