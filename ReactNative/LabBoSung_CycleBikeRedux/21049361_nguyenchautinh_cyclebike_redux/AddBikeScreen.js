import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBike } from './bikeSlice';
import styles from './styles';

const AddBikeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleAddBike = async () => {
    if (!name || !price) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    const newBike = {
      name,
      price: parseFloat(price),
      description,
      image,
    };

    try {
      await dispatch(addBike(newBike)).unwrap();
      Alert.alert('Success', 'Bike added successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add bike');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter bike name"
        />

        <Text style={styles.formLabel}>Price *</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Enter price"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
          multiline
        />

        <Text style={styles.formLabel}>Image URL</Text>
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={setImage}
          placeholder="Enter image URL"
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddBike}>
          <Text style={styles.addButtonText}>Add Bike</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddBikeScreen;