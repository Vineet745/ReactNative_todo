import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Exstyle from './style';
import Task from './Components/Task';

const App = () => {
  const [task, settask] = useState();
  const [taskitem, settaskitem] = useState([]);

  const handletask = () => {
    settaskitem([...taskitem, task]);
    settask(null);
  };

  const deleteItem =(id)=>{
    settaskitem(taskitem.filter((arrelem,index)=>{
    return index !== id
    }))
  }

  return (
    <>
      <View style={Exstyle.container}>
        <View style={Exstyle.textWrapper}>
          <Text style={Exstyle.heading}>Task's List</Text>
          <View style={Exstyle.items}>
            {taskitem.map((item, index) => {
              return (
                <Task
                  key={index}
                  text={item}
                  id={index}
                  onselect={deleteItem}
                />
              );
            })}
          </View>
        </View>
        <View style={Exstyle.Inputarea}>
          <TextInput
            style={Exstyle.input}
            value={task}
            onChangeText={text => settask(text)}
            placeholder="Write a task"></TextInput>
          <TouchableOpacity onPress={() => handletask()}>
            <Text style={Exstyle.button}>Add task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default App;
