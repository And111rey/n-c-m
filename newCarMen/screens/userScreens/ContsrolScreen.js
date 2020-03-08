import React, {useState, useEffect} from 'react';

import {styles} from "../../style"
import {StyleSheet, ScrollView, Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';

export const ControlScreen = ({navigation}) => {
  
  return (
        <View style={styles.container}  >
            <Text>Controll screen</Text>
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