import request from "./request";

export function login(data){
    return request({
        url: 'auth/login',
        method: 'post',
        data: data
    })
}

export function regist(data){
    return request({
        url: 'auth/regist',
        method: 'post',
        data: data
    })
}