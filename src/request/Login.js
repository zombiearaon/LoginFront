import { request } from "./request";

export function Login(params){
    return request({
        url:'/auth/login',
        method:'post',
        params:params
    })
}