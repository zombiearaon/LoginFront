<template>
    <div v-if="LoginType">
        <h1>登录</h1>
        <input v-model="LoginInfo.username" placeholder="请输入用户名">
        <input type="password" v-model="LoginInfo.password" placeholder="请输入密码">
        <button @click="HandleLogin(LoginInfo)">登录</button>
    </div>
</template>

<script>
import {Login} from '../request/Login'
    export default {
        name: "Login",
        setup(){
            let LoginInfo = {
                username : '',
                password : ''
            }
             
            let LoginType = true;
            
            function HandleLogin(LoginInfo){
                console.log(LoginInfo);
                Login(LoginInfo).then(res=>{
                    console.log(res)
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