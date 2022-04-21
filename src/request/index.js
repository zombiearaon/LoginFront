import request from "./request";

export function index(){
    return request({
        url: 'index/index',
        method: 'get'
    })
}