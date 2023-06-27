import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Task = (props) => {

  


  return (
    <View style={style.listdesign}>
      <Text style={style.listitem} >{props.text}</Text>
      <Text style={{color:"red"}} onPress={()=>{props.onselect(props.id)}}>❌</Text>
      
    </View>
  )
}

const style = StyleSheet.create({
    listdesign:{
        padding:25,
        backgroundColor:"lightcyan",
        margin:10,
        borderRadius:20,
        flexDirection:"row",
        justifyContent:"space-between"
        
    },
    listitem:{
        fontSize:20,
        color:"black"

    }
})

export default Task