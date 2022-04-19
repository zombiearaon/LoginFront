import axios from "axios"

const sevice =  axios.create({
    baseURL:'/api'
})

sevice.interceptors.request.use(
    req => {
        //console.log(req)
    let token = localStorage.getItem('token');
    if(token){
        req.headers['token']=token;
    }
    return req;
})

sevice.interceptors.response.use(res =>{
    //console.log("响应：：："+res)
    //if(res.)
    console.log(res)
    return res.data?res.data:res;
},err => {
    console.log(err)
})

export default sevice
