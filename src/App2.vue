<template>
 <div id="app">
  <img src="./assets/logo.png">
  <h1>{{useName}}</h1>
   <!-- 增加h2 展示 localJobTitle -->
  <h2>{{localJobTitle}}</h2>
  <!-- 添加按钮 -->
  <button  @click="changeName"> change to json</button>
 </div>
</template>
 
<script>
import {mapActions, mapState,mapGetters} from "vuex";
export default {
 // computed属性，从store 中获取状态state，不要忘记login命名空间。
 computed: {
  ...mapState({
   useName: state => state.login.useName
  }),
 
  // mapGeter 直接获得全局注册的getters
  ...mapGetters(["localJobTitle"])
 },
 methods: {
  changeName() {
   this.$store.dispatch("changeName", "Jason")
  }
 }
}
</script>
