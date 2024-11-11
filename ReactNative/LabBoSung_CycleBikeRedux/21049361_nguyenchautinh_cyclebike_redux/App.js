import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import { TouchableOpacity, Text } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import ProductsScreen from './ProductsScreen';
import DetailScreen from './DetailScreen';
import AddBikeScreen from './AddBikeScreen';
import CartScreen from './CartScreen';

const Stack = createNativeStackNavigator();

const CartIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
    <Text style={{ fontSize: 24, marginRight: 15 }}>🛒</Text>
  </TouchableOpacity>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen 
            name="Products" 
            component={ProductsScreen} 
            options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />
            })}
          />
          <Stack.Screen 
            name="Detail" 
            component={DetailScreen}
            options={({ navigation }) => ({
              headerRight: () => <CartIcon navigation={navigation} />
            })}
          />
          <Stack.Screen name="AddBike" component={AddBikeScreen} options={{ title: 'Add New Bike' }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Shopping Cart' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}