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
 




  console.log("calling data from reducer on main screen", data)
  


    
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
            {/* <Text>USER  {data.allData.userData.name}</Text> */}
            <Text>Main screen</Text>
            <Text>Main screen</Text>
         
        </View>
    </TouchableWithoutFeedback>    
  );
}

