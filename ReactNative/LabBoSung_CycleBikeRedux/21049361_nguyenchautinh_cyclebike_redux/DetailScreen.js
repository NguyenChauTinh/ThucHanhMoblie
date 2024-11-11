import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite, addToCart } from './bikeSlice';
import styles from './styles';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const { favorites } = useSelector(state => state.bikes);
  const isFavorite = favorites.includes(item.id);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: item.id, name: item.name, price: item.price }));
    navigation.goBack();
    
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image || 'https://v0.dev/placeholder.svg?height=300&width=300' }} style={styles.detailImage} />
      <View style={styles.detailContent}>
        <Text style={styles.detailTitle}>{item.name}</Text>
        <Text style={styles.detailPrice}>
          <Text style={styles.discountText}>15% OFF!</Text> ${item.price}
        </Text>
        <Text style={styles.description}>{item.description || 'No description available.'}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            onPress={() => dispatch(toggleFavorite(item.id))}
          >
            <Text style={[styles.heartIcon, isFavorite && styles.heartIconActive]}>♥</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;