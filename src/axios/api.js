import baseApi from './base_api.js';

export const loginApi = async (params) => {
    console.log("loginApi");
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

export const fetchClassListApi = async (params = {}) => {
    try{
        let response = await baseApi("get","/api/getClassNames",params);
        return response.data;
    }catch(err){
        throw(err);
    }
}

export const fetchArticlesByClassAndPageApi = async (params = {}) => {
    try{
        let response = await baseApi("get","/api/getArticlesByClassify", params);
        return response.data
    }catch(err){
        throw(err);
    }
}

export const fetchFirstPageArticlesByClassApi = async (params = {}) => {
    try{
        let response = await baseApi("get","/api/getFirstPageArticlesByClass", params);
        return response.data;
    }catch(err){
        throw(err);
    }
}

