import firebase from "../../congif/fireBase"



export const loginActionCreater = (email, password) => {
    return async (dispatch) => {
        try {
            const authData = await firebase.auth().signInWithEmailAndPassword(email, password)
            const  key  = authData.user.uid
            const response = await fetch(`https://car-magage.firebaseio.com/${key}.json`,{
                      method: "GET",
                      headers: {"Content-Type": "aplication/json"},
                  })
            const dataRes =  await response.json()
            const dataID = Object.keys(dataRes)[0]   
            const responseAllData = await fetch(`https://car-magage.firebaseio.com/${key}/${dataID}.json`,{
                method: "GET",
                headers: {"Content-Type": "aplication/json"}
            })
            const data = await responseAllData.json()
                  dispatch({type: "LOGIN", payload: {...data, dataID}})
        } catch (err) {alert(err)}

    }
}

export const loginSignUp = ({email, password, name}) => {
    return async (dispatch) => {
        try {

            const authData = await firebase.auth().createUserWithEmailAndPassword(email, password)
            const  key  = authData.user.uid
            const response = await fetch(`https://car-magage.firebaseio.com/${key}.json`,{
                      method: "POST",
                      headers: {"Content-Type": "aplication/json"},
                      body: JSON.stringify({uid: key, userData:{email, name}})
                  })
            const dataID =  await response.json()      
                  
                  dispatch({type: "SIGNUP", payload: {uid: key, dataID: dataID.name, userData:{email, name}}})
        } catch(err) {
            console.log(err)
        }
    }
}




export const getDataFromServerAction = ({uid, dataID}) => {

    return async (dispatch) => {
        const response = await fetch(`https://car-magage.firebaseio.com/${uid}/${dataID}.json`,{
            method: "GET",
            headers: {"Content-Type": "aplication/json"}
        })
        const data = await response.json()
        dispatch({type: "SIGNUP", payload: {...data, dataID} })
    }
}




export const createSettings = ({serviceData:{uid, dbID}, carName, functions}) => {
    return async () => {
        let selectedFunctions = functions.filter((el, i, arr) => {
            for (let key in el) {
               if (el[key].add === true) {
                return carName
               }
            }
        })
        return await fetch(`https://car-magage.firebaseio.com/${uid}/${dbID}/cars/${carName}.json`, {
               method: "PATCH",
               headers:{"Content-Type": "aplication/json"},
               body: JSON.stringify( {carName, selectedFunctions})
           })
    } 
}


export const updateSwitchableFunctions = ({uid, dataID, carName, number, element, switchData}) => {
    return async (dispatch) => {
        await fetch(`https://car-magage.firebaseio.com/${uid}/${dataID}/cars/${carName}/selectedFunctions/${number}/${element}.json`, {
               method: "PATCH",
               headers:{"Content-Type": "aplication/json"},
               body: JSON.stringify( switchData)
           })

    }
} 

