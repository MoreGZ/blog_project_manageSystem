import * as actionTypes from "./actionTypes";

let defaultState = {
    username: "x",
    password: "",
    avatar:"",
    isLogin: true,
    isLoading: false,
    latestErrorCode: "",
    latestErrorMessage: ""
}
const reducer = (state = defaultState, action = {}) => {
    switch(action.type){
        case actionTypes.LOGIN_START:
            return {
                ...state,
                isLoading:true
            }
        case actionTypes.LOGIN_FINISH:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                ...action.data
            }
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                latestErrorCode: action.latestErrorCode,
                latestErrorMessage: action.latestErrorMessage
            }
        case actionTypes.LOGOUT_START:
            return {
                ...state,
                isLoading:true
            }
        case actionTypes.LOGOUT_FINISH:
            return {
                ...state,
                isLoading: false,
                isLogin: false,
            }
        case actionTypes.LOGOUT_ERROR:
            return {
                ...state,
                isLoading: false,
                latestErrorCode: action.latestErrorCode,
                latestErrorMessage: action.latestErrorMessage
            }
        case actionTypes.CHECKLOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.CHECKLOGIN_FINISH:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                ...action.data
            }
        case actionTypes.CHECKLOGIN_ERROR: 
            return {
                ...state,
                isLoading: false,
                latestErrorCode: action.latestErrorCode,
                latestErrorMessage: action.latestErrorMessage
            }
        case actionTypes.RESET_ERROR:
            return {
                ...state,
                latestErrorCode: "",
                latestErrorMessage: ""
            }
        default:
            return state
    }
}

export default reducer