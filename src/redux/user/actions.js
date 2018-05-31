import * as actionTypes from "./actionTypes";
import { loginApi, checkLogApi, logoutApi } from '@/axios/api.js';

export const login = ( username, password ) => (dispatch, getStates) => {
    dispatch({
        type: actionTypes.LOGIN_START
    })
    return loginApi({
        data:{username,password}
    }).then((result) => {
        dispatch({
            type: actionTypes.LOGIN_FINISH,
            ...result
        })
    }).catch((err) => {
        dispatch({
            type: actionTypes.LOGIN_ERROR,
            latestErrorCode: "000",
            latestErrorMessage: err.message,
        })
    })
}

export const logout = () => (dispatch) => {
    dispatch({
        type: actionTypes.LOGOUT_START
    })
    return logoutApi().then((result) => {
        if(result.success){
            dispatch({
                type:actionTypes.LOGOUT_FINISH
            })
        }
    }).catch((err) => {
        dispatch({
            type:actionTypes.LOGOUT_ERROR,
            latestErrorCode: "000",
            latestErrorMessage: err.message,
        })
    })
}

export const checkLogin = () => (dispatch) => {
    dispatch({
        type: actionTypes.CHECKLOGIN_START
    })

    return checkLogApi().then((result) => {
        dispatch({
            type: actionTypes.CHECKLOGIN_FINISH,
            ...result
        })
    }).catch((err) => {
        dispatch({
            type: actionTypes.CHECKLOGIN_ERROR,
            latestErrorCode: "000",
            latestErrorMessage: err.message,
        })
    })
}

export const resetError = () => ({
    type: actionTypes.RESET_ERROR
})