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
            return await firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    fetch(`https://car-magage.firebaseio.com/${response.user.uid}.json`,{
                        method: "POST",
                        headers: {"Content-Type": "aplication/json"},
                        body: JSON.stringify({uid: response.user.uid, email})
                    })
                    dispatch({type: "SIGNUP", payload: response.user.uid})
                })
                .catch(function(error) {alert(error)});
        } catch(err) {
            console.log(err)
        }
    }
}

export const update = (data) => {
    console.log("DATA__>>>>______>>", data.userKey)
    return async (dispatch) => {
         //await fetch(`https://car-magage.firebaseio.com/${data.userKey}.json`, {
         //       method: "GET",
         //       headers:{"Content-Type": "aplication/json"},
         //       //body: JSON.stringify(data)
         //   }).then((res) => { console.log("RESULT FROM DB _____>>.>>", res)})
    } 
}