import React, {useState} from 'react';

import {useDispatch} from "react-redux"
import {styles} from "../../style"
import { Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';

export const SettingsScreen = ({navigation}) => {



  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
            <Text>Settings screen</Text>
        </View>
    </TouchableWithoutFeedback>    
  );
}

