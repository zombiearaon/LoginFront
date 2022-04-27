<template>
  <div>
      <ul>
          <li
            v-for="item of msgList"
            :key="item.id"
          >
          <p>
              <span>{{item.userName}}</span>
              <span>{{new Date(item.dateTime)}}</span>
          </p>
          <p>
              消息:{{item.msg}}
          </p>
          </li>
      </ul>
      <input type="text" placeholder="请输入消息"  v-model="msg">
      <button @click="handleSubmit">发射</button>
  </div>
</template>

<script>
import { reactive, toRef } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import {useWebSocket} from '../request/Socket/webSocket'

export default {
    name:"Chat",
    setup(){
        const route= useRouter();
        const ws = useWebSocket(handleMessage);
        onMounted(()=>{
            let userName = localStorage.getItem('userName');
            if(!userName){
                alert('青灯')
                route.push('/')
            }
        })

        const state = reactive({
            msg:'',
            msgList:[]
        })

        function handleMessage(e){
            state.msgList.push(JSON.stringify(e.data));
        }
        function handleSubmit(){
            if(!state.msg.trim().length){
                return;
            }
            ws.send(JSON.stringify({
                id:new Date().getTime(),
                user:userName,
                dateTime: new Date().getTime(),
                msg:state.msg
            }));
            
            state.msg = '';
        }

        return{
            ...toRef(state),
            handleSubmit
        }
    }
}
</script>

<style>

</style>