import axios from 'axios';
import config from '@/config/config'

const baseApi = (method, url, params) => {
    return new Promise((resolve,reject) => {
        // 判断传进来的是不是object
        // console.log(typeof params)
        if(typeof params !== "object") params = {};
        // console.log(params)
        let options = {
            baseURL: config.baseUrl,
            url,
            method: method,
            responseType: 'json',
            withCredentials: true,
            timeout: 30000,
            headers: null,
            validateStatus: function (status) {
                return status >= 200 && status < 300; // 默认的
            },
            ...params
        }
        axios(options).then(
            res => {
                resolve(res);
            },
            error => {
                reject(error)
            }
        )
    })
}

export default baseApi;