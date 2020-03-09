import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
//import {useSelector } from "react-redux"
import {styles} from "../../style"
import { Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';
import { ControlScreen } from "./ContsrolScreen"


export const MainScreen = ({navigation}) => {
  
  

 

  const allData = useSelector((state) => state.authReducer)
  //useEffect(() => {
  //  setData(allData)
  //      
  //    
  //}, [allData])
 


  

  console.log("_____MAIN_SCREEN____STATE-DATA___", allData)
  
  


  const contentFunctions = () => {
  
  }


  


  
  let renderElent = ""

  if(allData.data.cars){
    const carsArray = Object.keys(allData.data.cars)
    renderElent = carsArray.map((el, i) => {
      return (
        <TouchableOpacity key={i} onPress={() => navigation.navigate("Control", {data: allData.data.cars[el]})} style={styles.button} >
          <Text>{el}</Text>
        </TouchableOpacity> 
      )
    })
  } else {
    renderElent = <Text>is not exist</Text>
  }


  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
            <Text style={{marginTop: 40}}>User name: {allData.data.userData.name}</Text> 
            <Text>User Em@il: {allData.data.userData.email}</Text>
            <Text>jhjkhkjhkjh</Text>
            <Button title="Switch" onPress={() =>navigation.navigate("Control")}/>
            {renderElent}
        </View>
    </TouchableWithoutFeedback>    
  );
}

