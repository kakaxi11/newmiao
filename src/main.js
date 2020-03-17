import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(Vant)
Vue.use(Mint)


 //将axios挂载到 全局
// axios.defaults.baseURL = 'http://39.97.33.178/' 
//因为使用了反向代理（反向代理里已经设置了地址），这里就不再需要设置基地址
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
