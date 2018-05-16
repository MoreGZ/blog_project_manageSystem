import * as actionType from "./action_type.js";

let defaultState = {
    username: "x",
    password: "",
    avatar:"",
    isLogin: false,
    isLoading: false
}
const reducer = (state = defaultState, action = {}) => {
    switch(action.type){
        case actionType.LOADING:
            return {
                ...state,
                isLoading: true
            }
        case actionType.LOGIN:
            return {
                ...state, 
                ...{
                    username: action.username, 
                    password: action.password,
                    avatar: action.avatar,
                    isLogin: true
                },
                isLoading: false
            }
        case actionType.LOGOUT:
            return {              
                ...state,
                ...{
                    isLogin: false,
                    username: "",
                    password: "",
                    avatar: ""
                },
                isLoading: false
            }
        case actionType.HAS_NOT_LOGIN:
            return {                           
                ...state,
                ...{
                    isLogin: false,
                    username: "",
                    password: "",
                    avatar: ""
                },
                isLoading: false
            }
        case actionType.HAS_LOGIN:
            return {
                ...state,
                ...{
                    isLogin: action.isLogin,
                    username: action.username,
                    password: action.password,
                    avatar: ""   
                },
                isLoading: false                                
            }
        default:
            return state
    }
}

export default reducer