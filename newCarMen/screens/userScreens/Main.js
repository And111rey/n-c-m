import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
//import {useSelector } from "react-redux"
import {styles} from "../../style"
import { Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';



export const MainScreen = ({navigation}) => {
  
  

  const [data, setData] = useState({})

  const allData = useSelector((state) => state.getDataFromServer)
  useEffect(() => {
    setData(allData)
        
      
  }, [allData])
 


  const carsArray = Object.keys(data.allData.cars)

  console.log("calling data from ________reducer on main screen", data.allData.cars)
  

//надлючена навигация с дополнительныс стеком, РАЗМАПИТЬ данные
// РАЗМАПИТЬ данные
// РАЗМАПИТЬ данные
// РАЗМАПИТЬ данные
// РАЗМАПИТЬ данные


  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
            <Text style={{marginTop: 40}}>User name: {data.allData.userData.name}</Text> 
            <Text>User Em@il: {data.allData.userData.email}</Text>  
            <Text>jhjkhkjhkjh</Text>
            <Button title="Switch" onPress={() =>navigation.navigate("Control")}/>
         
        </View>
    </TouchableWithoutFeedback>    
  );
}

