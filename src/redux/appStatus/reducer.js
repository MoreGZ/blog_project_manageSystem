import * as actionTypes from "./actionTypes";

const defaultState = {
    isLoading: false,
    hasRequestError: false,
    errorMessage: ""
}
const reducer = (state = defaultState, action = {}) => {
    switch(action.type){
        case actionTypes.START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FINISH_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.REQUEST_ERROR:
            return{
                ...state,
                hasRequestError: true,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}

export default reducer;