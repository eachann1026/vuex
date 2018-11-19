// 3行代码 配置到项目中
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

//  store --> 数据仓库,把公用的数据存起来,减少对服务器的调用
//  vuex 适合中大型项目中使用  小型项目使用 vue stroe 会更轻便

const state = { //公用的数据
  count: 1
}

//修改状态的值必须经过 mutations
const mutations = {
  add(state) {
    state.count++;
  },
  reduce(state) {
    state.count--;
  }
}

// export 暴露/公开
export default new Vuex.Store({
  state,
  mutations
})
