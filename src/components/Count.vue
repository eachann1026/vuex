<template>
  <div>
    <h2>{{msg}}</h2>
    <hr />

    <!-- 优化前 ~~> <h3>{{$store.state.count}}</h3> -->
    <!-- 优化后 ↓ -->
    <h3>{{count}}</h3>
    <p>
      <!-- commit 是 方法 固定的写法 -->
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
  </div>
</template>

<script>
  import store from "@/vuex/store";
  import hello from "@/components/HelloWorld";
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        msg: "hello vuex"
      };
    },
    // computed:{
    //   // 优化写法
    //   count(){
    //     return this.$store.state.count;
    //   }
    // },
    // 第三种写法 得先导包 这种最简便
    computed: mapState(['count']),
    mounted() {
      console.log(this.$store);
    },
    mounted() {
      console.log(this.$store)
    },
    // 不是组件(components)可以直接注册
    store,


  };

</script>
