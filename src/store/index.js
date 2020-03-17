import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store =  new Vuex.Store({     
  state: {
    nm:window.localStorage.getItem('nm')||'北京',    //一旦刷新，数据又会变为默认值北京，我们把数据保存到localStorage里面这样刷新
                                                     // 也不会丢失数据了
    id:window.localStorage.getItem('id')||1
  },
  mutations: {
      CHANGEST(state,payload){                     //payload表示当函数调用时传过来的参数。
        state.nm = payload.nm
        state.id = payload.id
      }
  },
  actions: {
  },
  modules: {
  }
})
export default store