
export const authReducer = (state=false, action) => {
    switch(action.type) {
        case "LOGIN":
            console.log("in reducer  ", action.payload)
            return {...state, data: action.payload.user}
        case "SIGNUP":
            const res = {...state, data: action.payload.user} 
            console.log("STATE   ", action.payload)
            return {...state, data: action.payload.user}
        default:
            return state
    }
} 