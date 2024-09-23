import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const COLORS = {
  '#FF0000': {stars: 5,reviews: 1100, name: 'Black', price: 20000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303947975273507_iphone-15-den-1.jpg' },
  '#00FF00': {stars: 5,reviews: 1500, name: 'Green', price: 30000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303950417112947_iphone-15-xanh-la-1.jpg' },
  '#0000FF': {stars: 3,reviews: 1200, name: 'Blue', price: 25000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303935769505085_iphone-15-xanh-1.jpg' },
  '#FFFF00': {stars: 4,reviews: 1100, name: 'Yellow', price: 23000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303944832321476_iphone-15-vang-1.jpg' },
  '#FF00FF': {stars: 5,reviews: 1300, name: 'Pink', price: 27000000, image: 'https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/2023_9_15_638303942321093007_iphone-15-hong-1.jpg' }
};

export default function ProductDetailScreen({ route }) {
  const [selectedColor, setSelectedColor] = useState(route.params?.color || Object.keys(COLORS)[0]);
  const navigation = useNavigation();

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={20}
          color={i <= rating ? '#FFD700' : '#BDC3C7'}
        />
      );
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: COLORS[selectedColor].image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>iPhone 13 Pro - {COLORS[selectedColor].name}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.stars}>{renderStars(COLORS[selectedColor].stars)}</View>
          <Text style={styles.reviews}>{COLORS[selectedColor].reviews} đánh giá</Text>
        </View>
        <Text style={styles.price}>{COLORS[selectedColor].price}đ</Text>
        <TouchableOpacity 
          style={styles.colorButton} 
          onPress={() => navigation.navigate('ColorSelection', { selectedColor, setSelectedColor })}
        >
          <Text style={styles.colorButtonText}>CHỌN MÀU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={() => alert('Đã thêm sản phẩm')}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
  },
  productImage: {
    width: width,
    height: width,
    backgroundColor: '#F8F8F8',
  },
  contentContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 10,
  },
  reviews: {
    color: '#7F8C8D',
    fontSize: 14,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2ECC71',
    marginBottom: 20,
  },
  colorButton: {
    backgroundColor: '#3498DB',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  colorButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#2ECC71',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});