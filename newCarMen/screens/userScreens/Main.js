import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
//import {useSelector } from "react-redux"
import {styles} from "../../style"
import { Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';
import { getDataFromServerAction } from "../../store/actions/user"



export const MainScreen = ({navigation}) => {
  
  useEffect(() => {
    getDataFromServerAction()
  }, [])

  

  const userKey = useSelector((state) => state.authReducer.data)
  console.log("DATA IN MAIN SCREEN ", userKey) 
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
            <Text>Main screen</Text>
            <Text>Main screen</Text>
            <Text>Main screen</Text>
        </View>
    </TouchableWithoutFeedback>    
  );
}

