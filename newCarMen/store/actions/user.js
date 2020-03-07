//import firebase from "firebase"
import firebase from "../../congif/fireBase"


export const loginActionCreater = (email, password) => {
    return async (dispatch) => {
        try {
            return await firebase.auth().signInWithEmailAndPassword(email, password)
                .then((response) => {
                    fetch(`https://car-magage.firebaseio.com/${response.user.uid}.json`,{
                        method: "GET",
                        headers: {"Content-Type": "aplication/json"}
                    })
                    dispatch({type: "LOGIN", payload: response.user.uid})
                })
            
        } catch (err) {alert(err)}

    }
}



export const loginSignUp = ({email, password, name}) => {
    return async (dispatch) => {
        try {
            //return await firebase.auth().createUserWithEmailAndPassword(email, password)
            //    .then((response) => {
            //        fetch(`https://car-magage.firebaseio.com/${response.user.uid}.json`,{
            //            method: "POST",
            //            headers: {"Content-Type": "aplication/json"},
            //            body: JSON.stringify({uid: response.user.uid, email})
            //        })
            //        dispatch({type: "SIGNUP", payload: response.user.uid})
            //    })
            //    .catch(function(error) {alert(error)});
            const authData = await firebase.auth().createUserWithEmailAndPassword(email, password)
            const  key  = authData.user.uid
            console.log("KEY___1", key)
            const response = await fetch(`https://car-magage.firebaseio.com/${key}.json`,{
                      method: "POST",
                      headers: {"Content-Type": "aplication/json"},
                      body: JSON.stringify({uid: key, userData:{email, name}})
                  })
            const dataID =  await response.json()      
                  console.log("/*/-/-*/-*/-*/-*/-*", key , "-*-*-*", dataID)
                  dispatch({type: "SIGNUP", payload: {uid: key, dataID: dataID.name}})
            ///////////////////////////////////////////////////////////////////////////////////
        } catch(err) {
            console.log(err)
        }
    }
}





export const update = ({serviceData:{uid, dbID}, carName, functions}) => {
    console.log(">>__DATA FrOM SETTING___>>", functions)
    //console.log(">>__DATA FrOM SETTING___>>", carName)
    //console.log(">>__DATA FrOM SETTING___>>", dbID)
    //console.log("DATA__  ключ ЮЗЕРА  >>>>______>>", data.userKey.uid) // тут два ключа
    //console.log("DATA__  ключ ЮЗЕРА  >>>>______>>", data.userKey.dataID.name) // тут два ключа
    //console.log("DATA__>>>>______>>", data)
    
    
    return async () => {
        let selectedFunctions = functions.filter((el, i, arr) => {
            for (let key in el) {
               if (el[key] === true) {
                //console.log("......",el)
                return el
               }
            }
        })
        console.log("Checkin ____>>>>",selectedFunctions)
        return await fetch(`https://car-magage.firebaseio.com/${uid}/${dbID}.json`, {
               method: "PATCH",
               headers:{"Content-Type": "aplication/json"},
               body: JSON.stringify({ carName, selectedFunctions})
           })
    } 
}

// данные приходят , отображаются, нужно структурирвать базу
// данные приходят , отображаются, нужно структурирвать базу  попробовать с УРЛОМ
// данные приходят , отображаются, нужно структурирвать базу
// данные приходят , отображаются, нужно структурирвать базу



export const getDataFromServerAction = () => {

    return (dispatch) => {

    }
}