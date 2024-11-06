import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import AperturaCajaScreen from './screens/AperturaCajaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menú Principal' }} />
        <Stack.Screen name="AperturaCaja" component={AperturaCajaScreen} options={{ title: 'Apertura de Caja' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
