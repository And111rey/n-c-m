import React, {useState} from 'react';

import {useDispatch} from "react-redux"
import {styles} from "../style"
import { Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';
import { loginActionCreater } from "../store/actions/user"

export const Login = ({navigation}) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const hendleLogin = () => {
        dispatch(loginActionCreater(email, pass))
    }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
            <TextInput value={email} onChangeText={setEmail} style={[styles.border, styles.textColor]} placeholder="Email"/>
            <TextInput value={pass} onChangeText={setPass} style={[styles.border, styles.textColor]} placeholder="Password"/>
            <TouchableOpacity style={[styles.button, {backgroundColor: "#949fd1"}]} onPress={hendleLogin}>
                    <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor: "#949fd1"}]} onPress={() => {navigation.navigate("SignUp")}}>
                    <Text>SingUp</Text>
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>    
  );
}

