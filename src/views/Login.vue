<template>
    <div v-if="LoginType">
        <h1>登录</h1>
        <input v-model="LoginInfo.userName" placeholder="请输入用户名">
        <input type="password" v-model="LoginInfo.password" placeholder="请输入密码">
        <button @click="HandleLogin(LoginInfo)">登录</button>
    </div>
</template>

<script>
import {login} from '../request/Login'
    export default {
        name: "Login",
        setup(){
            let LoginInfo = {
                userName : '',
                password : ''
            }
             
            let LoginType = true;
            
            function HandleLogin(LoginInfo){
                console.log(LoginInfo);
                login(LoginInfo).then(res =>{
                    
                    if(res.code === 0){
                        console.log(res)
                        localStorage.setItem("token",res.data.token)
                    }
                }).catch(err =>{
                    console.log(err)
                })
            }
            return {
                LoginInfo,
                LoginType,
                HandleLogin,
            }
        }
    }

</script>

<style scoped>

</style>