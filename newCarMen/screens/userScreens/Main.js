import React, {useState} from 'react';

import {useSelector } from "react-redux"
import {styles} from "../../style"
import { Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';




export const MainScreen = ({navigation}) => {
    
  const dataUser = useSelector(state => state.authReducer)
  console.log(dataUser) 
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

