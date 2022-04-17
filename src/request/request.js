import axios from "axios"

const sevice =  axios.create({
    baseURL:`http://localhost:8080/`
})

sevice.interceptors.request.use(req => {
    let token = localStorage.getItem('token');
    if(token){
        req.headers[''];
    }
    return req;
})

sevice.interceptors.response.use(res =>{
    console.log("响应：：："+res)
    //if(res.)
})

export default sevice