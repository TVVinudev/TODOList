// App.js
import React from 'react';
import TodoList from './components/ToDoList.js';
import { ScrollView, Text } from 'react-native';


export default function App() {
  return (
    <ScrollView style={{padding:50}}>

      <Text style={{textAlign:"center", color:"#0e8717",fontSize:24,fontWeight:"700"}} > TODO 📝 </Text>

      <TodoList />
    </ScrollView>

  );
}