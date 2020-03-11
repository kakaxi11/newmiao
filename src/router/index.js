import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

Vue.use(VueRouter)

const routes = [
  cinemaRouter,
  mineRouter,
  movieRouter,
  {
    path: '/', redirect: '/mine' 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 为了方便以后的扩展，以及防止该文件过大。我们把每个路由文件分离出去

export default router
