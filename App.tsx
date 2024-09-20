import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


interface Itodo {
  id: number;
  name: string;
}
export default function App() {

  const [todo, settodo] = useState("");
  const [todoList, settodoList] = useState<Itodo[]>([])

  function randamInteger(min: number, max: number) {
    return Math.floor(Math.random()*(max - min + 1) + min)
  }

  const handleAddTodo = () => {
    if (!todo) return;
    settodoList([...todoList, { id: randamInteger(2, 2000000), name: todo }]);
    settodo("");
  }
  //jsx
  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>TodoApp</Text>
      {/* form */}

      <View style={styles.body}>
        <TextInput
          
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => settodo(value)}
        />
        <Button title='To do App'
          onPress={handleAddTodo}
        />
      </View>

      {/* list todo */}
      <View style={styles.body}>
        <FlatList
          data={todoList}
          renderItem={({item}) => {
            return(
              <Text style = {styles.todoItem}>{item.name}</Text>
            )
          }}
        />
       
       
      </View>


    </View>
  );
}

//ko có khai niem CSS
//css in js
const styles = StyleSheet.create({

  header:{
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60

  },
  todoItem: {
    fontSize: 30,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20,
    color: "black",
    backgroundColor: "lightgray"
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBlockColor: "green",
    padding: 5,
    marginHorizontal: 15,
    marginTop:15
  },
  body: {
    paddingHorizontal: 15,
    marginBottom:20,
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  
}});
