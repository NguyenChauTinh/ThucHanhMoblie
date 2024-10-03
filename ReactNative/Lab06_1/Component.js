import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

type Product = {
  id: string;
  name: string;
  shop: string;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: '1',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl: require('./assets/khoga.jpg'),
  },
  {
    id: '1',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl: require('./assets/khoga.jpg'),
  },
  {
    id: '1',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl: require('./assets/khoga.jpg'),
  },
  {
    id: '1',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl: require('./assets/khoga.jpg'),
  },
  {
    id: '1',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl: require('./assets/khoga.jpg'),
  },
  // Add more products here...
];

const ProductItem = ({ item }: { item: Product }) => (
  <View style={styles.item}>
    <Image source={item.imageUrl} style={styles.image} />
    <View style={styles.contentContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.shop}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function Component() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  shop: {
    fontSize: 14,
    color: '#666',
  },
  chatButton: {
    backgroundColor: 'red',
    paddingHorizontal: 24,
    // paddingVertical: 4,
    marginTop: 28,
    maxHeight: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});