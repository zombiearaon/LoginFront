<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{hello}}</h1>
    <button @click="Initalize">点击按钮</button>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import {index} from '../request/index'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  setup(){
    const hello = ref('')
    function Initalize(){
      index().then(res => {
        hello.value = res
        }).catch(err => {
          console.log(err)
        })
    }
    onMounted(()=>{
      Initalize();
    })
    return{
      Initalize,
      hello,
    }
  }
}
</script>
