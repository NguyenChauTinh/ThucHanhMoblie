import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from './ProductDetailScreen';
import ColorSelectionScreen from './ColorSelectionScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="ColorSelection" component={ColorSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}