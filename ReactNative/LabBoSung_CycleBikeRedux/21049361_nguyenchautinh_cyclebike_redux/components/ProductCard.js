import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from '../styles';

const ProductCard = ({ item, onPress, isFavorite, onFavoritePress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: item.image || 'https://v0.dev/placeholder.svg?height=150&width=150' }} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.name}</Text>
    <Text style={styles.cardPrice}>${item.price}</Text>
    <TouchableOpacity 
      style={styles.favoriteButton} 
      onPress={onFavoritePress}
    >
      <Text style={[styles.heartIcon, isFavorite && styles.heartIconActive]}>♥</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

export default ProductCard;