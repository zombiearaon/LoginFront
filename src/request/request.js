import axios from "axios"
import router from "../router";


const sevice =  axios.create({
    baseURL:'/api'
})

sevice.interceptors.request.use(
    req => {
        //console.log(req)
    let username = localStorage.getItem('userName')
    let token = localStorage.getItem('token');
    if(token){
        req.headers['token']=token;
        req.headers['userName'] = username;
    }
    return req;
})

sevice.interceptors.response.use(res =>{
    console.log(res)
    if(res.data.code === -10){
        alert('登录超时，请重新登录')
        router.replace('/')
    }
    return res.data?res.data:res;
},err => {
    console.log(err)
})

export default sevice
