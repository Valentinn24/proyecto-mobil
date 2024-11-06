import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function MenuScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut(); // Cierra la sesión en Firebase
      Alert.alert('Cierre de sesión exitoso');
      navigation.replace('Login'); // Redirige a la pantalla de Login y elimina la historia de navegación
    } catch (error) {
      Alert.alert('Error al cerrar sesión', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AperturaCaja')}>
        <Text style={styles.buttonText}>Apertura de Caja</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CierreCaja')}>
        <Text style={styles.buttonText}>Cierre de Caja</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Compras')}>
        <Text style={styles.buttonText}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ventas')}>
        <Text style={styles.buttonText}>Ventas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ControlStock')}>
        <Text style={styles.buttonText}>Control de Stock</Text>
      </TouchableOpacity>

      {/* Botón de Cerrar Sesión */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A3FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#1D4ED8',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF3B30', // Color rojo para el botón de cerrar sesión
    marginTop: 20,
  },
});
