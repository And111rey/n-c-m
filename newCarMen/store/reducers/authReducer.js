export const authReducer = (state=false, action) => {
    switch(action.type) {
        case "LOGIN":
            return {...state, data: action.payload}
        case "SIGNUP":
            return {...state, data: action.payload}
        default:
            return state
    }
}



export const getDataFromServer = (state={}, action) => {
    switch(action.type){
        case "GET_ALL_DATA":
            return {...state, allData: action.payload}
    }
    return state
}