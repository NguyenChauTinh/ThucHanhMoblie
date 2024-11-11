import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.headerText}>A premium online store for{'\n'}sporter and their stylish choice</Text>
    <View style={styles.imageContainer}>
      <Image 
        source={{ uri: 'https://m.media-amazon.com/images/I/61JQ0TRBy7L.jpg?height=300&width=300' }}
        style={styles.bikeImage}
        resizeMode="contain"
      />
    </View>
    <Text style={styles.title}>POWER BIKE SHOP</Text>
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Products')}
    >
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  </View>
);

export default WelcomeScreen;