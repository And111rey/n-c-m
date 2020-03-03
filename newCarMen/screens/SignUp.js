import React, {useState} from 'react';
import {styles} from "../style"
import { Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';
import { useDispatch } from "react-redux"
import { loginSignUp } from "../store/actions/user" 


export const  SignUp =({navigation}) => {

const dispatch = useDispatch()     

const [email, setEmail] = useState("")
const [password, setPass] = useState("")
const [name, setName] = useState("")

const hendleRegistarstion = () => {
    let dataRegistration = {email, password, name}
    dispatch(loginSignUp(dataRegistration))
}

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <View style={styles.container}>
        <TextInput value={email} onChangeText={setEmail} style={[styles.border, styles.textColor]} placeholder="Email"/>
        <TextInput value={password} onChangeText={setPass} style={[styles.border, styles.textColor]} placeholder="Password"/>
        <TextInput value={name} onChangeText={setName} style={[styles.border, styles.textColor]} placeholder="Name"/>


        <TouchableOpacity style={[styles.button,{backgroundColor: "#949fd1"}]} onPress={hendleRegistarstion}>
                <Text>SingUp</Text>
        </TouchableOpacity>
    </View>
</TouchableWithoutFeedback>    
  );
}

