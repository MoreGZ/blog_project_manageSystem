import {fetchClassListApi} from "@/axios/api";
import * as actionTypes from "./actionTypes";

export const addClass = (className) => (dispatch) => {
    
}

export const removeClass = (classId) => (dispatch) => {

}

export const editClass = (classId, newClassName) => (dispatch) => {
    
}

export const fetchClasses = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_CLASSES_START
    })

    return fetchClassListApi().then((result) => {
        if(result.code !== "001" && result.code !== "002"){
            dispatch({
                type: actionTypes.FETCH_CLASSES_ERROR,
                latestErrorCode: result.code,
                latestErrorMessage: result.massege
            })
        }else{
            dispatch({
                type: actionTypes.FETCH_CLASSES_FINISH,
                ...result
            })
        }
        
    }).catch((err) => {
        dispatch({
            type: actionTypes.FETCH_CLASSES_ERROR,
            latestErrorCode: "000",
            latestErrorMessage: err.massege
        })
    })
}