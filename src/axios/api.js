import baseApi from './base_api.js';

export const loginApi = async (params) => {
    try{
        let response = await baseApi("post","/api/login",params);
        let data = response.data;
        return data;
    }catch(err){
        throw(err);
    }
}

export const logoutApi = async (params) => {
    try{
        let response = await baseApi("post","/api/logout",params);
        let data = response.data;
        return data;
    }catch(err){
        throw(err);
    }
}

export const checkLogApi = async (params = {}) => {
    try{
        let response = await baseApi("post","/api/checkLog",params);
        return response.data;
    }catch(err){
        throw(err);
    }
}