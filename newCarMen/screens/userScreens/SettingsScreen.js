import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux"
import {styles} from "../../style"
import {StyleSheet, ScrollView, Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';
import { createSettings } from "../../store/actions/user"
import { getDataFromServerAction } from "../../store/actions/user"

export const SettingsScreen = ({navigation}) => {
  
  const dispatch = useDispatch()
  const userKeys = useSelector((state) => state.authReducer.data)
  const reduser11 = useSelector((state) => state.authReducer)////////
  console.log("___SETTINGS-SCREEN______STATE-DATA_____> ", userKeys)
  console.log("___SETTINGS-SCREEN______STATE-DATA_____> ", reduser11)


  const [carName, setCarName] = useState("") 
  const [engine, setEngine] = useState({add:false, internalState: false})
  const [cond, setCond] = useState({add:false, internalState: false})
  const [signal, setSignal] = useState({add:false, internalState: false})

  const [Func1, setFunc1] = useState({add:false, internalState: false})
  const [Func2, setFunc2] = useState({add:false, internalState: false})
  const [Func3, setFunc3] = useState({add:false, internalState: false})
  
  console.log("-----ПРОВЕРКА НАБОРА -------", engine.add)

  const hendlerUpdata = () => {
    if(carName.length > 0) {
          //console.log("SE_____>", selectedFunctions)
    const serviceData = {uid: userKeys.uid, dbID: userKeys.dataID}
    //console.log("serviceData", serviceData)
    
    let settingsData = {serviceData, carName, functions: [{engine}, {cond}, {signal}, {Func1}, {Func2}, {Func3}], }
    console.log("-----ПРОВЕРКА НАБОРА -------", settingsData)


    dispatch(createSettings(settingsData))
      .then(()=> dispatch(getDataFromServerAction(userKeys)) )
      .then(()=> navigation.navigate("Main"))
    } else {
      alert("The name of your car is very small :-(")
    }

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
            



            
            <TouchableOpacity style={[styles.button, {backgroundColor:engine.add? "#DCCB3D": "#949799"}]} onPress={()=>{setEngine({...engine, add: !engine.add})}}>
                <Text style={{color: (engine.add? "red": "#006400")}} > {engine.add? "Engine added": "Engine "}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:cond.add? "#DCCB3D": "#949799"}]} onPress={()=>{setCond({...cond, add: !cond.add})}} >
                <Text style={{color: (cond.add? "red": "#006400")}} >{cond.add? "Conditioner  added": "Conditioner"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:signal.add? "#DCCB3D": "#949799"}]} onPress={()=>{setSignal({...signal, add: !signal.add})}} >
                <Text style={{color: (signal.add? "red": "#006400")}} >{signal.add? "Signal added": "Signal"}</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={[styles.button, {backgroundColor:Func1.add? "#DCCB3D": "#949799"}]} onPress={()=>{setFunc1({...Func1, add: !Func1.add})}}>
                <Text style={{color: (Func1.add? "red": "#006400")}} > {Func1.add? "Func1 added": "Func1"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:Func2.add? "#DCCB3D": "#949799"}]} onPress={()=>{setFunc2({...Func2, add: !Func2.add})}} >
                <Text style={{color: (Func2.add? "red": "#006400")}} >{Func2.add? "Func2 added": "Func2"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:Func3.add? "#DCCB3D": "#949799"}]} onPress={()=>{setFunc3({...Func3, add: !Func3.add})}} >
                <Text style={{color: (Func3.add? "red": "#006400")}} >{Func3.add? "Func3 active": "Func3"}</Text>
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