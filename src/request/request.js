import axios from "axios"

export function request(req){
  const sevice =  axios.create({
    baseURL:`/api`
})

sevice.interceptors.request.use(
    req => {
        console.log(req)
    let token = localStorage.getItem('token');
    if(token){
        req.headers['token']=token;
    }
    return req;
})

sevice.interceptors.response.use(res =>{
    //console.log("响应：：："+res)
    //if(res.)
},
err => {
    console.log(err)
})

return sevice()  
}
