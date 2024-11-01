import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.length > 0) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 8,
    flex: 1,
    marginRight: 10,
  },
});

export default ToDoForm;
