import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const COLORS = {
  '#FF0000': { name: 'Black', price: 20000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303947975273507_iphone-15-den-1.jpg' },
  '#00FF00': { name: 'Green', price: 30000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303950417112947_iphone-15-xanh-la-1.jpg' },
  '#0000FF': { name: 'Blue', price: 25000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303935769505085_iphone-15-xanh-1.jpg' },
  '#FFFF00': { name: 'Yellow', price: 23000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303944832321476_iphone-15-vang-1.jpg' },
  '#FF00FF': { name: 'Pink', price: 27000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303942321093007_iphone-15-hong-1.jpg' }
};

export default function ColorSelectionScreen({ route }) {
  const navigation = useNavigation();
  const { selectedColor, setSelectedColor } = route.params;

  const renderColorItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.colorItem, item === selectedColor && styles.selectedColorItem]}
      onPress={() => {
        setSelectedColor(item);
        navigation.goBack();
      }}
    >
      <Image source={{ uri: COLORS[item].image }} style={styles.colorImage} />
      <View style={styles.colorInfo}>
        <Text style={styles.colorName}>{COLORS[item].name}</Text>
        <Text style={styles.colorPrice}>{COLORS[item].price}đ</Text>
      </View>
      {item === selectedColor && <Text style={styles.selectedIndicator}>✓</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Color</Text>
      <FlatList
        data={Object.keys(COLORS)}
        renderItem={renderColorItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.colorList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorList: {
    flexGrow: 1,
  },
  colorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  selectedColorItem: {
    backgroundColor: '#F0F0F0',
  },
  colorImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    resizeMode: 'contain',
  },
  colorInfo: {
    flex: 1,
  },
  colorName: {
    fontSize: 18,
    marginBottom: 5,
  },
  colorPrice: {
    fontSize: 16,
    color: '#2ECC71',
    fontWeight: 'bold',
  },
  selectedIndicator: {
    fontSize: 24,
    marginLeft: 10,
  },
});