import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    id: '1',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    imageUrl: '/assets/khoga.jpg?height=100&width=100',
  },
];

type ItemProps = {title: string};

const Item = ({ item }: ItemProps) => (
  <View style={styles.item}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <View style={styles.contentContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.shop}>{item.shop}</Text>
      </View>
    </View>
  </View>
);

const ChildItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    // flexDirection: 'row',
    // padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#eee',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  contentContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  textContainer: {
    // flex: 1,
    // justifyContent: 'flex-start',
  },
  name: {
    // fontSize: 16,
    // fontWeight: 'bold',
    // marginBottom: 8,
  },
  shop: {
    // fontSize: 14,
    // color: '#666',
  },
  // chatButton: {
   
  // },
  // chatButtonText: {
   
  // },
});

export default ChildItem;