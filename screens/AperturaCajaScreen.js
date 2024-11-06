import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function AperturaCajaScreen({ navigation }) {
  const [empleado, setEmpleado] = useState('');
  const [montoInicial, setMontoInicial] = useState('');

  const handleAperturaCaja = () => {
    if (!empleado || !montoInicial) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    // Aquí puedes agregar la lógica para guardar la información de apertura de caja en la base de datos
    Alert.alert('Apertura de caja exitosa', `Empleado: ${empleado}, Monto Inicial: ${montoInicial}`);
    navigation.navigate('Menu'); // Redirige al menú principal después de abrir la caja
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apertura de Caja</Text>
      <TextInput
        style={styles.input}
        placeholder="Empleado"
        placeholderTextColor="#a1a1a1"
        value={empleado}
        onChangeText={setEmpleado}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto Inicial"
        placeholderTextColor="#a1a1a1"
        keyboardType="numeric"
        value={montoInicial}
        onChangeText={setMontoInicial}
      />
      <TouchableOpacity style={styles.button} onPress={handleAperturaCaja}>
        <Text style={styles.buttonText}>Abrir Caja</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#1D4ED8',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
