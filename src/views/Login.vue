<template>
    <div v-if="LoginType">
        <h1>登录</h1>
        <input v-model="userName" placeholder="请输入用户名">
        <input type="password" v-model="password" placeholder="请输入密码">
        <button @click="HandleLogin(userName,password)">登录</button>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
    export default {
        name: "Login",
        setup(){
            let userName = '';
            let password = '';
            let LoginType = true;
            
            function HandleLogin(userName,password){
                console.log(userName,password);
            }
            return {
                userName,
                password,
                LoginType,
                HandleLogin,
            }
        }
    }

</script>

<style scoped>

</style>