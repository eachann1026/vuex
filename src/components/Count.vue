<template>
  <div>
    <h2>{{msg}}</h2>
    <hr />
    <h3>{{$store.state.count}}</h3>
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
  export default {
    data() {
      return {
        msg: "hello vuex"
      };
    },
    mounted() {
      console.log(this.$store)
    },
    // 不是组件(components)可以直接注册
    store,

  };

</script>
