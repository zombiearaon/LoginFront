<template>
    <div v-if="LoginControl.LoginType">
        <h1>登录</h1>
        <input v-model="LoginInfo.userName" placeholder="请输入登录用户名">
        <br>
        <input type="password" v-model="LoginInfo.password" placeholder="请输入登录密码">
        <br>
        <button @click="HandleLogin(LoginInfo)">登录</button>
        
    </div>
    <div v-else>
        <h1>注册</h1>
        <input v-model="RegistInfo.userName" placeholder="请输入注册用户名">
        <br>
        <input type="password" v-model="RegistInfo.password" placeholder="请输入注册密码">
        <br>
        <button @click="HandleRegist(RegistInfo)">注册</button>
    </div>
    <button @click="ChangeType">{{LoginControl.HandleType}}</button>
</template>

<script>
import {login,regist} from '../request/Login'
import { reactive, ref, toRefs } from 'vue'
import  {useRouter} from "vue-router";
    export default {
        name: "Login",
        setup(){
            const router = useRouter();
            const LoginInfo = reactive({
                userName : '',
                password : ''
            })

            function HandleLogin(LoginInfo){
                if(LoginInfo.userName === ''||LoginInfo.password === ''){
                    alert('用户名或密码不能为空')
                    return;
                }
                login(LoginInfo).then(res =>{
                    if(res.code === 0){
                        console.log(res)
                        localStorage.setItem("userName",LoginInfo.userName)
                        localStorage.setItem("token",res.data.token)
                        router.push('/Home')
                    }else{
                        alert(res.msg)
                    }
                }).catch(err =>{
                    console.log(err)
                })
            }

            const RegistInfo = reactive({
                userName : '',
                password : ''
            })
             
            function HandleRegist(RegistInfo){
                if(RegistInfo.userName === '' || RegistInfo.password === ''){
                    alert('用户名或密码不能为空')
                    return;
                }
                regist(RegistInfo).then(res => {
                    if(res.code === 0){
                        console.log(res)
                        localStorage.setItem("userName",RegistInfo.userName)
                        localStorage.setItem("token",res.data.token)
                        router.push('/Home')
                    }else{
                        alert(res.msg)
                    }
                }).catch(err =>{
                    console.log(err)
                })
            }

            const LoginControl = reactive({
                HandleType : '去注册',
                LoginType : true,
            })

            function ChangeType(){
                LoginControl.LoginType = !LoginControl.LoginType;
                if(LoginControl.LoginType){
                    LoginControl.HandleType = '去注册';
                    return;
                }
                LoginControl.HandleType= '去登录';
                return;
            }
            return {
                LoginInfo,
                RegistInfo,
                LoginControl,
                HandleLogin,
                HandleRegist,
                ChangeType
            }
        }
    }

</script>

<style scoped>

</style>