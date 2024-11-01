import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ToDoList = ({ todos }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {todos.map((todo, index) => (
        <Text key={index} style={styles.todoItem}>{todo}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 20,
  },
  todoItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ToDoList;
