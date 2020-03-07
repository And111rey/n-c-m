export const authReducer = (state=false, action) => {
    switch(action.type) {
        case "LOGIN":
            console.log("in reducer  ", action.payload)
            return {...state, data: action.payload}
        case "SIGNUP":
            const res = {...state, data: action.payload.user} 
            console.log("DATA ON REDUCER AFTER REGISTRATION_____>>>>>   ", action.payload)
            return {...state, data: action.payload}
        default:
            return state
    }
}



export const getDataFromServer = (state={}, actio) => {
    return state
}