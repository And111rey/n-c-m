import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux"
import {styles} from "../../style"
import {StyleSheet, ScrollView, Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';
import { update } from "../../store/actions/user"


export const SettingsScreen = ({navigation}) => {
  
  const dispatch = useDispatch()
  const userKeys = useSelector((state) => state.authReducer.data)

  //console.log("UUUUUU____that which come from state to settings screen______> ", userKeys)

  const [carName, setCarName] = useState("") 
  const [engine, setEngine] = useState(false)
  const [cond, setCond] = useState(false)
  const [signal, setSignal] = useState(false)

  const [Func1, setFunc1] = useState(false)
  const [Func2, setFunc2] = useState(false)
  const [Func3, setFunc3] = useState(false)
  
  


  const hendlerUpdata = () => {

    //console.log("SE_____>", selectedFunctions)
    const serviceData = {uid: userKeys.uid, dbID: userKeys.dataID}
    //console.log("serviceData", serviceData)
    
    let settingsData = {serviceData, carName, functions: [{engine}, {cond}, {signal}, {Func1}, {Func2}, {Func3}], }
    //console.log("-----_created object______-------", settingsData)
    dispatch(update(settingsData))
}



  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container} value={carName} >
            
            <TextInput  style={[styles.border, styles.textColor]} onChangeText={setCarName} placeholder="Enter the name of your car"/>
            <ScrollView>
            <TouchableOpacity onPress={hendlerUpdata} style={[styles.button,{backgroundColor: "#949fd1"}]} >
                <Text>Create</Text>
            </TouchableOpacity>
            
              <Text style={styles1.text}>Select additional features</Text>
            



            
            <TouchableOpacity style={[styles.button, {backgroundColor:engine? "#DCCB3D": "#949799"}]} onPress={()=>{setEngine(!engine)}}>
                <Text style={{color: (engine? "red": "#006400")}} > {engine? "Engine added": "Engine "}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:cond? "#DCCB3D": "#949799"}]} onPress={()=>{setCond(!cond)}} >
                <Text style={{color: (cond? "red": "#006400")}} >{cond? "Conditioner  added": "Conditioner"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:signal? "#DCCB3D": "#949799"}]} onPress={()=>{setSignal(!signal)}} >
                <Text style={{color: (signal? "red": "#006400")}} >{signal? "Signal added": "Signal"}</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={[styles.button, {backgroundColor:Func1? "#DCCB3D": "#949799"}]} onPress={()=>{setFunc1(!Func1)}}>
                <Text style={{color: (Func1? "red": "#006400")}} > {Func1? "Func1 added": "Func1"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:Func2? "#DCCB3D": "#949799"}]} onPress={()=>{setFunc2(!Func2)}} >
                <Text style={{color: (Func2? "red": "#006400")}} >{Func2? "Func2 added": "Func2"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:Func3? "#DCCB3D": "#949799"}]} onPress={()=>{setFunc3(!Func3)}} >
                <Text style={{color: (Func3? "red": "#006400")}} >{Func3? "Func3 active": "Func3"}</Text>
            </TouchableOpacity>
        
        
        
        </ScrollView>
        </View>
    </TouchableWithoutFeedback>    
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