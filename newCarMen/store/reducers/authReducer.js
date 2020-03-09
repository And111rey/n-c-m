export const authReducer = (state=false, action) => {
    switch(action.type) {
        case "LOGIN":
            console.log("LOGINING.......  ", action.payload)
            return {...state, data: action.payload}
        case "SIGNUP":
            console.log("...STATE.....   ", action.payload)
            return {...state, data: action.payload}
        default:
            return state
    }
}



export const getDataFromServer = (state={}, action) => {
    switch(action.type){
        case "GET_ALL_DATA":
            console.log("_____ALL _getDataFromServer__ DATA___ IN STATE>>>>>", action.payload)
            return {...state, allData: action.payload}
    }
    return state
}