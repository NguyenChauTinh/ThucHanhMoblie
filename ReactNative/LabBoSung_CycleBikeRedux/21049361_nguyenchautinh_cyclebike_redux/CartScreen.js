import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, checkout } from './bikeSlice';

const CartScreen = ({ navigation }) => {
  const cart = useSelector(state => state.bikes.cart);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => dispatch(removeFromCart(item.id))}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert("Empty Cart", "Your cart is empty. Add some items before checking out.");
      return;
    }

    dispatch(checkout());
    Alert.alert(
      "Checkout Successful",
      "Thank you for your purchase!",
      [
        { text: "OK", onPress: () => navigation.navigate('Products') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyCart}>Your cart is empty</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    backgroundColor: '#FF4444',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  emptyCart: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#888',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;