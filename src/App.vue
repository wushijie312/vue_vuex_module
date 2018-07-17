<template>
 <div id="app">
  <img src="./assets/logo.png">
  <h1>{{useName}}</h1>
  
  <button  @click="changeName"> change to json</button>
 </div>
</template>
 
<script>
export default {

 // computed属性，从store 中获取状态state，不要忘记login命名空间。
 computed: {
  useName: function() {
   //return store.state.login.useName
    return this.$store.state.login.useName
  }
 },methods:{
    changeName(){
       this.$store.dispatch("changeName",'jason');
    }
 }
}
</script>
