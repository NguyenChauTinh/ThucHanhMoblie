import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft, ShoppingCart } from 'lucide-react-native';

export default function Header() {
  const handleBackPress = () => {
    // Handle back navigation
    console.log('Back button pressed');
  };

  const handleCartPress = () => {
    // Handle cart navigation
    console.log('Cart button pressed');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBackPress} style={styles.iconButton}>
        <ArrowLeft color="#FFF" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>Chat</Text>
      <TouchableOpacity onPress={handleCartPress} style={styles.iconButton}>
        <ShoppingCart color="#FFF" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1BA9FF',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',  
  },
  iconButton: {
    padding: 8,
    color: '#FFF'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
});