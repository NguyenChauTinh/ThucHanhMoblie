import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { ArrowLeft, ShoppingCart, Search, MoreVertical } from 'lucide-react-native';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  count: number;
};

const products: Product[] = [
  { id: '1', name: 'Cáp chuyển từ Cổng USB sang PS2', price: 69900, image: require('./assets/khoga.jpg'), count: 15 },
  { id: '2', name: 'Cáp chuyển từ Cổng USB sang PS2', price: 69900, image: require('./assets/khoga.jpg'), count: 15 },
  { id: '3', name: 'Cáp chuyển từ Cổng USB sang PS2', price: 69900, image: require('./assets/khoga.jpg'), count: 15 },
  { id: '4', name: 'Cáp chuyển từ Cổng USB sang PS2', price: 69900, image: require('./assets/khoga.jpg'), count: 15 },
  { id: '5', name: 'Cáp chuyển từ Cổng USB sang PS2', price: 69900, image: require('./assets/khoga.jpg'), count: 15 },
  { id: '6', name: 'Cáp chuyển từ Cổng USB sang PS2', price: 69900, image: require('./assets/khoga.jpg'), count: 15 },
];

const ProductItem = ({ item }: { item: Product }) => (
  <View style={styles.productItem}>
    <Image source={item.image } style={styles.productImage} />
    <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
    <Text style={styles.productPrice}>{item.price.toLocaleString()} đ</Text>
    <Text style={styles.productCount}>({item.count})</Text>
  </View>
);

export default function ProductListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Search color="#999" size={20} style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Dây cáp USB"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity>
          <ShoppingCart color="#fff" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MoreVertical color="#fff" size={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  productList: {
    padding: 10,
  },
  productItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E53935',
  },
  productCount: {
    fontSize: 12,
    color: '#999',
  },
});