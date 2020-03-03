import firebase from "firebase"

export const loginActionCreater = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            //console.log(response.user.uid)
            dispatch({type: "LOGIN", payload: response})
        } catch (err) {alert(err)}

    }
}

export const loginSignUp = ({email, password, name}) => {
    return async (dispatch) => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(function(error) {alert(error)});
            dispatch({type: "SIGNUP", payload: response})
        } catch(err) {
            console.log(err)
        }
    }
}