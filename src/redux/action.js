import * as actionType from "./action_type.js";
import { loginApi, checkLogApi, logoutApi } from '@/axios/api.js';

export const login = ( username, password ) => (dispatch) => {
    dispatch({
        type: actionType.LOADING
    })
    return loginApi({
        data:{username,password}
    }).then((result) => {
        if(result.success){
            let data = result.data;
            dispatch({
                type: actionType.LOGIN,
                ...{
                    username:data.username,
                    password:data.password,
                    avatar:data.avatar,
                }
            })
        }
    })
}

export const logout = () => (dispatch) => {
    dispatch({
        type: actionType.LOADING
    })
    return logoutApi().then((result) => {
        if(result.success){
            dispatch({
                type:actionType.LOGOUT
            })
        }
    })
}

export const checkLog = () => (dispatch) => {
    dispatch({
        type: actionType.LOADING
    })
    return checkLogApi().then((result) => {
        if(result.code === "001"){
            dispatch({
                type: actionType.HAS_LOGIN,
                ...result.data
            })
        }

        if(result.code === "002"){
            dispatch({
                type: actionType.HAS_NOT_LOGIN,
            })
        }
    })
}