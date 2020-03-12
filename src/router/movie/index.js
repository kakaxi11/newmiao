export default {
     path: '/movie',
     component: () => import('../../../src/views/movie'),   //懒加载写法
      children:[
         { path: '/city', component:() =>import('../../views/city.vue') }
      ]
   }


