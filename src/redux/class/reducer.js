import * as actionTypes from "./actionTypes";

const defaultState = {
    classList:[],
    isLoading: false,
    latestErrorCode: "",
    latestErrorMessage: ""
}

const reducer = (state = defaultState, action = {}) => {
    switch(action.type){
        case actionTypes.FETCH_CLASSES_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_CLASSES_FINISH:
            return {
                ...state,
                isLoading: false,
                classList: action.data
            }
        case actionTypes.FETCH_CLASSES_ERROR:
            return {
                ...state,
                isLoading: false,
                latestErrorCode: action.latestErrorCode,
                latestErrorMessage: action.latestErrorMessage
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer;