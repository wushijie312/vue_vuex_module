<template>
 <div id="app">
  <img src="./assets/logo.png">
  <h1 @click ="alertName">{{useName}}</h1>
 
  <!-- 增加h2 展示 localJobTitle -->
  <h2>{{localJobTitle}}</h2>
  <!-- 添加按钮 -->
  <div>
   <button @click="changeName"> change to json</button>
  </div>
 </div>
</template>
 
<script>
import {mapActions, mapState,mapGetters} from "vuex";
export default {
 // computed属性，从store 中获取状态state，不要忘记login命名空间。
 computed: {
  ...mapState("login",{
   useName: state => state.useName
  }),
 
   localJobTitle() {
    return this.$store.getters["login/localJobTitle"]
   }
 },
 methods: {
  changeName() {
   this.$store.dispatch("login/changeName", "Jason")
  },
  alertName() {
   this.$store.dispatch("login/alertName")
  }
 }
}
</script>