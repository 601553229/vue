/**
 * Created by 112233 on 2018/6/13.
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8008';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});
//返回状态判断
axios.interceptors.response.use((res) =>{
    if(res.data.code!==0){//这块自己加的接口判断
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    //404等问题可以在这里处理
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {
    getAddressJson() {
        return fetch('http://localhost/cs/backend/web/index.php?r=test/index')
    },
    getCateJson() {
        return fetch('http://localhost/cs/backend/web/index.php?r=test/cate',{addressId:1})
    },
    getRpcJson(url,param){
        return fetch(url,param)
    }
}