import React, {useState, useEffect} from 'react';
import {styles} from "../../style"


import {StyleSheet, ScrollView, Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';

export const ControlScreen = ({route, navigation}) => {
  console.log("___CONTROLL SCREEN___  ", route.params.data.selectedFunctions)
const { carName, selectedFunctions } = route.params.data
console.log("part of props______>>>>> ", selectedFunctions)


  const elements = selectedFunctions.map((el) => {
    let nameElem = Object.keys(el)
    return (
      <TouchableOpacity style={styles.button} >
        <Text> {nameElem}</Text>
      </TouchableOpacity>
    )
  })

  return (
        <View style={styles.container}  >
            <Text>{carName}</Text>
            <View>
              {elements}
            </View>
        </View>
  );
}

const styles1 = StyleSheet.create({
  text: {
    
    marginTop: 10,
    color: "#949fd1",
    fontSize: 20
  },
  border: {
    width: "80%",
    margin: 10,
    padding: 10,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
  }  
})