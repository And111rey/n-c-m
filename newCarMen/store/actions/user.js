//import firebase from "firebase"
import firebase from "../../congif/fireBase"

//signInWithEmailAndPassword

export const loginActionCreater = (email, password) => {
    return async (dispatch) => {
        try {
            const authData = await firebase.auth().signInWithEmailAndPassword(email, password)
            const  key  = authData.user.uid
            const response = await fetch(`https://car-magage.firebaseio.com/${key}.json`,{
                      method: "GET",
                      headers: {"Content-Type": "aplication/json"},
                     // body: JSON.stringify({uid: key, userData:{email, name}})
                  })
            const dataRes =  await response.json()
            const dataID = Object.keys(dataRes)[0]      
                  dispatch({type: "LOGIN", payload: {uid: key, dataID: dataID}})
        } catch (err) {alert(err)}

    }
}



export const loginSignUp = ({email, password, name}) => {
    return async (dispatch) => {
        try {

            const authData = await firebase.auth().createUserWithEmailAndPassword(email, password)
            const  key  = authData.user.uid
            //console.log("KEY___1", key)
            const response = await fetch(`https://car-magage.firebaseio.com/${key}.json`,{
                      method: "POST",
                      headers: {"Content-Type": "aplication/json"},
                      body: JSON.stringify({uid: key, userData:{email, name}})
                  })
            const dataID =  await response.json()      
                  //console.log("/*/-/-*/-*/-*/-*/-*", key , "-*-*-*", dataID)
                  dispatch({type: "SIGNUP", payload: {uid: key, dataID: dataID.name}})
        } catch(err) {
            console.log(err)
        }
    }
}





export const createSettings = ({serviceData:{uid, dbID}, carName, functions}) => {
    console.log(">>__DATA FrOM SETTING___>>", )    
    return async () => {
        let selectedFunctions = functions.filter((el, i, arr) => {
            for (let key in el) {
               if (el[key] === true) {
                //console.log("......",el)
                return carName
               }
            }
        })
        console.log("Checkin ____>>>>",carName)
        return await fetch(`https://car-magage.firebaseio.com/${uid}/${dbID}/cars/${carName}.json`, {
               method: "PATCH",
               headers:{"Content-Type": "aplication/json"},
               body: JSON.stringify( {carName, selectedFunctions})
           })
    } 
}




export const getDataFromServerAction = ({uid, dataID}) => {
    //console.log("useEffect  ==>>>>> __It__TWORKS____",uid )

    return async (dispatch) => {
        const response = await fetch(`https://car-magage.firebaseio.com/${uid}/${dataID}.json`,{
            method: "GET",
            headers: {"Content-Type": "aplication/json"}
        })
        const data = await response.json()
        console.log("GET DATA FROM SERVER____>>>>>>>_______", data)
        dispatch({type: "GET_ALL_DATA", payload: data})
    }
}