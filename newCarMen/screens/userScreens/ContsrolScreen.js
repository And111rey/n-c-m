import React, {useState, useEffect} from 'react';
import  { useDispatch } from "react-redux"
import {styles} from "../../style"
import {updateSwitchableFunctions} from "../../store/actions/user"
import {getDataFromServerAction} from "../../store/actions/user"


import {StyleSheet, ScrollView, Text, View, Button, TextInput, onChangeText, TouchableWithoutFeedback, TouchableOpacity , Keyboard } from 'react-native';

export const ControlScreen = ({route, navigation}) => {

  const { data:{carName, selectedFunctions}, dataID, uid } = route.params
  
  const dispatch = useDispatch()
  
  useEffect(()=>{
    console.log("USING USEEFECT worked>>>>>>>>")
    dispatch(getDataFromServerAction({uid, dataID}))
  }, [update])

  const [dataForUpdate, setDataForUpdate] = useState({})
  const [update, setUpdate] = useState(true)

  //console.log("_ЧТО_ПРИХОДИТ_В___CONTROL __>>>>> ", route.params)


  

  //const allDataOnOneCar = route.params.data
  //console.log("___ВСЯ__ДАТА__ПО__ОДНОЙ__МАШИНЕ___", allDataOnOneCar)


  //console.log("___ЧТО В ЮЗ-СТЕЙТЕ ____ ", thisState)
  
  const hendleSwitch = (i, nameElem, switchData) => {
    const element = nameElem[0]
    setUpdate(!update)

    setDataForUpdate({uid, dataID, carName, number:i, element, switchData })
    console.log(update)
    //console.log("_____  Array was chatgeD  ___",carName,"___",  i,"___" , element,"_____", switchData)
    dispatch(updateSwitchableFunctions( dataForUpdate ))
  }




////проверить логику в мапингу, настроить обновление через юзЭффект, пр повтрном сходе на страницу тогда обновля.ться данные 
////проверить логику в мапингу, настроить обновление через юзЭффект
////проверить логику в мапингу, настроить обновление через юзЭффект
////проверить логику в мапингу, настроить обновление через юзЭффект





  let elements = selectedFunctions.map((el, i, arr) => {
    let nameElem = Object.keys(el)
    //console.log("________EL________", el)
    return  (
      <TouchableOpacity key={i} style={styles.button} onPress={()=>hendleSwitch( i, nameElem, {...el.nameElem, internalState: !el[nameElem].internalState})}>
        <Text> {nameElem}</Text>
      </TouchableOpacity>
    )
  })
  return  (
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