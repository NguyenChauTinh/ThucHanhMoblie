import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './store';
import { TaskListScreen } from './TaskListScreen';
import { AddEditTaskScreen } from './AddEditTaskScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
     <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskList">
          <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Task List' }} />
          <Stack.Screen name="AddEditTask" component={AddEditTaskScreen} options={{ title: 'Add/Edit Task' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}