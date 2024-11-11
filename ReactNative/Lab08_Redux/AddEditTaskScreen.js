import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from './store';

export const AddEditTaskScreen = ({ route, navigation }) => {
  const [task, setTask] = useState({ id: Date.now(), text: '', completed: false });
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params?.task) {
      setTask(route.params.task);
    }
  }, [route.params?.task]);

  const handleSave = () => {
    if (task.text.trim()) {
      if (route.params?.task) {
        dispatch(editTask(task));
      } else {
        dispatch(addTask(task));
      }
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.task ? 'EDIT YOUR JOB' : 'ADD YOUR JOB'}</Text>
      <TextInput
        style={styles.input}
        value={task.text}
        onChangeText={(text) => setTask({ ...task, text })}
        placeholder="Input your job"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>FINISH →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});