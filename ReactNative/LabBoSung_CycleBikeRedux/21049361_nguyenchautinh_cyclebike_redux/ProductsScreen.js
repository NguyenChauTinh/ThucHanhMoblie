import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes, toggleFavorite } from './bikeSlice';
import ProductCard from './components/ProductCard';
import styles from './styles';

const ProductsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { bikes, favorites, status, error } = useSelector(state => state.bikes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBikes());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <View style={styles.centered}><ActivityIndicator size="large" color="#FF4444" /></View>;
  }

  if (status === 'failed') {
    return <View style={styles.centered}><Text>Error: {error}</Text></View>;
  }

  const filteredBikes = bikes.filter(bike => 
    selectedCategory === 'All' || bike.category === selectedCategory
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The world's Best Bike</Text>
      <View style={styles.categories}>
        {['All', 'Roadbike', 'Mountain'].map(category => (
          <TouchableOpacity 
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.categoryTextActive
            ]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredBikes}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate('Detail', { item })}
            isFavorite={favorites.includes(item.id)}
            onFavoritePress={() => dispatch(toggleFavorite(item.id))}
          />
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity 
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddBike')}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductsScreen;