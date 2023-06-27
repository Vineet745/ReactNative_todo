import React from 'react';
import {StyleSheet} from 'react-native';

export default Exstyle = StyleSheet.create({
  container: {
    backgroundColor:"lightgray",
    flex:1
  },

  heading: {
    fontSize: 35,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 2,
    fontFamily:"helvetica"
  },
  listContainer: {
    borderColor: 'Black',
    padding: 10,
  },
  items:{
    marginTop:30
  },
  Lists:{
   fontSize:25,
   padding:15,
   backgroundColor:"lightblue",
   margin:10,
   borderRadius:20
  },
  Inputarea:{
    alignItems:"center",
    flexDirection:"row",
    position:"absolute",
    bottom:20
  },
  input:{
   width:230,
   paddingVertical:15,
   paddingHorizontal:15,
   backgroundColor:"white",
   marginLeft:15,
   borderRadius:60,
   marginRight:20,
   fontSize:20
  },
  button:{
   width:100,
   backgroundColor:"green",
   padding:15,
   borderRadius:15,
   color:"white",
   textAlign:"center"


  }

});
