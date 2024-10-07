import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <View style={styles.containerHeader}> 
          <Image style={styles.imageHeader} source={require('./download.jpg')} />
        </View>
        
        <View style={styles.header}>
          <Text style={styles.title}>MANAGE YOUR</Text>
          <Text style={styles.title}>TASK</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TaskList')}>
          <Text style={styles.buttonText}>GET STARTED →</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 20,
  },
  card: {
    width: '100%',
    height:'100%',
    padding: 20,
    backgroundColor: 'white',
    // borderRadius: 10,
    // borderWidth: 2,
    // borderColor: '#00FFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  containerHeader: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  imageHeader: {
    width: 150,
    height:150,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00CED1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});