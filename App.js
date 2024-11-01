import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  const [todos, setTodos] = useState(['Go to the gym', 'Walk the dog', 'Do laundry']);

  const addTask = (newTask) => {
    setTodos([...todos, newTask]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Incredible ToDo List</Text>

      {/* ToDo List Component */}
      <ToDoList todos={todos} />

      {/* ToDo Form Component */}
      <ToDoForm addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
